class OneTwoMergedViewModel {
	constructor(counterOneStore, counterTwoStore) {
		this.counterOneStore = counterOneStore
		this.counterTwoStore = counterTwoStore
	}

	get value() {
		return this.counterOneStore.value + this.counterTwoStore.value
	}

	increase = () => {
		this.counterOneStore.increase()
		this.counterTwoStore.increase()
	}

	decrease = () => {
		this.counterOneStore.decrease()
		this.counterTwoStore.decrease()
	}

	reset = () => {
		this.counterOneStore.reset()
		this.counterTwoStore.reset()
	}
}

export { OneTwoMergedViewModel }
