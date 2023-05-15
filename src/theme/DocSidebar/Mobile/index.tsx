/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Dropdown from 'react-dropdown';
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import DocSidebarItems from '@theme/DocSidebarItems';
import type {Props} from '@theme/DocSidebar/Mobile';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useLocation, useHistory } from '@docusaurus/router';

// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const { preferredVersion } = useDocsPreferredVersion();
  const history = useHistory();
  const location = useLocation();
  const { globalData } = useDocusaurusContext();
  const docPluginConfig = globalData["docusaurus-plugin-content-docs"]
  const docVersions = docPluginConfig?.default?.versions  || []
  const mobileSidebar = useNavbarMobileSidebar();
  const options = docVersions.map(v => ({ label: <span className="Dropdown-control-label">Version: {v.label}</span>, value: v.name }))
  const defaultPreferredVersion = docVersions.find(v => v.isLast)

  const onChange = (item) => {
    const version = docVersions.find(v => v.name === item.value);
    const pathMatch = location.pathname.match(/^\/[^\/]+\/[^\/]+/);
    if(pathMatch) {
      const p = location.pathname.replace(pathMatch[0], version.path);
      localStorage.setItem("docs-preferred-version-default", version.name)
      history.push(p)
    } else {
      history.push(version.path)
    }
  }

  return (
    <>
    <Dropdown placeholder="Select version..." options={options} value={preferredVersion?.name || defaultPreferredVersion.name} onChange={onChange} />
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === 'category' && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === 'link') {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
    </>
  );
};

function DocSidebarMobile(props: Props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
