import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const GenderText = ({ gender, children }) => {
  const { colorMode } = useColorMode();
  const colorVariable = `--color-${gender}-${
    colorMode === 'dark' ? 'dark' : 'light'
  }`;

  return <span style={{ color: `var(${colorVariable})` }}>{children}</span>;
};

export default GenderText;
