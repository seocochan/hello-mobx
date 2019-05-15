class OneTwoSeparatedViewModel {
	constructor(counterOneStore, counterTwoStore) {
		this.counterOneStore = counterOneStore
		this.counterTwoStore = counterTwoStore
	}

	get valueOne() {
		return this.counterOneStore.value
	}

	get valueTwo() {
		return this.counterTwoStore.value
	}

	increaseOne = () => {
		this.counterOneStore.increase()
	}

	increaseTwo = () => {
		this.counterTwoStore.increase()
	}

	decreaseOne = () => {
		this.counterOneStore.decrease()
	}

	decreaseTwo = () => {
		this.counterTwoStore.decrease()
	}

	resetOne = () => {
		this.counterOneStore.reset()
	}

	resetTwo = () => {
		this.counterTwoStore.reset()
	}
}

export { OneTwoSeparatedViewModel }
