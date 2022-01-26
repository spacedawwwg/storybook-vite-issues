<script setup lang="ts">
import { computed, ref, toRefs, useSlots, withDefaults } from 'vue';

import type { UolExampleProps } from './UolExample.types';

interface Props {
  label?: UolExampleProps['label'];
}

interface Emits {
  (eventName: 'increase', value: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Default label',
});

const emit = defineEmits<Emits>();

const { label } = toRefs(props);
const count = ref(0);
const hasIncreased = computed(() => count.value > 0);
const slots = useSlots();
const hasSlot = !!slots.default;

function increaseCount() {
  count.value += 1;
  emit('increase', count.value);
}
</script>

<template>
  <div :class="['uol-c-example', hasIncreased && 'has-increased']" data-testid="uol-c-example">
    <p v-if="hasSlot" class="uol-c-example__intro" data-testid="uol-c-example-intro">
      <slot />
    </p>
    <button
      type="button"
      class="uol-c-example__button"
      data-testid="uol-c-example-button"
      @click="increaseCount"
    >
      <span class="uol-c-example__label" data-testid="uol-c-example-label">{{ label }}</span>
      <span class="uol-c-example__count" data-testid="uol-c-example-count">{{ count }}</span>
    </button>
  </div>
</template>

<style type="postcss" src="./UolExample.css"></style>
