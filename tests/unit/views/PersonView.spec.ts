import { shallowMount } from "@vue/test-utils";
import PersonCenter from "@/components/PersonCenter.vue";
import PersonView from "@/views/PersonView.vue";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(() => ({ query: { userId: "007" } })),
}));
describe("router test demo", function () {
  it("should render PersonCenter with userId from route", function () {
    const wrapper = shallowMount(PersonView);

    expect(wrapper.findComponent(PersonCenter).props()).toEqual({
      userId: "007",
    });
  });
});
