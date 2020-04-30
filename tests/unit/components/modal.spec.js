import Modal from "@/components/Modal";
import { shallowMount } from "@vue/test-utils";
describe("Modal", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Modal, {
      propsData: {
        visible: true
      },
      slots: {
        default: "<p class='js-slot-test'>test</p>"
      },
      attachToDocument: true
    });
  });

  it("should show modal if visible prop is true", () => {
    const filledDefaultSlotText = wrapper.find(".js-slot-test").text();
    expect(filledDefaultSlotText).toBe("test");
  });

  it("should emit update visible prop to false on keyDown esc", () => {
    wrapper.trigger("keydown.esc");
    expect(wrapper.emitted()["update:visible"][0][0]).toBe(false);
  });

  it("should remove keydown event listeners after destroy", () => {
    const remover = jest
      .spyOn(window, "removeEventListener")
      .mockImplementation(() => {});
    wrapper.destroy();
    expect(remover).toBeCalledTimes(1);
  });
});
