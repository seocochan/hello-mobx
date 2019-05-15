class TwoThreeMergedViewModel {
	constructor(counterTwoStore, counterThreeStore) {
		this.counterTwoStore = counterTwoStore
		this.counterThreeStore = counterThreeStore
	}

	get value() {
		return this.counterTwoStore.value + this.counterThreeStore.value
	}

	increase = () => {
		this.counterTwoStore.increase()
		this.counterThreeStore.increase()
	}

	decrease = () => {
		this.counterTwoStore.decrease()
		this.counterThreeStore.decrease()
	}

	reset = () => {
		this.counterTwoStore.reset()
		this.counterThreeStore.reset()
	}
}

export { TwoThreeMergedViewModel }
