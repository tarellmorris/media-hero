// @flow
import type { ComponentType } from 'react';
import type { MarkdownBodyType } from '@uber/dotcom-ui';

type DynamicPhotoT = ComponentType<{
  path: string,
  label: string,
  dynamicPhotoType: string,
  photoType?: string,
}>;

type CtaProps = {
  ctaType?: 'link' | 'button' | 'inverted',
  ctaDetails?: {
    ariaLabel?: string,
    href?: string,
    openInNewTab?: boolean,
    text?: string,
  },
};
export type ContentBlock = {
  heading?: string,
  headingSize?: number | string,
  headingSpacerSize?: number,
  body?: MarkdownBodyType,
  bodySize?: 'legal' | 'small' | 'medium' | 'large' | 'xlarge',
  ctaSpacerSize?: number,
  ctaPrimary?: CtaProps,
  ctaSecondary?: CtaProps,
  blockEndSpacerSize?: number,
};

export type LoopingVideo = {
  desktopVideo?: string,
  tabletVideo?: string,
  mobileVideo?: string,
  fallbackVideo?: string,
};

export type PosterImages = {
  desktopImage?: DynamicPhotoT,
  tabletImage?: DynamicPhotoT,
  mobileImage?: DynamicPhotoT,
};

export type BlockProps = {
  animations?: ?{
    desktop: [],
    tablet: [],
    mobile: [],
  },
  rtl?: boolean,
  textColor?: string,
  contentMaxWidth?: string,
  contentBlocks?: Array<ContentBlock>,
  textAlign?: string,
  posterImages?: PosterImages,
  loopingVideo?: LoopingVideo,
  enableAuthorView?: boolean,
};
