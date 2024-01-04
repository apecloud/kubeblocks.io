class kubechatComponent extends HTMLElement {
    constructor() {
        super();
    }

    // Custom Events

    readyEvent = new CustomEvent("ready", {
        bubbles: true, cancelable: false, composed: true
    });

    failedEvent = new CustomEvent("failed", {
        bubbles: true, cancelable: false, composed: true
    });

    openEvent = new CustomEvent("open", {
        bubbles: true, cancelable: false, composed: true
    });

    closeEvent = new CustomEvent("close", {
        bubbles: true, cancelable: false, composed: true
    });

    fullscreenEvent = new CustomEvent("fullscreen", {
        bubbles: true, cancelable: false, composed: true
    });

    warningMessage = [];

    caption = 'Kubechat';

    logoIcon = `
        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8Zz4KICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICAgIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogICAgPC9nPgogICAgPGc+CiAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgICA8ZyBzdHJva2U9Im51bGwiIGlkPSJzdmdfNDMiPgogICAgPGcgc3Ryb2tlPSJudWxsIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjEyOTM3NzQ3NDkyOTgzOTE3LDAsMCwwLjEyOTM3NzQ3NDkyOTgzOTE3LDUuMDgyMDQyNzczNDYxODEsNy41NjEwMjIxMTUyNzIwMDY1KSAiIGlkPSJzdmdfMzgiPgogICAgPHBhdGggc3Ryb2tlPSJudWxsIiBmaWxsPSJ3aGl0ZSIgZD0ibTE4LjYxNDMwMiwtMTUuNzE1NjQybC0xNC44MzQ4LDE0LjgzNDc3Yy0xMS4xMDk0NCw5LjY0MTcgLTE3Ljg5NTcxNywyMi41MjQyIC0xNy44OTU3MTcsMzYuNjc1NWMwLDI5Ljg4MjMgMzAuMjU5ODE3LDU0LjEwNjUgNjcuNTg3MTE3LDU0LjEwNjVjMzcuMzI3NSwwIDY3LjU4NzUsLTI0LjIyNDIgNjcuNTg3NSwtNTQuMTA2NWMwLC0xNC4xNTEyIC02Ljc4NywtMjcuMDMzNSAtMTcuODk2LC0zNi42NzUxbC0xNC44MzUsLTE0LjgzNTE0Yy0zLjU2MywtMy41NjMxOSAtOC4zOTU4LC01LjU2NDk3MSAtMTMuNDM0OSwtNS41NjQ5NzFsLTQyLjg0MzIsMGMtNS4wMzkxLDAgLTkuODcxOCwyLjAwMTc3MSAtMTMuNDM1LDUuNTY0OTQxem0zLjAxMjMsMjQuNDg1MTdjMi4yNjk5LC00LjA5ODYgNi40MzQ4LC0xMS42MTkgMTIuMjAwMywtMTEuNjE5bDM3Ljc2NjQsMGMzLjIxODgsLTAuNTAwNyAxMC44MTQ5LDEuMjg3NiAxNS40NTAxLDEyLjQ0NThjMC4xNzgsMC40MjgzIDAuMzY2LDAuODc4NiAwLjU2MywxLjM0OWM1Ljg0OCwxMy45NjU4IDE5LjExMyw0NS42NDQ1IC0xOC4zNzM1LDQ1LjY0NDVsLTM1LjQwNiwwYy0xMi45NDY1LC0wLjE0MzEgLTMzLjYwMzYsLTkuNzQyMSAtMTIuNjYwMywtNDYuOTkzNWMwLjE0MzQsLTAuMjU1MiAwLjI5NjgsLTAuNTMyMiAwLjQ2LC0wLjgyNjh6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9InN2Z180MSIvPgogICAgPHBhdGggc3Ryb2tlPSJudWxsIiBmaWxsPSJ3aGl0ZSIgZD0ibTMxLjEyODYwMiwyMC41NjA4MjhjMC4yNzk2LC0yLjQ1OTYgMi4zNjA3LC00LjMxNzUgNC44MzYxLC00LjMxNzVjMi40NzU0LDAgNC41NTY1LDEuODU3OSA0LjgzNjEsNC4zMTc1bDAuNjIzMiw1LjQ4MTRjMC4wNTk3LDAuNTI1NCAwLjA1OTcsMS4wNTYgMCwxLjU4MTRsLTAuNjIzMiw1LjQ4MTRjLTAuMjc5NiwyLjQ1OTYgLTIuMzYwNyw0LjMxNzUgLTQuODM2MSw0LjMxNzVjLTIuNDc1NCwwIC00LjU1NjUsLTEuODU3OSAtNC44MzYxLC00LjMxNzVsLTAuNjIzMiwtNS40ODE0Yy0wLjA1OTcsLTAuNTI1NCAtMC4wNTk3LC0xLjA1NiAwLC0xLjU4MTRsMC42MjMyLC01LjQ4MTR6IiBpZD0ic3ZnXzQwIi8+CiAgICA8cGF0aCBzdHJva2U9Im51bGwiIGZpbGw9IndoaXRlIiBkPSJtNjkuNjU5ODAyLDIwLjU2MDgyOGMwLjI3OTcsLTIuNDU5NiAyLjM2MDgsLTQuMzE3NSA0LjgzNjIsLTQuMzE3NWMyLjQ3NTMsMCA0LjU1NjUsMS44NTc5IDQuODM2MSw0LjMxNzVsMC42MjMyLDUuNDgxNGMwLjA1OTcsMC41MjU0IDAuMDU5NywxLjA1NiAwLDEuNTgxNGwtMC42MjMyLDUuNDgxNGMtMC4yNzk2LDIuNDU5NiAtMi4zNjA4LDQuMzE3NSAtNC44MzYxLDQuMzE3NWMtMi40NzU0LDAgLTQuNTU2NSwtMS44NTc5IC00LjgzNjIsLTQuMzE3NWwtMC42MjMxLC01LjQ4MTRjLTAuMDU5OCwtMC41MjU0IC0wLjA1OTgsLTEuMDU2IDAsLTEuNTgxNGwwLjYyMzEsLTUuNDgxNHoiIGlkPSJzdmdfMzkiLz4KICAgIDwvZz4KICAgIDwvZz4KICAgIDwvZz4KICAgIDwvc3ZnPg==
    `;

    sendMsgIcon = `
        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0xIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlkPSJzdmdfMSIgZmlsbD0iIzdjNDhmZiIgZD0ibTIwLjAxOTEsMTAuMjczbC0xMS40MjMwOCwtNi44MzIwM2MtMi43MjEsLTEuNjI4IC01Ljc5Mzg1LDEuNDk2OTggLTQuMTIwODUsNC4xOTA5OGwyLjE1ODk0LDMuNDc2MDVjMC4wNTUsMC4wODggMC4xNTA4OCwwLjE0MiAwLjI1NDg4LDAuMTQybDYuMTExMTEsMGMwLjQxLDAgMC43NSwwLjM0IDAuNzUsMC43NWMwLDAuNDEgLTAuMzQsMC43NSAtMC43NSwwLjc1bC02LjExMjA5LDBjLTAuMTA0LDAgLTAuMTk5ODgsMC4wNTQgLTAuMjU0ODgsMC4xNDJsLTIuMTU4OTMsMy40NzZjLTEuNjczLDIuNjk0IDEuMzk5ODUsNS44MTkgNC4xMjA4NSw0LjE5MWwxMS40MjMwNSwtNi44MzJjMS4zMDcsLTAuNzgxIDEuMzA3LC0yLjY3MyAwLjAwMSwtMy40NTR6Ii8+CiA8L2c+Cjwvc3ZnPg==
    `;

    likeIcon = `
        data:image/svg+xml;base64,PHN2ZyB0PSIxNzAwMTUyMzQ5NzI1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgwNTEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTg1LjMzMzMzMyA5NjBhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS00Mi42NjY2NjYtNDIuNjY2NjY3VjQ2OS4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi42NjY2NjYtNDIuNjY2NjY2aDE3MC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA0Mi41NiAzOS41MzA2NjYgMTA3Ljk0NjY2NyAxMDcuOTQ2NjY3IDAgMCAwIDMwLjIwOC0xMi41ODY2NjYgMTAwLjA1MzMzMyAxMDAuMDUzMzMzIDAgMCAwIDguMjc3MzMzLTUuNzE3MzM0IDEzMi40OCAxMzIuNDggMCAwIDAgMTkuMi0xOC4yMTg2NjYgMTczLjcxNzMzMyAxNzMuNzE3MzMzIDAgMCAwIDI2LjE3Ni00MC40NDhsMTMzLjI0OC0yOTkuODgyNjY3QTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgNTU0LjY2NjY2NyA2NGg2NC4xMDY2NjZBMTA2LjcwOTMzMyAxMDYuNzA5MzMzIDAgMCAxIDcyNS4zMzMzMzMgMTcwLjUxNzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAxLTAuNjgyNjY2IDcuNjE2TDY5MS4xMTQ2NjcgMzYyLjY2NjY2N2gxNzQuMTIyNjY2YzcyLjc4OTMzMyAwIDEyNS40ODI2NjcgNjAuMzczMzMzIDExNC42ODggMTMxLjg0LTAuODc0NjY3IDEwLjE1NDY2Ny0zLjM0OTMzMyAyNy4zNDkzMzMtOC4yMTMzMzMgNTEuNTg0LTguNDQ4IDQxLjg5ODY2Ny0yMS42NzQ2NjcgOTEuODYxMzMzLTQwLjc0NjY2NyAxNDkuOTA5MzMzLTIuMDI2NjY3IDYuMTAxMzMzLTQuMDUzMzMzIDEyLjEzODY2Ny02LjEyMjY2NiAxOC4xMzMzMzMtMTguMzQ2NjY3IDUzLjMxMi0zOC4xMDEzMzMgOTkuOTA0LTU3LjkyIDEzOS41Mi0xMS43NTQ2NjcgMjMuNDY2NjY3LTIxLjE4NCAzOS45Nzg2NjctMjcuMTM2IDQ5LjI4QzgyMC4yMDI2NjcgOTM1Ljk1NzMzMyA3NzguMTMzMzMzIDk2MCA3MzkuNjI2NjY3IDk2MEg4NS4zMzMzMzN6IG0yMTMuMzMzMzM0LTg1LjMzMzMzM2g0NDAuOTZjOC40MjY2NjcgMCAyMi43NDEzMzMtOC4yNTYgMjYuNzk0NjY2LTE1LjMxNzMzNGwxLjE3MzMzNC0xLjkyYzAuODUzMzMzLTEuMzQ0IDIuODU4NjY3LTQuNTg2NjY3IDUuODAyNjY2LTkuNzI4IDUuMTItOC45Mzg2NjcgMTAuOTIyNjY3LTE5LjY5MDY2NyAxNy4yMTYtMzIuMjM0NjY2IDE4LjE3Ni0zNi4zMzA2NjcgMzYuNDM3MzMzLTc5LjQ0NTMzMyA1My41NDY2NjctMTI5LjEzMDY2NyAxLjkyLTUuNjEwNjY3IDMuODQtMTEuMjY0IDUuNzE3MzMzLTE3LjAwMjY2NyAxOC4wMjY2NjctNTQuODQ4IDMwLjQyMTMzMy0xMDEuNTQ2NjY3IDM4LjE4NjY2Ny0xNDAuMDc0NjY2IDIuNjQ1MzMzLTEzLjIyNjY2NyA0LjU0NC0yNC40MDUzMzMgNS44MDI2NjctMzMuNTU3MzM0IDAuNzA0LTUuMTQxMzMzIDEuMDI0LTguMjU2IDEuMTA5MzMzLTkuMzY1MzMzbDAuNDY5MzMzLTMuOTA0YzMuMzI4LTE5Ljk0NjY2Ny05LjE1Mi0zNC40MzItMzAuMjA4LTM0LjQzMkg2NDBhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMS00MS45ODQtNTAuMzA0bDQxLjgxMzMzMy0yMjkuOTczMzMzQTIxLjQxODY2NyAyMS40MTg2NjcgMCAwIDAgNjE4Ljc1MiAxNDkuMzMzMzMzSDU4Mi40bC0xMjEuMjM3MzMzIDI3Mi43NjhjLTcuMDQgMTcuMDQ1MzMzLTIwLjIwMjY2NyA0MC4yNzczMzMtNDAuNjE4NjY3IDYzLjY4LTkuNTc4NjY3IDEwLjk4NjY2Ny0yMC4wNTMzMzMgMjAuOTkyLTMxLjUwOTMzMyAyOS44MDI2NjctNS4wMzQ2NjcgMy44NC0xMC4yMTg2NjcgNy40MjQtMTUuNTUyIDEwLjY4OGExOTMuNjQyNjY3IDE5My42NDI2NjcgMCAwIDEtNjMuNTczMzM0IDI0LjgxMDY2NyAyMDQuMTgxMzMzIDIwNC4xODEzMzMgMCAwIDEtMTEuMjQyNjY2IDEuOTQxMzMzVjg3NC42NjY2Njd6IG0tMTcwLjY2NjY2NyAwaDg1LjMzMzMzM1Y1MTJIMTI4djM2Mi42NjY2Njd6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSI4MDUyIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4LnNlYXJjaF9pbmRleC4wLmk3LjczODgzYTgxSlF2NjA0IiBjbGFzcz0ic2VsZWN0ZWQiPjwvcGF0aD48L3N2Zz4=
    `;

    dislikeIcon = `
        data:image/svg+xml;base64,PHN2ZyB0PSIxNzAwMTUyMjE2ODg0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc4MDEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTkzOS4zMTQyODYgNDg3LjJjNC4xMTQyODYtMTMuNzE0Mjg2IDYuMTcxNDI5LTI3Ljg4NTcxNCA2LjE3MTQyOC00Mi4yODU3MTQgMC0zMi4zNDI4NTctMTAuNjI4NTcxLTYzLjQyODU3MS0yOS44Mjg1NzEtODguOCA0LjExNDI4Ni0xMy43MTQyODYgNi4xNzE0MjktMjcuODg1NzE0IDYuMTcxNDI4LTQyLjI4NTcxNSAwLTMyLjM0Mjg1Ny0xMC42Mjg1NzEtNjMuNDI4NTcxLTI5LjgyODU3MS04OC44IDQuMTE0Mjg2LTEzLjcxNDI4NiA2LjE3MTQyOS0yNy44ODU3MTQgNi4xNzE0MjktNDIuMjg1NzE0IDAtNTguOTcxNDI5LTM1LjA4NTcxNC0xMTIuMTE0Mjg2LTg5LjQ4NTcxNS0xMzUuMzE0Mjg2YTc1LjU0Mjg1NyA3NS41NDI4NTcgMCAwIDAtMzAuMjg1NzE0LTYuMTcxNDI4SDkxLjQyODU3MWMtMjAuMjI4NTcxIDAtMzYuNTcxNDI5IDE2LjM0Mjg1Ny0zNi41NzE0MjggMzYuNTcxNDI4djQxNmMwIDIwLjIyODU3MSAxNi4zNDI4NTcgMzYuNTcxNDI5IDM2LjU3MTQyOCAzNi41NzE0MjloMTQ3Ljc3MTQyOWw5OC4wNTcxNDMgMzU1LjJDMzUzLjAyODU3MSA5NDIuODU3MTQzIDQwNS42IDk4Mi44NTcxNDMgNDY1LjAyODU3MSA5ODIuODU3MTQzYzMzLjk0Mjg1NyAwIDY1LjYtMTMuNDg1NzE0IDg5LjAyODU3Mi0zOC4xNzE0MjkgMjMuNDI4NTcxLTI0LjU3MTQyOSAzNS40Mjg1NzEtNTYuOCAzMy43MTQyODYtOTAuNzQyODU3bC02Ljg1NzE0My0xNDAuNDU3MTQzaDI3NC4xNzE0MjhjMTMuODI4NTcxIDAgMjcuMzE0Mjg2LTMuNjU3MTQzIDM5LjItMTAuNjI4NTcxIDQ2LjE3MTQyOS0yNi44NTcxNDMgNzQuODU3MTQzLTc1LjU0Mjg1NyA3NC44NTcxNDMtMTI2Ljg1NzE0MyAwLTMyLjM0Mjg1Ny0xMC42Mjg1NzEtNjMuNDI4NTcxLTI5LjgyODU3MS04OC44ek0xMzcuMTQyODU3IDQ0OFYxMjMuNDI4NTcxaDkyLjU3MTQyOXYzMjQuNTcxNDI5aC05Mi41NzE0Mjl6IG03MTYuOCAxODMuMzE0Mjg2SDQ5NC42Mjg1NzFsMTAuOTcxNDI5IDIyNi43NDI4NTdjMC42ODU3MTQgMTMuNi01LjM3MTQyOSAyNi40LTE2LjY4NTcxNCAzNC44NTcxNDMtNi45NzE0MjkgNS4xNDI4NTctMTUuNTQyODU3IDcuNzcxNDI5LTI0LjExNDI4NiA3LjY1NzE0M2E1MC42MDU3MTQgNTAuNjA1NzE0IDAgMCAxLTQ4LjIyODU3MS0zNi45MTQyODZMMzAyLjg1NzE0MyA0NTEuNjU3MTQzVjEyMy40Mjg1NzFoNDc0Ljc0Mjg1N2E2NC45NzE0MjkgNjQuOTcxNDI5IDAgMCAxIDM4LjQgNTkuMmMwIDExLjA4NTcxNC0yLjYyODU3MSAyMS42LTcuODg1NzE0IDMxLjJsLTE1Ljg4NTcxNSAyOS4wMjg1NzIgMjUuMDI4NTcyIDIxLjcxNDI4NmE2NC44Njg1NzEgNjQuODY4NTcxIDAgMCAxIDIyLjQgNDkuMTQyODU3YzAgMTEuMDg1NzE0LTIuNjI4NTcxIDIxLjYtNy44ODU3MTQgMzEuMmwtMTUuODg1NzE1IDI5LjAyODU3MSAyNS4wMjg1NzIgMjEuNzE0Mjg2YTY0Ljg2ODU3MSA2NC44Njg1NzEgMCAwIDEgMjIuNCA0OS4xNDI4NTdjMCAxMS4wODU3MTQtMi42Mjg1NzEgMjEuNi03Ljg4NTcxNSAzMS4ybC0xNiAyOS4xNDI4NTcgMjUuMDI4NTcyIDIxLjcxNDI4NmE2NC44Njg1NzEgNjQuODY4NTcxIDAgMCAxIDIyLjQgNDkuMTQyODU3YzAgMjEuODI4NTcxLTEyLjU3MTQyOSA0Mi44NTcxNDMtMzIuOTE0Mjg2IDU1LjMxNDI4NnoiIHAtaWQ9Ijc4MDIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTEuNzM4ODNhODFKUXY2MDQiIGNsYXNzPSIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=
    `;

    getDefaultStyle = () => {
        return `
        :host {
            --text-color: rgba(255,255,255,0.65);
            --text-color-tips: rgba(255,255,255,0.2);
            --text-color-score: rgba(255,255,255,0.45);
            --text-color-input: rgba(255,255,255, 0.8);
            --text-color-code: rgba(255,255,255,0.85);
            --text-color-spot: #fff;
            --bg-color-logo: #7C48FF;
            --bg-color-bot: rgba(32,33,45,0.5);
            --bg-color-header: rgba(0,0,0,0.5);
            --bg-color-ref: rgba(255,255,255,0.1);
            --bg-color-code: rgba(0,0,0,0.5);
            --bg-color-note: rgba(255,255,255,0.15);
            --bg-color-answer: rgba(255,255,255,0.05);
            --bg-color-ai: rgba(124,72,255,1);
            --bg-color-question: #1B2F60;
            --bg-color-human: #3f3f43;
            --border-color-action: rgba(255,255,255,0.1);
            --border-color-hr: rgba(255,255,255,0.5);
            --topic-shadow: 0 0 15px rgba(0,0,0,0.1);
            --bot-shadow-right: -9px 0 28px 8px rgba(0, 0, 0, 0.5), -6px 0 16px 0 rgba(0, 0, 0, 0.5), -3px 0 6px -4px rgba(0, 0, 0, 0.2);
            --bot-shadow-left: 9px 3px 28px 8px rgba(0, 0, 0, 0.5), 6px 3px 16px 0 rgba(0, 0, 0, 0.5), 3px 3px 6px -4px rgba(0, 0, 0, 0.2);
        }

        * {
            box-sizing: unset;
            font-size: 14px;
            font-family: monospace, Verdana, Geneva, Tahoma, sans-serif;
            color: var(--text-color);
            margin: 0;
            padding: 0;
        }

        ::-webkit-scrollbar {
            display: none;
        }

        input {
            border-radius: 8px;
            border: 1px solid var(--border-color-action);
            color: var(--text-color-input);
            background: none;
        }

        input:focus {
            outline-style: none;
            border: 1px solid rgba(124,72,255,1);
            box-shadow: 0 0 0 2px rgba(150, 122, 244, 0.18);
        }

        q {
            background: var(--bg-color-note);
            border-radius: 4px;
            font-size:100%;
            quotes: none;
            padding: 0 0.5rem;
        }

        hr {
            border: none;
            height: 1px;
            background: var(--border-color-hr);
            margin: 1rem 0;
        }

        li {
            display: list-item;
            margin-left: 1rem;
        }

        :where(.word,.text) :where(h1,h2,h3,h4,h5,h6):not(:first-child) {
            margin: 2rem 0 0.5rem;
        }

        :where(.word,.text) h6 {
            font-size: 1rem;
        }

        :where(.word,.text) h5 {
            font-size: 1.1rem;
        }

        :where(.word,.text) h4 {
            font-size: 1.2rem;
        }

        :where(.word,.text) h3 {
            font-size: 1.3rem;
        }

        :where(.word,.text) h2 {
            font-size: 1.4rem;
        }

        :where(.word,.text) h1 {
            font-size: 1.5rem;
        }

        :where(.word,.text) p {
            margin: 0.5rem 0;
            min-height: 0.5rem;
        }

        code {
            display: block;
            background: var(--bg-color-code);
            color: var(--text-color-code);
            padding: 1rem;
            font-size: 0.8rem;
            border-radius: 4px;
            margin-bottom: 1rem;
            position: relative;
            pointer-events: none;
            cursor: copy;
        }
        code::before{
            content: attr(data-type);
            display:block;
            pointer-events: none;
        }
        code::after{
            content: attr(data-copy);
            font-size: 1.8rem;
            position: absolute;
            z-index: 1;
            right: 1rem;
            top: 0;
            pointer-events: auto;
        }

        note {
            display: inline-block;
            background: var(--bg-color-note);
            border: 1px solid var(--border-color-action);
            padding: 1rem;
            font-size: 0.8rem;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
    
        .wrapper {
            position: relative;
        }
    
        .icon {
            display: flex;
            width: 64px;
            height: 64px;
            place-content: center;
            cursor: pointer;
            background:transparent;
            border-radius: 50%;
            position: relative;
        }
    
        .logo {
            width: 100%;
            border-radius: 50%;
            border: none;
            background: url(${this.logoIcon}) center center/100% no-repeat, var(--bg-color-logo);
            display: none;
        }

        .logo.customized{
            background: #7C48FF;
        }
    
        .bot {
            font-size: 0.8rem;
            min-width: 330px;
            width: 30vw;
            height: 70vh;
            border: 1px solid var(--border-color-action);
            border-radius: 10px;
            background: var(--bg-color-bot);
            display: none;
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 99999;
            box-shadow: var(--bot-shadow-right);
            transition: all 0.3s ease;
        }
    
        .leftTop{
            top: 0;
            left: 0;
            right: unset;
            bottom: unset;
            box-shadow: var(--bot-shadow-left);
        }
    
        .rightTop{
            top: 0;
            right: 0;
            bottom: unset;
            left: unset;
        }
    
        .rightBottom{
            bottom: 0;
            right: 0;
            top: unset;
            left: unset;
        }
    
        .leftBottom{
            bottom: 0;
            left: 0;
            top: unset;
            right: unset;
            box-shadow: var(--bot-shadow-left);
        }

        .workspace {
            position:relative;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior: contain;
            -ms-scroll-chaining: contain;
            display: flex;
            flex-flow: column;
        }

        .hd {
            position: sticky;
            top: 0;
            padding: 1rem;
            background: var(--bg-color-header);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            display: flex;
            justify-content: left;
            align-items: center;
            border-radius: 10px 10px 0 0;
            z-index: 20;
        }

        .hd .title {
            flex: content;
        }

        .hd .action {
            display: flex;
            justify-content: right;
            gap: 5px;
        }

        .hd .action span {
            display: inline-block;
            width: 16px;
            height: 16px;
            line-height: 1;
            text-align: center;
            cursor: pointer;
            background: linear-gradient(0deg, var(--border-color-action), var(--border-color-hr));
            border-radius: 50%;
            transition: all 0.1s ease;
        }

        .hd .action span:hover {
            transform: scale(1.3);
        }

        .bd {
            flex: content;
            padding: 50px 1rem;
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
        }

        .topic {
            display: flex;
            gap: 10px;
            margin-bottom: 24px;
        }

        .question {
            flex-direction: row-reverse;
        }

        .topic .avatar div {
            width: 32px;
            height: 32px;
            line-height: 34px;
            border-radius: 50%;
            box-shadow: var(--topic-shadow);
        }

        .question .avatar div {
            display: flex;
            place-content: center;
            font-size: 2rem;
            background: var(--bg-color-human);
            cursor: default;
        }

        .answer .avatar div {
            background: url(${this.logoIcon}) center center/100% no-repeat, var(--bg-color-ai);
        }

        .topic .word {
            padding: 16px;
            min-height: 18px;
            background: var(--bg-color-answer);
            border-radius: 0 12px 12px;
            box-shadow: var(--topic-shadow);
            word-break: break-word;
        }

        .topic .word a{
            color: var(--text-color-spot);
            text-decoration: none;
            margin: 0 4px;
        }
        .topic .word a::after {
            content: "⎘";
            margin-left: 4px;
        }

        .faq {
            display: inline-flex;
            font-style: unset;
            border-radius: 8px;
            padding: 1rem;
            margin: 0.5rem;
            background: var(--bg-color-answer);
            cursor: pointer;
        }

        .related{
            margin-top: 2rem;
            border-top: 1px solid rgba(0,0,0,0.5);
        }

        .related .tips{
            margin: 0;
            padding: 2rem 0.5rem 1rem;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .question .word {
            background: var(--bg-color-question);
            border-radius: 12px 0 12px 12px;
        }

        .topic .info {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .topic :where(.time, .reference) {
            font-size: 0.6rem;
            padding: 0.5rem;
        }

        .topic .reference {
            cursor: pointer;
        }
        .topic .reference::before{
            content: "📖";
            margin-right: 4px;
        }

        .topic .reference .ref-detail{
            display:none;
        }

        .topic .action {
            flex: content;
        }

        .topic .action button {
            visibility: hidden;
            padding: 1rem;
            margin: 5px;
            border-radius: 10px;
            border: 1px solid var(--border-color-action);
            cursor: pointer;
        }

        .topic .action:hover button {
            visibility: visible;
        }

        .topic .action .like {
            background: url(${this.likeIcon}) center center/50% no-repeat, var(--bg-color-answer);
        }

        .topic .action .dislike {
            background: url(${this.dislikeIcon}) center center/50% no-repeat, var(--bg-color-answer);
        }

        .topic .action .voted {
            background-color:#7C48FF;
        }

        .ft {
            position: sticky;
            bottom: 0;
            padding: 1rem;
            border-radius: 0 0 10px 10px;
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            z-index: 20;
        }

        .ask {
            display: flex;
            width: 100%;
            height: 100%;
            position: relative;
            cursor: pointer;
        }

        .ask input {
            box-sizing: border-box;
            padding: 1rem 3.5rem 1rem 1rem;
            width: 100%;
        }

        .ask:has(:not(input:valid, input:focus))::before {
            content: "Ask me something ;)";
            box-sizing: border-box;
            white-space: pre;
            position: absolute;
            display: flex;
            align-items: center;
            z-index: -1;
            left: 0;
            top: 0;
            padding: 0 1rem;
            width: 100%;
            height: 100%;
            color: var(--text-color-tips);
        }

        .ask.tips1:has(:not(input:valid, input:focus))::before {
            content: "Type /clear to clear chat history";
        }

        .ask.tips2:has(:not(input:valid, input:focus))::before {
            content: "Ask me something ;)";
        }

        .ask::after {
            content: " ";
            position: absolute;
            right: 8px;
            top: 0;
            width: 32px;
            height: 100%;
            background: url(${this.sendMsgIcon}) center center/80% no-repeat;
        }

        .flying .ask::after {
            animation: flying 1.5s ease-out infinite;
        }

        .flying .ask::before {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            cursor: default;
            background: var(--bg-color-ref);
        }

        .ext {
            position: absolute;
            right: 0;
            bottom: 1rem;
            z-index: 90;
            width: 50vw;
            height: 50vh;
            overflow-x: hidden;
            overflow-y: auto;
            overscroll-behavior: contain;
            -ms-scroll-chaining: contain;
            border-radius: 10px;
            background: rgba(32,33,45,0.9);
            box-shadow: var(--bot-shadow-right);
            display: none;
            transition: all 0.5s ease;
        }

        .rightTop .ext {
            right: 0;
            top: 1rem;
        }

        .leftTop .ext {
            left: 0;
            top: 1rem;
            box-shadow: var(--bot-shadow-left);
        }

        .leftBottom .ext {
            left: 0;
            bottom: 1rem;
            box-shadow: var(--bot-shadow-left);
        }

        .full-screen .ext {
            width: 50vw;
            height: 100vh;
            top: 0;
        }

        @media (max-width:650px){
            .full-screen .ext,.ext {
                width: 80vw;
            }
        }

        .ext .bd {
            padding: 0;
            background: var(--bg-color-bot);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .ext .bd-wrap {
            padding: 24px 1rem;
            margin: 1rem;
            background: var(--bg-color-ref);
            border-radius: 10px;
        }
            
        .ext .title-wrap {
            display: flex;
            height: 28px;
            font-weight: 600;
            align-items: center;
        }
        
        .ext .title-wrap .title{
            flex: content;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-indent: 5px;
        }
        
        .ext .title-wrap .score{
            color: var(--text-color-score);
            font-weight: 200;
            font-size: 0.8rem;
            white-space: nowrap;
            text-indent: 5px;
        }
        
        .ext .text {
            display: block;
            padding-top: 6px;
            font-size: 0.9rem;
            font-weight: 200;
            word-break: break-word;
        }

        .full-screen {
            position: fixed;
            width: 100vw;
            height: 100vh;
            z-index: 99999;
        }

        .visible {
            display: block;
        }
        
        @keyframes flying {
            0% {
                background-position: -100% 50%;
                background-size: 60%;
            }
            50% {
                background-position: 50% 50%;
                background-size: 60%;
            }
            100% {
                background-position: 250% 50%;
                background-size: 60%;
            }
        }

        .thinking {
            display: inline-block;
            width: 2px;
            height: 15px;
            background: #fff;
            vertical-align: middle;
            animation: typing 1s linear infinite;
        }

        .thinking i{
            display:none;
        }

        @keyframes typing {
            0%,50% {
                visibility: hidden;
            }
            51%,100% {
                visibility: visible;
            }
        }

        .flying .thinking {
            display: grid;
            width: 50px;
            height: unset;
            grid-template-columns: repeat(5, 1fr);
            justify-items: center;
            column-gap: 5px;
            animation: none;
            background: none;
        }
            
        .flying .thinking i {
            display: inline-flex;
            width: 4px;
            height: 10px;
            border-radius: 1px;
            background: #7C48FF;
            animation: thinking 1.2s ease-in-out infinite;
        }
            
        .flying .thinking i:nth-child(2) {
            animation-delay: 0.1s;
        }
            
        .flying .thinking i:nth-child(3) {
            animation-delay: 0.2s;
        }
            
        .flying .thinking i:nth-child(4) {
            animation-delay: 0.3s;
        }
            
        .flying .thinking i:nth-child(5) {
            animation-delay: 0.4s;
        }
            
        @keyframes thinking {
            0%,
            40%,
            100% {
                transform: scaleY(1);
            }
            20% {
                transform: scaleY(2.5);
            }
        }

        .waiting{
            position: relative;
            cursor: not-allowed;
            pointer-events: none;
        }

        .waiting * {
            opacity: 0.6;
        }

        .waiting::before {
            content: "";
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
            position: absolute;
            display: flex;
            z-index: 1;
            width: 100%;
            height: 100%;
        }

        .waiting::after {
            content: "";
            display: inline-flex;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 50%);
            border-color: #fff transparent #fff transparent;
            position: absolute;
            left: calc(50% - 8px);
            top: calc(50% - 8px);
            z-index: 2;
            animation: waiting 2s linear infinite;
        }

        .warning::before {
            background: rgba(0,0,0,0.8);
            border-radius: 50%;
            cursor: not-allowed;
            pointer-events: visible;
        }
        .warning::after {
            content: "⚠︎";
            width: 32px;
            height: 32px;
            line-height: 22px;
            left: calc(50% - 16px);
            top: calc(50% - 16px);
            font-size: 4rem;
            color: red;
            border: none;
            border-radius: 0;
            animation: none;
        }

        @keyframes waiting {
            0% {
                transform: rotate(0deg);
            }
            
            100% {
                transform: rotate(360deg);
            }
        }

        /* fit mode */
        .fit .icon {
            display: none;
        }

        .fit .action .close {
            display: none;
        }

        .fit .ext .hd .action .close {
            display: inline-block;
        }

        .fit .bot {
            display: block;
            width: 100%;
        }

        .fit .warning::before {
            background: none;
            border-radius: none;
        }

        .fit .warning::after {
            content: attr(title);
            border: none;
            animation: none;
            width: 50%;
            height: unset;
            line-height: unset;
            font-size: unset;
            color: var(--text-color-score);
            left: 25%;
            overflow:hidden;
        }

        /*Customized Style*/
        ${this.customStyle}
        `;
    };

    // Detect bot position
    detectPosition = (dom) =>{
        const l = dom.offsetLeft, t = dom.offsetTop, w = window.innerWidth, h =window.innerHeight;
        const pos = {
            '00': 'leftTop',
            '01': 'leftBottom',
            '10': 'rightTop',
            '11': 'rightBottom',
        }
        const il = (l>w/2)?'1':'0';
        const bl = (t>h/2)?'1':'0';
        return pos[il+bl];
    };

    // Update bot position
    updateBotPosition = () => {
        const pos = this.detectPosition(this.parentNode);
        this.bot.classList.remove('leftTop', 'leftBottom', 'rightTop', 'rightBottom');
        this.bot.classList.add(pos);
    };

    // Display bot or not
    setBotExpand = (bShow) => {
        if(!this.readyToGo){
            console.log('The chat bot is not ready, please check the messages in the console.');
            return;
        }
        if(bShow){
            this.updateBotPosition();
            this.botExpand = true;
            this.bot.classList.add('visible');
            this.logo.classList.remove('visible');
            this.chatDom?.scrollIntoView({ behavior: 'instant', block: 'end' });
            this.dispatchEvent(this.openEvent);
        }else{
            this.botExpand = false;
            this.bot.classList.remove('visible');
            this.logo.classList.add('visible');
            this.dispatchEvent(this.closeEvent);
        }
    };

    setChatWaiting = (bWaiting) => {
        if(bWaiting){
            this.waiting = true;
            this.bot.classList.add('flying');
        }else{
            this.waiting = false;
            this.bot.classList.remove('flying');
        }
    };

    // Show reference
    showReference = (ref)=>{
        const bot = this.bot;
        const w = bot.offsetWidth;
        const h = bot.offsetHeight;
        const l = window.innerWidth - w;
        const t = window.innerHeight - h;

        const reference = this.refDom;
        if(!reference){return;}
        if(ref){
            const extbd = reference.getElementsByClassName('ext-bd')[0];
            if(extbd){
                extbd.innerHTML = ref;
            }
            reference.style.left = '0';
            reference.style.top = '0';
            reference.style.width = w+'px';
            reference.style.height = h+'px';
            reference.classList.add('visible');
            const exthd = reference.getElementsByClassName('hd')[0];
            exthd.scrollIntoView({behavior:'instant', block:'start'});
        }else{
            reference.classList.remove('visible');
            this.chatDom?.scrollIntoView({behavior:'instant', block:'end'});
        }
    };

    // Toggle fullscreen
    toggleFullScreen = ()=>{
        this.bot.classList.toggle('full-screen');
        this.isFullScreen = this.bot.classList.contains('full-screen');
        if(this.isFullScreen){
            this.dispatchEvent(this.fullscreenEvent);
        }
    };

    // Cookie
    getCookie =(key) => {
        return document.cookie.replace(
            new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
            "$1"
        );
    };

    setCookie = (key, value) => {
        document.cookie = `${key}=${value}`;
    };

    // Util
    timestampToTime = (timestamp) => {
        if(!timestamp){return '';}
        let date = new Date(timestamp);
        let Y = date.getFullYear() + "-";
        let M =
            (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        let D = date.getDate();
        if(D<10){D = '0' + D;}
        let h = date.getHours();
        if(h<10){h = '0' + h;}
        let m = date.getMinutes();
        if(m<10){m = '0' + m;}
        let s = date.getSeconds();
        if(s<10){s = '0' + s;}
        return Y + M + D + ' ' + h + ':' + m + ':' + s;
    };

    copyText = (dom) =>{
        if(!dom){return;}
        const range = document.createRange();
        range.selectNodeContents(dom);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();
    };

    formatMarkdown = (str) => {
        let r = str.replace(/^\s+/, "")
        .replace(/</g,'&lt;').replace(/>/g, '&gt;')//encode html tag
        .replace(/&lt;(\/?details|\/?summary|br\/?)&gt;/ig,'<$1>')//restore details,summary,br tags
        .replace(/\[([^\]]*?)\]\(([^\)]*?)\)/g, (a,b,c)=>`<a href="${c.replace(/\#/g,'&#35;')}" target="_blank">${b.replace(/\#/g,'&#35;')}</a>`)//link
        .replace(/\:{3}\s*([^\s\n]*)([\s\n]+[\w\W]+?)\:{3}/g, '<code class="note" data-type="$1" data-copy="⎘">$2</code>')//note
        .replace(/\`{3}\s*([^\s\n]*)([\s\n]+[\w\W]+?)\`{3}/g, (a,b,c)=>`<code class="code" data-type="${b}" data-copy="⎘">${c.replace(/\-/g,'&#45;').replace(/(\*)]/g,'&#42;')}</code>`)//code
        .replace(/(?:^|[^&])(\#+)\s*([^\n]+)/g, (a,b,c)=>{let l = b.length;return `<h${l}>${c}</h${l}>`;})//header
        .replace(/([^\`])\`([^\`]+)\`/g, (a,b,c)=>`${b}<q>${c.replace(/\_/g,'&#95;').replace(/\*/g,'&#42;')}</q>`)//quote
        .replace(/\*{2}([^\*\n]+)\*{2}/g, '<strong>$1</strong>')//bold
        .replace(/\_{2}([^\*\n]+)\_{2}/g, '<strong>$1</strong>')//bold
        .replace(/\*([^\*\n]+)\*/g, '<i>$1</i>')//italic
        .replace(/\_([^\*\n]+)\_/g, '<i>$1</i>')//italic
        .replace(/\n+\s*[\-\*]\s+([^\n]+)/g, '\n<li>$1</li>')//list
        .replace(/\n+\s*(\d+[\.）]\s*[^\n]+)/g, '\n\n$1')//list 2
        .replace(/(?:\-+\+)+\-+/g, '\n')//remove table split
        .replace(/(?:\|\s*\:?\-+\:?\s*)+\|/g, '\n')//remove table split
        .replace(/[\-\*\_]{3,}/g, '<hr/>')//split line
        .replace(/\^([^\^]+)\^/g, '<sup>$1</sup>')//sup
        .replace(/\~([^\~]+)\~/g, '<sub>$1</sub>')//sub
        .replace(/\n{2,}/g, '<p></p>')
        .replace(/\:paperclip\:/ig, '')
        .replace(/\n/g, '<br/>')
        
        return r;
    };

    // Network
    request = (options={}) => {
        let { url, method, header, params, payload, onsuccess=()=>{}, onerror=()=>{} } = options;
        if(!url){return;}
        let xhr = new XMLHttpRequest();
        if(!method){method = 'GET';}
        if(params && typeof params === 'object'){
            const sparams = [];
            Object.entries(params).map(kv=>{
                sparams.push(kv[0] + '=' + kv[1]);
            });
            if(/\?/.test(url)){
                url += '&' + sparams.join('&');
            }else{
                url += '?' + sparams.join('&');
            }
        }
        xhr.open(method, url, true);
        if(header && typeof header === 'object'){
            Object.entries(header).map(kv=>{
                xhr.setRequestHeader(kv[0], kv[1]);
            });
        }
        xhr.addEventListener('error', (e) =>{
            onerror(e.type);
            xhr = null;
        });
        xhr.onload = () =>{
            xhr = null;
        }
        xhr.send(payload && typeof payload === 'object' ? JSON.stringify(payload) : null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200){
                    try{
                        const data = JSON.parse(xhr.responseText);
                        if(data.code !== '200'){
                            onerror(xhr.responseText);
                        }else{
                            onsuccess(data);
                        }
                    }catch(e){
                        onerror('The response text serialized error!');
                    }
                }else{
                    onerror('Request status '+xhr.status);
                }
            }
        }
    };

    initWS = () => {
        const url = this.wServer + '/api/v1/bots/' + this.botId + '/web-chats/' + this.chatId + '/connect';
        const onerror = (e) => {
            console.log('WebSocket error: ' + e);
            return e;
        };
        const onmessage = (data) => {
            this.answerTyping(JSON.parse(data));
        };

        return new Promise((resolve, reject) => {

            let socket = new WebSocket(url);

            socket.addEventListener("open", (event) => {
                this.socket = socket;
                resolve(socket);
                console.log("WebSocket 连接已建立");
            });

            // 监听消息接收事件
            socket.addEventListener("message", (event) => {
                onmessage(event.data);
            });
            
            // 监听错误事件
            socket.addEventListener("error", (event) => {
                // console.error("WebSocket 错误: ", event);
                reject(event.type);
            });

            // 监听连接关闭事件
            socket.addEventListener("close", (event) => {
                this.socket = null;
                this.setChatWaiting(false);
                const tpDom = this.chatDom.getElementsByClassName('thinking')[0];
                if(tpDom){
                    tpDom.insertAdjacentText('beforebegin', '(Stoped!)');
                    tpDom.remove();
                }
                console.log("WebSocket 连接已关闭");
            });

        }).then(
            (ws)=>ws,
            (e)=>{onerror(e);}
        );
    };

    // API
    getChatId = () => {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.endpoint + '/api/v1/bots/' + this.botId +'/web-chats',
                params: {
                    integration_id: this.integrationId,
                    session_id: this.sessionId
                },
                onsuccess: resolve,
                onerror: reject,
            });
        }).then(res=>res.data[0]?.id, (e)=>{
            this.failedMessage = `Kubechat get chat session error:\n${e}`;
            console.log(this.failedMessage);
            return 'error';
        });
    };

    getChatHistory = () => {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.endpoint + '/api/v1/bots/' + this.botId + '/web-chats/' + this.chatId,
                params: {
                    integration_id: this.integrationId,
                    session_id: this.sessionId
                },
                onsuccess: resolve,
                onerror: reject,
            });
        }).then(res=>res.data?.history, (e)=>{
            this.warningMessage = [`Kubechat get chat history error:\n${e}`, ...this.warningMessage];
            console.log(this.warningMessage[0]);
            return 'error';
        });
    };

    newChatId = () => {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.endpoint + '/api/v1/bots/' + this.botId +'/web-chats',
                method: 'POST',
                params: {
                    integration_id: this.integrationId,
                    session_id: this.sessionId
                },
                onsuccess: resolve,
                onerror: reject,
            });
        }).then(res=>res.data?.id, (e)=>{
            this.failedMessage = `Kubechat create new chat session error:\n${e}`;
            console.log(this.failedMessage);
            return 'error';
        });
    };

    newVote = (options={}) => {
        const {messageid, upvote, downvote} = options;
        if(!messageid){return;}
        return new Promise((resolve, reject) => {
            this.request({
                url: this.endpoint + '/api/v1/bots/' + this.botId + '/web-chats/' + this.chatId+ '/messages/' + messageid,
                method: 'POST',
                payload: {
                    'upvote': upvote,
                    'downvote': downvote
                },
                onsuccess: resolve,
                onerror: reject,
            });
        }).then(res=>res.data?.id, (e)=>{
            this.warningMessage = [`Kubechat vote error:\n${e}`, ...this.warningMessage];
            console.log(this.warningMessage[0]);
            return 'error';
        });
    };

    clearHistory = () => {
        return new Promise((resolve, reject) => {
            this.request({
                url: this.endpoint + '/api/v1/bots/' + this.botId + '/web-chats/' + this.chatId,
                method: 'PUT',
                onsuccess: resolve,
                onerror: reject,
            });
        }).then(res=>res, (e)=>{
            this.warningMessage = [`Kubechat clear chat history error:\n${e}`, ...this.warningMessage];
            console.log(this.warningMessage[0]);
            return 'error';
        });
    };

    // Handle click event
    handleClick = (e) => {
        const dom = e.target, tag = dom.tagName.toLowerCase(), cls = dom.classList;

        switch(tag){
            case 'span':
                if(cls.contains('close')){
                    this.setBotExpand(false);
                }else if(cls.contains('toggle')){
                    this.toggleFullScreen();
                    dom.textContent = this.isFullScreen ? '⇲' : '⇱';
                }else if(cls.contains('dismiss')){
                    this.showReference(false);
                }
                break;
            case 'i':
                if(cls.contains('faq')){
                    this.askQuestion(dom.textContent);
                }
                break;
            case 'label':
                this.askQuestion();
                break;
            case 'button':
                if(cls.contains('like')){
                    const data = { 
                        'messageid': dom.getAttribute('data-id'), 
                        'upvote': cls.contains('voted')?0:1,
                        'downvote': dom.parentNode.getElementsByClassName('dislike voted')[0]?1:0
                    }
                    this.newVote(data);
                    cls.toggle('voted');
                }else if(cls.contains('dislike')){
                    const data = { 
                        'messageid': dom.getAttribute('data-id'), 
                        'downvote': cls.contains('voted')?0:1,
                        'upvote': dom.parentNode.getElementsByClassName('like voted')[0]?1:0
                    }
                    this.newVote(data);
                    cls.toggle('voted');
                }
                break;
            case 'div':
                if(cls.contains('reference')){
                    const ref = dom.getElementsByClassName('ref-detail')[0]?.innerHTML;
                    this.showReference(ref);
                }
                break;
            case 'code':
                if(cls.contains('code')||cls.contains('note')){
                    this.copyText(dom);
                    dom.setAttribute('data-copy', '✔︎');
                    setTimeout(()=>{dom.setAttribute('data-copy', '⎘');}, 500);
                }
            default:
                break;
        }
    };

    handleKeyDown = (e) => {
        if(e.keyCode === 13 && !this.waiting){
            this.askQuestion();
        }
    };

    // Ask question
    askQuestion = async (question) => {
        const input = this.input || this.bot.getElementsByClassName('input')[0];
        if(!input){return;}
        this.input = input;
        const msg = question || input?.value;
        if(this.waiting || !msg || msg.replace(/[\s]/g,'')===''){return;}
        this.setChatWaiting(true);
        if(msg.toLowerCase()==='/clear'){
            const result = await this.clearHistory();
            if(result.code==='200'){
                this.renderChats([],true);
                input.value = '';
            }
            this.sayWelcome();
            this.setChatWaiting(false);
            return;
        }
        const timestap = new Date().getTime();
        const list = [
            {
                "type": "message",
                "role": "human",
                "data": msg,
                "timestamp": timestap
            },
            {
                "type": "thinking",
                "role": "ai",
                "data": "",
                "timestamp": ""
            }
        ];
        this.renderChats(list);
        const formatMsg = JSON.stringify(list[0]);
        if(!this.socket){
            await this.initWS();
        }
        if(this.socket){
            this.socket.send(formatMsg);
        }
    };

    // Sync context
    syncContext = (context) => {
        if(typeof context!=='string' || context.replace(/\s/g,'')===''){return;}
        const msg = JSON.stringify({
            "type": "bot_context",
            "role": "bot",
            "data": context,
            "timestamp": new Date().getTime()
        });
        if(this.socket){
            this.socket.send(msg);
        }
    }

    // Welcome
    sayWelcome = () => {
        const welcome = this.welcomeMessage;
        if(!welcome){return;}
        welcome[0].timestamp = new Date().getTime();
        this.renderChats(welcome);
    }

    // Answer typing
    answerTyping = async (options={}) => {
        const { type, id, data, timestamp } = options;
        if(!type){return;}
        const tpDom = this.chatDom.getElementsByClassName('thinking')[0];
        const wdDom = tpDom?.parentNode;
        const sTyping = tpDom?.outerHTML;
        switch(type){
            case 'welcome':
                const hello = data.hello;
                const faq = data.faq;
                if(hello==='' && faq.length<1){
                    return;
                }
                const list = [
                    {
                        "type": "welcome",
                        "role": "ai",
                        "data": this.formatMarkdown(hello) + (faq.length>0 ? `<p><i class="faq">${faq.join('</i><i class="faq">')}</i></p>` : ''),
                        "timestamp": timestamp
                    }
                ];
                this.welcomeMessage = list;
                if(this.chatDom.childElementCount===0){
                    this.renderChats(list);
                }
                break;
            case 'start':
                this.typingWords = '';
                break;
            case 'message':
                if(this.waiting){
                    this.setChatWaiting(false);
                    if(this.input){this.input.value = '';}
                }
                this.typingWords += data;
                wdDom.innerHTML = this.formatMarkdown(this.typingWords) + sTyping;
                break;
            case 'stop':
                const { related_question_prompt, related_question } = options;
                let rq = '';
                let tips = related_question_prompt || 'You can continue to ask me';
                if(related_question && related_question.length){
                    rq = `<div class="related"><p class="tips">${tips}</p><p><i class="faq">${related_question.join('</i><i class="faq">')}</i></p></div>`
                }
                wdDom.innerHTML = this.formatMarkdown(this.typingWords) + rq;
                this.typingWords = '';
                const infoDom = wdDom.parentNode.getElementsByClassName('info')[0];
                if(infoDom){
                    const respTime = infoDom.getElementsByClassName('time')[0];
                    if(respTime){
                        respTime.textContent = this.timestampToTime(timestamp);
                    }
                    if(data && data.length>0){
                        infoDom.insertAdjacentHTML('beforeend', this.stringifyRef(data));
                    }
                }
                const actionDom = infoDom.parentNode.parentNode.getElementsByClassName('action')[0];
                if(actionDom){
                    actionDom.innerHTML = this.stringifyVote(id);
                }
                break;
            default:
                break;
        }
        this.chatDom?.scrollIntoView({behavior:'smooth', block:'end'});
    };

    // Render chats
    renderChats = (chats, clear) => {
        if(!chats || !chats.map){return;}
        const chatDom = this.chatDom;
        if(!chatDom){return;}
        if(clear){
            chatDom.innerHTML = '';
            return;
        }
        let list = [];
        chats.map((item)=>{
            list.push(item.role==='human' ? this.getTemplateQ(item.data) : this.getTemplateA(item));
        });
        chatDom.insertAdjacentHTML("beforeend", list.join(''));
        this.chatDom?.scrollIntoView({ behavior: 'instant', block: 'end' });
    };

    // Reference template
    getTemplateRef = (options={}) => {
        let {index, source, score, text} = options;
        return `
        <div class="bd-wrap">
            <div class="title-wrap">
                <div class="index">${index}.</div>
                <div class="title">${source}</div>
                <div class="score">Score: ${score}</div>
            </div>
            <div class="text">${this.formatMarkdown(text)}</div>
        </div>
    `};

    // Chat container template
    getTemplateQ = (question) => {
        return `
        <div class="topic question">
            <div class="avatar"><div>😄</div></div>
            <div class="content">
                <div class="word">
                    ${question}
                </div>
                <div class="info">
                </div>
            </div>
            <div class="action">
            </div>
        </div>
    `};

    stringifyRef = (refs) => {
        let ref = '';
        if(refs && refs.length>0){
            let refDetail = [];
            refs.map((item, index)=>{
                let data = { 
                    'index': index+1,
                    'score': item.score, 
                    'text': item.text,
                    'source': item.metadata?.source,
                }
                refDetail.push(this.getTemplateRef(data));
            });
            ref = `<div class="reference" title="Read ${refs.length} references">${refs.length}<div class="ref-detail">${refDetail.join('')}</div></div>`;
        }
        return ref;
    };

    stringifyVote = (id, upvote, downvote) => {
        return `
            <button class="${upvote?'like voted':'like'}" data-id="${id}"></button>
            <button class="${downvote?'dislike voted':'dislike'}" data-id="${id}"></button>
        `;
    };

    getTemplateA = (options={}) => {
        let { type, id, data, timestamp, references, ref='', upvote, downvote } = options;
        if(type === 'thinking'){
            data = '<div class="thinking"><i></i><i></i><i></i><i></i><i></i></div>';
        }
        if(references && references.length>0){
            ref = this.stringifyRef(references);
        }
        return `
            <div class="topic answer">
                <div class="avatar"><div></div></div>
                <div class="content">
                    <div class="word">
                        ${['thinking','welcome'].includes(type) ? data : this.formatMarkdown(data)}
                    </div>
                    <div class="info">
                        <div class="time">${this.timestampToTime(timestamp)}</div>
                        ${ref}
                    </div>
                </div>
                <div class="action">
                    ${type!=='welcome'?this.stringifyVote(id, upvote, downvote):''}
                </div>
            </div>
        `;
    };

    getTemplate = () => `
    <div class="workspace">
        <div class="hd">
            <h1 class="title">${this.caption}</h1>
            <div class="action">
                <span class="toggle" title="Toggle fullscreen">⇱</span>
                <span class="close" title="Close chat">&times;</span>
            </div>
        </div>
        <div class="bd chat">
        </div>
        <div class="ft">
            <label class="ask">
                <input type="text" class="input" required="required" title="" />
            </label>
        </div>
        <div class="ext">
            <div class="hd">
                <h2 class="title">Reference</h2>
                <div class="action">
                    <span class="dismiss" title="Close chat">&times;</span>
                </div>
            </div>
            <div class="bd ext-bd">
            </div>
        </div>
    </div>
    `;

    // Init env
    initEnv = async() => {
        let chatId = await this.getChatId();
        const SpinCls = this.spin.classList;
        if(chatId==='error'){
            this.readyToGo = false;
            SpinCls.add('warning');
            this.spin.title = this.failedMessage;
            this.dispatchEvent(this.failedEvent);
            return;
        }

        if(!chatId){
            chatId = await this.newChatId();
        }
        
        if(!chatId || chatId==='error'){
            this.readyToGo = false;
            SpinCls.add('warning');
            this.spin.title = this.failedMessage;
            this.dispatchEvent(this.failedEvent);
            return;
        }

        this.chatId = chatId;

        let chatHistory = await this.getChatHistory();

        if(typeof chatHistory === 'object'){
            this.renderChats(chatHistory);
        }

        await this.initWS();
        this.readyToGo = true;
        SpinCls.remove('waiting');
        this.dispatchEvent(this.readyEvent);
    };

    showTips = () => {
        const askDom = this.bot.getElementsByClassName('ask')[0];
        if(!askDom){return;}
        let idx = 0, len = 2, tips = ['tips1', 'tips2'];
        setInterval(()=>{
            askDom.classList.remove(tips[idx]);
            if(idx+1>=len){idx=0;}else{idx += 1;}
            askDom.classList.add(tips[idx]);
        },5000);
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Check API endpoint and websocket server
        this.endpoint = this.getAttribute("endpoint") || 'https://chat.kubeblocks.io';
        this.wServer = this.getAttribute("wserver") || 'wss://chat.kubeblocks.io';
        // Check bot mode
        this.mode = this.getAttribute("mode")||'icon';
        // Check customized style
        this.customStyle = this.getAttribute("customstyle")||'';

        // Check bot id and integration id
        const botid = this.getAttribute("botid");
        const integrationid = this.getAttribute("integrationid");
        if(!botid){
            const tips = document.createElement('p');
            tips.innerText = '🛠';
            tips.title = 'Need botId';
            shadow.appendChild(tips);
            return;
        }
        this.botId = botid;
        this.integrationId = integrationid;

        // Check title
        let title = this.getAttribute('title');
        if(title && title.replace(/\s/g,'')!==''){
            this.caption = title;            
        }

        // Check sessionid
        let session = this.getAttribute("sessionid");
        if(!session){
            session = this.getCookie('kubechat-session') || Math.random().toString(16).substr(2);
        }
        this.setCookie('kubechat-session', session);
        this.sessionId = session;
    
        // Create elements
        const wrapper = document.createElement("div");
        const wrappercls = this.mode==='fit' ? 'wrapper fit' : 'wrapper';
        wrapper.setAttribute("class", wrappercls);
    
        const icon = document.createElement("div");
        icon.setAttribute("class", "icon");
    
        // bot
        const bot = document.createElement("div");
        this.bot = bot;
        bot.setAttribute("class", "bot");
        
        bot.innerHTML = this.getTemplate();
        bot.addEventListener('click', this.handleClick);
        bot.addEventListener('keydown', this.handleKeyDown);

        this.chatDom = bot.getElementsByClassName('chat')[0];
        this.refDom = bot.getElementsByClassName('ext')[0];
    
        // Insert icon
        const imgUrl = this.getAttribute("logo");
        const logoCls = imgUrl?"logo customized visible":"logo visible";
        const logo = document.createElement("img");
        this.logo = logo;
        if(imgUrl){
            this.logoIcon = imgUrl;
        }
        logo.src = this.logoIcon;
        logo.setAttribute("class", logoCls);
        logo.setAttribute("tabindex", 0);
        logo.addEventListener('error',()=>{
            logo.src = this.defaultLogo;
            logo.className = 'logo visible';
        })
        logo.addEventListener('click', ()=>{
            this.setBotExpand(!this.botExpand);
        });
        icon.appendChild(logo);
    
        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        style.textContent = this.getDefaultStyle();

        // Set loading spin
        if(this.mode === 'fit'){
            this.spin = bot;
        }else{
            this.spin = icon;
        }
        this.spin.classList.add('waiting');
    
        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(bot);

        // init position
        this.updateBotPosition();

        // Show tips
        this.showTips();

        // Init env
        this.initEnv();
    };
    static mount = (options={}) => {
        const { Element='kube-chat' } = options;
        if (!window.customElements.get(Element)){
            window.customElements.define(Element, kubechatComponent);
        }
    };
};

export default kubechatComponent;