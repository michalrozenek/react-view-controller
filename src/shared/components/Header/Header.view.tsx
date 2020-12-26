import React from 'react';
import { HeaderViewProps } from './Header.types';

export const HeaderView: React.FC<HeaderViewProps> = ({ title }) => (
  <div className={'header'}>
    <div className={'header__title'}>
      {title}
    </div>
  </div>
);