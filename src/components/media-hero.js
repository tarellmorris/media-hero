// @flow
import React from 'react';

import type { BlockProps } from '../types';

import { useStyletron } from 'baseui';
import { useIntersectionObserver, useMediaQuery } from '@uber/dotcom-utils';
import { AnimationWrapper, OBSERVER_THRESHOLD, ContentGroupDynamic } from '@uber/dotcom-ui';

import {
  Spacer,
  RelativeContainer,
  FixedVideoWindow,
  FixedPosterImageWindow,
  ScrollableContentContainer,
} from './styled-components';

import { Video } from './';

export const MediaHero = (props: BlockProps) => {
  const {
    animations,
    rtl,
    textColor = 'black',
    contentMaxWidth = 'tight',
    contentBlocks,
    textAlign = 'center',
    posterImages,
    loopingVideo,
    enableAuthorView,
  } = props;

  const [, theme] = useStyletron();
  const { mediaQuery } = theme;

  const [ref, intersectionObserverEntry] = useIntersectionObserver({
    threshold: OBSERVER_THRESHOLD,
  });

  const isDesktop = useMediaQuery(mediaQuery.large);
  const isTablet = useMediaQuery(mediaQuery.medium);
  const isMobile = useMediaQuery(mediaQuery.small);

  const getPosterImage = (posterImages) => {
    if (posterImages) {
      const { desktopImage, tabletImage, mobileImage } = posterImages;
      if (isDesktop) {
        return desktopImage?.src;
      }
      if (isTablet) {
        return tabletImage?.src || desktopImage?.src;
      }
      if (isMobile) {
        return mobileImage?.src || tabletImage?.src || desktopImage?.src;
      }
    }
    return null;
  };

  return (
    <AnimationWrapper
      ref={ref}
      animations={animations}
      target="fullBlock"
      observer={intersectionObserverEntry}
    >
      <RelativeContainer>
        <FixedPosterImageWindow
          $getPosterImage={getPosterImage}
          $posterImages={posterImages}
          $enableAuthorView={enableAuthorView}
        />
        <FixedVideoWindow $enableAuthorView={enableAuthorView}>
          <Video
            isPlaysInline
            isAutoPlay
            isMuted
            isLooping
            isPlaying
            isSmall={isMobile}
            isMedium={isTablet}
            isLarge={isDesktop}
            small={loopingVideo?.mobileVideo}
            medium={loopingVideo?.tabletVideo}
            large={loopingVideo?.desktopVideo}
            fallback={loopingVideo?.fallbackVideo}
          />
        </FixedVideoWindow>
        <ScrollableContentContainer $contentMaxWidth={contentMaxWidth}>
          {contentBlocks &&
            contentBlocks.map((block, i) => {
              const {
                heading,
                headingSize = 'display',
                headingSpacerSize = 1,
                body,
                bodySize = 'medium',
                ctaSpacerSize = 1,
                ctaPrimary,
                ctaSecondary,
                blockEndSpacerSize = 3,
              } = block;
              return (
                <div key={i}>
                  <ContentGroupDynamic
                    animations={animations}
                    observer={intersectionObserverEntry}
                    heading={heading}
                    headingSize={headingSize}
                    color={textColor}
                    rtl={rtl}
                    textAlign={textAlign}
                  />
                  <Spacer $spacing={headingSpacerSize} />
                  <ContentGroupDynamic
                    animations={animations}
                    observer={intersectionObserverEntry}
                    body={body}
                    bodySize={bodySize}
                    color={textColor}
                    rtl={rtl}
                    textAlign={textAlign}
                  />
                  <Spacer $spacing={ctaSpacerSize} />
                  <ContentGroupDynamic
                    animations={animations}
                    observer={intersectionObserverEntry}
                    cta={{
                      ctaPrimary: { ...ctaPrimary?.ctaDetails, ctaType: ctaPrimary?.ctaType },
                      ctaSecondary: {
                        ...ctaSecondary?.ctaDetails,
                        ctaType: ctaSecondary?.ctaType,
                      },
                    }}
                    color={textColor}
                    rtl={rtl}
                    justifyContent={textAlign}
                  />
                  <Spacer $spacing={blockEndSpacerSize} />
                </div>
              );
            })}
        </ScrollableContentContainer>
      </RelativeContainer>
    </AnimationWrapper>
  );
};
