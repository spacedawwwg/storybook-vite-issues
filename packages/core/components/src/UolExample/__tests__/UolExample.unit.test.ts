import { mount } from '@vue/test-utils';

import { propsAll, propsMinimal } from '../__fixtures__/UolExample.fixtures';
import Example from '../UolExample.vue';

function byTestId(testId: string) {
  return `[data-testid="${testId}"]`;
}

const defaultOptions = {
  propsData: {
    ...propsMinimal,
  },
};

describe('UolExample', () => {
  let wrapper = mount(Example, defaultOptions);

  afterEach(() => {
    wrapper.unmount();
    wrapper = mount(Example, defaultOptions);
  });

  it('should mount successfully', () => {
    const example = wrapper.find(byTestId('uol-c-example'));

    expect(wrapper.exists()).toBe(true);
    expect(example.exists()).toBe(true);
  });

  it('should not display the intro', () => {
    const intro = wrapper.find(byTestId('uol-c-example-intro'));

    expect(intro.exists()).toBe(false);
  });

  it('should display the intro', () => {
    const slotText = 'slot test';
    wrapper = mount(Example, {
      ...defaultOptions,
      slots: {
        default: slotText,
      },
    });
    const intro = wrapper.find(byTestId('uol-c-example-intro'));

    expect(intro.exists()).toBe(true);
    expect(intro.text()).toBe(slotText);
  });

  it('should display the default label', () => {
    const label = wrapper.find(byTestId('uol-c-example-label'));

    expect(label.text()).toEqual('Default label');
  });

  it('should display the param label', () => {
    wrapper = mount(Example, {
      propsData: {
        ...propsAll,
      },
    });
    const label = wrapper.find(byTestId('uol-c-example-label'));

    expect(label.text()).toEqual(propsAll.label);
  });

  it('should increase count on button click', async () => {
    const example = wrapper.find(byTestId('uol-c-example'));
    const button = wrapper.find(byTestId('uol-c-example-button'));
    const count = wrapper.find(byTestId('uol-c-example-count'));

    await button.trigger('click');
    expect(count.text()).toBe('1');
    expect(example.classes()).toContain('has-increased');
    await button.trigger('click');
    expect(count.text()).toBe('2');
    expect(example.classes()).toContain('has-increased');
  });
});
