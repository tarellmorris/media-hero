/* eslint-disable jsx-a11y/media-has-caption */
// @flow

import React, { useRef } from 'react';
import { parseUrl } from '../utils';

export type VideoT = {
  isSmall?: boolean,
  isMedium?: boolean,
  isLarge?: boolean,
  small?: string,
  medium?: string,
  large?: string,
  fallback?: string,
  hasControls?: boolean,
  isPlaying?: boolean,
  isPlaysInline?: boolean,
  isAutoPlay?: boolean,
  isMuted?: boolean,
  isPlaying?: boolean,
  isLooping?: boolean,
};

export const Video = (props: VideoT) => {
  const {
    isSmall,
    isMedium,
    isLarge,
    small,
    medium,
    large,
    fallback,
    hasControls,
    isPlaysInline,
    isAutoPlay,
    isMuted,
    isPlaying,
    isLooping,
  } = props;

  const videoRef = useRef();

  React.useEffect(() => {
    const currentVideo = videoRef.current;

    const playCurrentVideo = () => {
      currentVideo?.play();
    };

    currentVideo?.load();

    if (currentVideo) {
      currentVideo.defaultMuted = !!isMuted;
      currentVideo.muted = !!isMuted;

      // $FlowIssue[prop-missing] playsInline missing in HTMLVideoElement
      currentVideo.playsInline = isPlaysInline;
      currentVideo.loop = !!isLooping;
      currentVideo.autoplay = !!isAutoPlay;

      if (isPlaying) {
        currentVideo.addEventListener('canplay', playCurrentVideo);
      }
    }

    return () => {
      if (isPlaying) {
        currentVideo?.removeEventListener('canplay', playCurrentVideo);
      }
      currentVideo?.pause();
    };
  }, [
    isSmall,
    isMedium,
    isLarge,
    hasControls,
    isAutoPlay,
    isLooping,
    isMuted,
    isPlaying,
    isPlaysInline,
  ]);

  return (
    // $FlowFixMe suppressed for compatibility with web-code migration
    <video height="100%" width="100%" style={{ objectFit: 'cover' }} ref={videoRef}>
      {!isSmall && !isMedium && !isLarge && (
        <>{fallback && <source src={fallback} type={`video/${parseUrl(fallback)}`} />}</>
      )}
      {isSmall && !isMedium && !isLarge && (
        <>{small && <source src={small} type={`video/${parseUrl(small)}`} />}</>
      )}
      {isMedium && !isLarge && (
        <>{medium && <source src={medium} type={`video/${parseUrl(medium)}`} />}</>
      )}
      {isLarge && <>{large && <source src={large} type={`video/${parseUrl(large)}`} />}</>}
    </video>
  );
};
