import { getTemplateByUser } from "@/utils/api-request-demo";
import * as api from "@/api/api";

describe("api request demo, test function with api request", function () {
  describe("getTemplateByUser", function () {
    it("should return templateLow when user level < 3", async function () {
      jest
        .spyOn(api, "getUserInfoApi")
        .mockResolvedValue({ id: "007", name: "凌凌漆", level: 2 });

      const result = await getTemplateByUser("007");

      expect(result).toEqual("templateLow");
    });
    it("should return templateHigh when user level >= 3", async function () {
      jest
        .spyOn(api, "getUserInfoApi")
        .mockResolvedValue({ id: "007", name: "凌凌漆", level: 6 });

      const result = await getTemplateByUser("007");

      expect(result).toEqual("templateHigh");
    });
  });
});
