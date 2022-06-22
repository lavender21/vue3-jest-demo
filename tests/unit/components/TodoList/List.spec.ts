import { mount, shallowMount } from "@vue/test-utils";
import List from "@/components/TodoList/List.vue";
import Item from "@/components/TodoList/Item.vue";

describe("List component, component UI test demo", function () {
  //  输入： List [{title: completed:}]
  const shallowMountTodoList = () => {
    const defualtProps = {
      todos: [
        { title: "准备session ppt", completed: true },
        { title: "准备session demo code", completed: false },
      ],
    };
    return shallowMount(List, {
      props: defualtProps,
    });
  };
  it("should render list item", function () {
    const wrapper = shallowMountTodoList();

    expect(wrapper.findAllComponents(Item).length).toEqual(2);
  });
  // 测试契约部分的输出
  it("should pass title and completed props to item", function () {
    const wrapper = shallowMountTodoList();

    expect(wrapper.findComponent(Item).props()).toEqual({
      title: "准备session ppt",
      completed: true,
    });
  });
  // 测试监听Vue自定义事件
  it("should remove current item from list when Item component emit remove event", async function () {
    const wrapper = shallowMountTodoList();

    await wrapper.findAllComponents(Item)[0].vm.$emit("remove");

    expect(wrapper.findAllComponents(Item)[0].props()).toEqual({
      title: "准备session demo code",
      completed: false,
    });
  });

  it("should add item when input title and click add button", async function () {
    const wrapper = shallowMountTodoList();

    await wrapper.find('input[type="text"]').setValue("session rehearsal");
    await wrapper.find("button.add-todo-btn").trigger("click");
    expect(wrapper.findAllComponents(Item)[2].props()).toEqual({
      title: "session rehearsal",
      completed: false,
    });
  });

  it("should toggle item when Item component emit toggleComplete event", async function () {
    const wrapper = shallowMountTodoList();
    const itemWrapper = wrapper.findAllComponents(Item)[1];
    await itemWrapper.vm.$emit("toggle");

    expect(itemWrapper.props()).toEqual({
      title: "准备session demo code",
      completed: true,
    });

    await itemWrapper.vm.$emit("toggle");
    expect(itemWrapper.props()).toEqual({
      title: "准备session demo code",
      completed: false,
    });
  });

  // mount 和 shallowMount对比 snapshot 要等组件完成最后再加
  xit("should render list item with mount", function () {
    const wrapper = shallowMountTodoList();

    expect(wrapper.html()).toMatchSnapshot();
  });
  xit("should render list item with shallowMount", function () {
    const wrapper = shallowMountTodoList();

    expect(wrapper.html()).toMatchSnapshot();
  });
});
