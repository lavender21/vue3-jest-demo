import { shallowMount } from "@vue/test-utils";
import Item from "@/components/TodoList/Item.vue";

describe("Item component, component UI test demo", function () {
  // item  输入：title,completed,
  it("should render incomplete item", function () {
    const wrapper = shallowMount(Item, {
      props: {
        title: "准备前端单元测试session ppt",
        completed: false,
      },
    });

    expect(wrapper.text()).toEqual("准备前端单元测试session ppt");
    expect(wrapper.find("span").classes()).toEqual(["todo-item"]);
  });
});
