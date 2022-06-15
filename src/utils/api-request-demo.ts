import { getUserInfoApi } from "@/utils/api";

export const getTemplateByUser = async (userId: string) => {
  const userInfo = await getUserInfoApi(userId);
  if (userInfo.level < 3) {
    return "templateLow";
  }
  if (userInfo.level >= 3) {
    return "templateHigh";
  }
};
