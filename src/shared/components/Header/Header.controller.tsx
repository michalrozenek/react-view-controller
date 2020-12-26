import React from 'react';

import { HeaderView } from './Header.view';
import { HeaderControllerProps } from './Header.types';

const HeaderController: React.FC<HeaderControllerProps> = ({ title }) => (
  <HeaderView
    title={title}
  />
);

export const Header = HeaderController;