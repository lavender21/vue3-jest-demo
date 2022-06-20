import { mount, shallowMount } from "@vue/test-utils";
import List from "@/components/TodoList/List.vue";
import Item from "@/components/TodoList/Item.vue";

describe("List component, component UI test demo", function () {
  //  输入： List [{title: completed:}]
  const todos = [
    { title: "准备session ppt", completed: true },
    { title: "准备session demo code", completed: false },
  ];
  it("should render list item", function () {
    const wrapper = shallowMount(List, {
      props: {
        todos,
      },
    });

    expect(wrapper.findAllComponents(Item).length).toEqual(2);
  });
  // 测试契约部分的输出
  it("should pass title and completed props to item", function () {
    const wrapper = shallowMount(List, {
      props: {
        todos,
      },
    });

    expect(wrapper.findComponent(Item).props()).toEqual({
      title: "准备session ppt",
      completed: true,
    });
  });
  // mount 和 shallowMount对比
  it("should render list item with mount", function () {
    const wrapper = mount(List, {
      props: {
        todos,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  it("should render list item with shallowMount", function () {
    const wrapper = shallowMount(List, {
      props: {
        todos,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
