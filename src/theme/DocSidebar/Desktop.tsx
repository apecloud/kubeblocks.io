/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Dropdown from 'react-dropdown';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import {useThemeConfig} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation, useHistory } from '@docusaurus/router';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import type {Props} from '@theme/DocSidebar/Desktop';

import styles from './styles.module.css';
import  './dropdown.less';

function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}: Props) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();
  const { preferredVersion } = useDocsPreferredVersion()
  const history = useHistory();
  const location = useLocation();
  const { globalData } = useDocusaurusContext();
  const docPluginConfig = globalData["docusaurus-plugin-content-docs"]
  const docVersions = docPluginConfig?.default?.versions  || []
  const options = docVersions.map(v => ({ label: <span className="Dropdown-control-label">Version: {v.label}</span>, value: v.name }))
  const defaultPreferredVersion = docVersions.find(v => v.isLast)

  const onChange = (item) => {
    const version = docVersions.find(v => v.name === item.value);
    const pathMatch = location.pathname.match(/^\/[^\/]+\/[^\/]+/);
    if(pathMatch) {
      const p = location.pathname.replace(pathMatch[0], version.path);
      localStorage.setItem("docs-preferred-version-default", version.name)
      if(version.name=='release-0.5'&&(p.indexOf('integration')!=-1||p.indexOf('fault_injection')!=-1)){
        history.push(version.sidebars.developer_docs.link.path)
      }else{
        history.push(p)
      }
    } else {
      history.push(version.path)
    }
  }

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      <Dropdown placeholder="Select version..." options={options} value={preferredVersion?.name || defaultPreferredVersion.name} onChange={onChange} />

      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}

export default React.memo(DocSidebarDesktop);