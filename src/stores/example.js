import { writable } from 'svelte/store';
import { getInitialExampleState } from '../subroutines/getInitialExampleState';

function createExample() {
	const { subscribe, set, update } = writable(getInitialExampleState());

	return {
		subscribe,
    increment: () => update(state => {
      state.counter++
      return state
    }),
		decrement: () => update(state => {
      state.counter--
      return state
    }),
		reset: () => set(getInitialExampleState())
	};
}

export const example = createExample();