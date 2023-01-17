// @flow
import React from 'react';

import { MediaHero } from './';
import type { BlockProps } from '../types';

export const MediaHeroAuthorView = (props: BlockProps) => {
  return <MediaHero {...props} enableAuthorView />;
};
