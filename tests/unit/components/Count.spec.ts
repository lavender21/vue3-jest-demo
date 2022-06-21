import { shallowMount } from "@vue/test-utils";
import Count from "@/components/Count.vue";
describe("Count component event test demo", function () {
  it("should auto increment when click add button", async function () {
    const wrapper = shallowMount(Count);

    await wrapper.find("button").trigger("click");
    expect(wrapper.find("span").text()).toEqual("1");
  });
});
