import type { Story } from '@storybook/vue3';

import { propsAll, propsMinimal } from '../__fixtures__/UolExample.fixtures';
import type { UolExampleWithSlot } from '../UolExample.types';
import UolExample from '../UolExample.vue';

export default {
  title: 'Core Components/UolExample',
  component: UolExample,
  argTypes: {
    ...propsMinimal,
    default: {
      description: 'The default slot',
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      },
    },
    onIncrease: { action: 'increase' },
  },
};

const Template: Story<UolExampleWithSlot> = args => ({
  components: { UolExample },
  setup() {
    // remove default slot from props
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { default: defaultSlot, ...props } = args;
    return {
      props,
    };
  },
  template: `
    <UolExample v-bind="props">
      ${args.default}
    </UolExample>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // props
  ...propsAll,
  // slot content
  default: 'This is the introduction',
};
