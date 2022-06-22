import { flushPromises, shallowMount } from "@vue/test-utils";
import PersonCenter from "@/components/PersonCenter.vue";
import * as api from "@/api/api";

describe("test async request in component", function () {
  it("fetches async when a button is clicked", async () => {
    const spy = jest.spyOn(api, "getUserInfoApi");
    spy.mockResolvedValue({ id: "007", name: "凌凌漆", level: 3 });

    const wrapper = shallowMount(PersonCenter, {
      props: {
        userId: "007",
      },
    });
    await flushPromises();

    expect(spy).toHaveBeenCalledWith("007");
    expect(wrapper.text()).toContain("凌凌漆");
    expect(wrapper.text()).toContain("3");
  });
});
