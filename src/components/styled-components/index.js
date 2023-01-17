// @flow
import { styled } from 'baseui';

// $FlowFixMe suppressed for compatibility with web-code migration
export const Spacer = styled('div', ({ $theme, $spacing }) => {
  const spacingMap = {
    [0]: 'none',
    [1]: $theme.sizing.scale800,
    [2]: $theme.sizing.scale1600,
    [3]: $theme.sizing.scale2400,
    [4]: '50vh',
  };
  return {
    height: spacingMap[$spacing],
  };
});
// $FlowFixMe suppressed for compatibility with web-code migration
export const RelativeContainer = styled('div', () => ({
  zIndex: 0,
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
}));
// $FlowFixMe suppressed for compatibility with web-code migration
export const FixedPosterImageWindow = styled(
  'div',
  ({ $getPosterImage, $posterImages, $enableAuthorView }) => ({
    zIndex: 1,
    minHeight: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: !$enableAuthorView ? 'fixed' : 'absolute',
    backgroundImage: `url(${$getPosterImage($posterImages)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })
);
// $FlowFixMe suppressed for compatibility with web-code migration
export const FixedVideoWindow = styled('div', ({ $enableAuthorView }) => ({
  zIndex: 2,
  minHeight: '100vh',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: !$enableAuthorView ? 'fixed' : 'absolute',
}));
// $FlowFixMe suppressed for compatibility with web-code migration
export const ScrollableContentContainer = styled('div', ({ $contentMaxWidth }) => ({
  zIndex: 3,
  paddingTop: '35vh',
  width: '100%',
  maxWidth: $contentMaxWidth,
}));
