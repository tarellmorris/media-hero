// @flow

export const parseUrl = (url: string) => {
  const regexp = /(\.webm|\.mp4)/g;
  const found = url.match(regexp);
  if (found) {
    return found[0].replace('.', '');
  }
  return '';
};
