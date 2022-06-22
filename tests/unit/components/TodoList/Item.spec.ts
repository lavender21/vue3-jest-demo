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

    expect(wrapper.text()).toContain("准备前端单元测试session ppt");
    expect(wrapper.find("span").classes()).toEqual(["todo-item"]);
  });
  it("should render completed item", function () {
    const wrapper = shallowMount(Item, {
      props: {
        title: "准备前端单元测试session ppt",
        completed: true,
      },
    });
    expect(wrapper.text()).toContain("准备前端单元测试session ppt");
    expect(wrapper.find("span").classes()).toEqual(["todo-item", "completed"]);
  });

  // 测试自定义事件
  it("should emit remove event when click remove button", function () {
    const wrapper = shallowMount(Item, {
      props: {
        title: "准备前端单元测试session ppt",
        completed: false,
      },
    });
    wrapper.find("span.remove-btn").trigger("click");
    expect(wrapper.emitted().remove).toBeTruthy();
  });

  it("should emit completed event when click title", function () {
    const wrapper = shallowMount(Item, {
      title: "准备前端单元测试session ppt",
      completed: false,
    });

    wrapper.find("span.todo-item").trigger("click");
    expect(wrapper.emitted().toggle).toBeTruthy();
  });
});
