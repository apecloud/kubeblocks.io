"use strict";(self.webpackChunkconsole_docs=self.webpackChunkconsole_docs||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"second-blog-post","metadata":{"permalink":"/blog/second-blog-post","editUrl":"https://github.com/apecloud/website/tree/developer/blog/2023-02-15-discuss-on-open-source-operator.md","source":"@site/blog/2023-02-15-discuss-on-open-source-operator.md","title":"Why isn\'t the open-source database Operator popular?","description":"Kubernetes and open-source Operators are becoming increasingly prevalent but why isn\'t the open-source database Operator popular?","date":"2023-02-15T00:00:00.000Z","formattedDate":"February 15, 2023","tags":[{"label":"database operator","permalink":"/blog/tags/database-operator"},{"label":"open source","permalink":"/blog/tags/open-source"}],"readingTime":4.845,"hasTruncateMarker":false,"authors":[{"name":"Thomas","url":"https://github.com/realzyy","image_url":"https://avatars.githubusercontent.com/u/1814084?v=4","imageURL":"https://avatars.githubusercontent.com/u/1814084?v=4"}],"frontMatter":{"slug":"second-blog-post","title":"Why isn\'t the open-source database Operator popular?","description":"Kubernetes and open-source Operators are becoming increasingly prevalent but why isn\'t the open-source database Operator popular?","authors":{"name":"Thomas","url":"https://github.com/realzyy","image_url":"https://avatars.githubusercontent.com/u/1814084?v=4","imageURL":"https://avatars.githubusercontent.com/u/1814084?v=4"},"tags":["database operator","open source"],"image":"https://github.com/apecloud/kubeblocks.io/blob/master/blog/assets/test.png"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"It\'s unusual that even though Kubernetes and open-source Operators are becoming increasingly prevalent, many Kubernetes developers still opt to use fully managed database services provided by cloud vendors to construct their applications. The database engines of AWS Aurora or Snowflake are robust, although they are not open source, so there\'s nothing inherently wrong with utilizing them in Kubernetes. However, what\'s most perplexing is the use of RDS (such as RDS for MySQL or RDS for PostgreSQL), whose database engine is essentially the same as the open-source community version; what is hindering developers from utilizing various open-source database Operators to create a completely Kubernetes-native application architecture?\\n\\n## A comparison of fully managed databases and open-source database operator\\n\\nSurprisingly developers have not yet realized the cost discrepancy between fully-managed database services and equivalent computing resources, given that the cost of the former is 150% to 400% higher.\\nComparison of fully managed database cost and computing resource cost:\\n\\n| Public Cloud Provider | Deployment | Fully Managed Database Cost ($/hour) | Computing Resource Cost ($/hour) | Fully Managed Database Cost/Computing Resource Cost | Remarks | \\n| :--   | :--           | :--    | :--    | :--  | :--                                | \\n| AWS   | stand-alone   | 0.258  | 0.1344 | 192% | Oregon 4C/16GB <br />t4g.xlarge    |\\n| AWS   | one standby   | 0.517  | 0.2688 | 192% | Oregon 4C/16GB <br />t4g.xlarge    |\\n| AWS   | two standbys  | 1.044  | 0.5424 | 192% | Oregon 4C/16GB <br />m6gd.xlarge   |\\n| GCP   | stand-alone   | 0.2772 | 0.134  | 206% | Oregon 4C/16GB <br />e2-standard-4 |\\n| GCP   | HA            | 0.5544 | 0.268  | 206% | Oregon 4C/16GB <br />e2-standard-4 |\\n| Azure | stand-alone   | 0.39   | 0.198  | 197% | West US 4C/16GB <br />B4ms / D4as  |\\n| Azure | HA            | 1.47   | 0.396  | 371% | West US 4C/16GB <br />B4ms / D4as  |\\n\\nIn terms of capabilities, the open-source database Operator offers a comprehensive deployment configuration. Although its functionality may not be completely covered by fully-managed database services, it cannot be argued that there is a significant difference. Let\'s take MySQL as an example.\\n\\n  * Both AWS RDS and the open-source database Operator support stand-alone and multiple standby/read replica configurations, with the latter utilizing Group Replication and Proxy to achieve the same functionality.\\n  * AWS RDS has the ability to perform data backups through physical or logical methods, while the open-source database Operator can achieve similar results using CSI or backup software.\\n  * In terms of monitoring, AWS RDS has a robust Performance Insight, but the open-source database Operator usually relies on a more common combination of Prometheus and Grafana. This difference may not be noticeable to developers.\\n  * There is a significant difference in terms of compliance and user experience. AWS RDS has passed SOC, PCI, and other compliance projects, but running the open-source database Operator on AWS EKS with caution can provide a similar level of data protection.\\n\\n## How far is the open-source operator from becoming popular?\\n\\nWhile the open-source database Operator offers a significantly lower cost and appears to provide essential features, it is not as widely adopted as the fully managed database service from cloud vendors. Our discussions with many users revealed an intriguing phenomenon: among offline users who have limited access to cloud vendors, the open-source database Operator is more popular and comparable in popularity to Kubernetes itself.\\nMany users noted that even though fully managed database services encounter various issues, they are typically resolved through the cloud provider\'s automation program or the operations team. On the other hand, while the open-source database Operator is rapidly improving, it still lacks the capability to self-repair and there is no support from operations personnel. This partially explains why the open-source database Operator is favored among offline users as having a dedicated operations team handling problems can be more comforting from an operational efficiency standpoint.\\n\\nThe Kubernetes community primarily categorizes user roles into two types: developers who deploy applications and operations staff who manage the cluster. Developers can independently expand the database by utilizing the open-source database operator. However, if there is a lack of resources, operations staff need to quickly add resources to the Kubernetes cluster. While they usually understand the resource needs of the application, they may not have a good understanding of the resources required by the database, which can lead to occasional problems like abnormal database synchronization that are hard to handle and cause stress. If developers also handle operations tasks (known as DevOps), the added workload and cognitive burden may discourage them from handling database operators and adopting fully managing the database service instead.\\n\\nAside from the reasons mentioned earlier, the inadequate integration of open-source database operators may also contribute to a less smooth user experience compared to fully managed database services. For instance, when creating a backup for MySQL, an open-source database operator may require additional steps such as allocating resources and configuring accounts for an object storage service in the Kubernetes cluster to store the backup file, whereas fully managed database services do not need these steps. Additionally, complex applications often involve multiple types of databases, such as MySQL and Redis. This may result in inconsistent user experiences with open-source database operators, whereas fully managed database services offer a unified design across the console, command line, and API, although the experience is often criticized.\\n\\nEven though there are challenges such as cognitive burden and limited integration, Kubernetes will continue to improve developer productivity and resource utilization, leading to a lasting influence on the world.\\nThese difficulties will eventually be overcome. If you face any issues with Kubernetes that cannot be resolved by open-source database operators or have any valuable experiences to share, please respond to [KubeBlocks](https://join.slack.com/t/kubeblocks/shared_invite/zt-1oz1hjyfk-UZwOJt8fge2TtWkTnuVfJg) or [DoK](https://dokcommunity.slack.com/join/shared_invite/zt-10v7uncvp-jNFwulsVWvUO0SKMDTjwAw#/shared-invite/email) to assist the Kubernetes community in advancing more rapidly."},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/apecloud/website/tree/developer/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem itest psum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.145,"hasTruncateMarker":false,"authors":[{"name":"\u7533\u680b\u680b","title":"Docusaurus Core Team","url":"https://github.com/sailwebs","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"\u7533\u680b\u680b","title":"Docusaurus Core Team","url":"https://github.com/sailwebs","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Why isn\'t the open-source database Operator popular?","permalink":"/blog/second-blog-post"}},"content":"Lorem itest psum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\nthis is a test"}]}')}}]);