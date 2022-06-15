import { isMobileDevice } from "@/utils/device";

export const getLinkByDevice = (isMobile: boolean) => {
  if (isMobile) {
    return "https://mobile.address";
  } else {
    return "https://pc.address";
  }
};

export const getLink = () => {
  if (isMobileDevice()) {
    return "https://mobile.address";
  } else {
    return "https://pc.address";
  }
};
