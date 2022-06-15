const { userAgent } = window.navigator;

export const isMobileDevice = () => !!userAgent.match(/mobile|iphone/i);
