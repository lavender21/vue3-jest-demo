import { getLink, getLinkByDevice } from "@/utils/link-demo";
import * as device from "@/utils/device";

describe("link demo", function () {
  describe("getLinkByDevice", function () {
    it("should return pc link when device is pc", function () {
      expect(getLinkByDevice(false)).toEqual("https://pc.address");
    });
    it("should return mobile link when device is mobile", function () {
      expect(getLinkByDevice(true)).toEqual("https://mobile.address");
    });
  });
  describe("getLink", function () {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return pc link when device is pc", function () {
      jest.spyOn(device, "isMobileDevice").mockReturnValue(false);
      expect(getLink()).toEqual("https://pc.address");
    });
    it("should return mobile link when device is mobile", function () {
      jest.spyOn(device, "isMobileDevice").mockReturnValue(true);
      expect(getLink()).toEqual("https://mobile.address");
    });
  });
  // try to comment jest.restoreAllMocks() and rerun these tests
  it("should clear mocks after test finish", function () {
    expect(getLink()).toEqual("https://pc.address");
  });
});
