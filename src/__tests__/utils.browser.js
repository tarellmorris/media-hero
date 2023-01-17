import { parseUrl } from '../utils';

describe('parseUrl function', () => {
  test('function parses URL and returns file extension if mp4 or webm', () => {
    const testUrl1 = parseUrl(
      'https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/NY842+-+Uber+-+Community+Guidelines+-+LatAm+-+Loop+-+1080p+Web+Streaming.webm'
    );
    const testUrl2 = parseUrl(
      'https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/NY842+-+Uber+-+Community+Guidelines+-+LatAm+-+Loop+-+480p+Web+Streaming.mp4'
    );

    expect(testUrl1).toBe('webm');
    expect(testUrl2).toBe('mp4');
  });
  test('function returns empty string if .mp4 or .webm is not found', () => {
    const testUrl3 = parseUrl(
      'https://d1nyezh1ys8wfo.cloudfront.net/static/Looping_Videos/NY842+-+Uber+-+Community+Guidelines+-+LatAm+-+Loop+-+480p+Web+Streaming.jpeg'
    );

    expect(testUrl3).toBe('');
  });
});
