class TwoThreeSeparatedViewModel {
	constructor(counterTwoStore, counterThreeStore) {
		this.counterTwoStore = counterTwoStore
		this.counterThreeStore = counterThreeStore
	}

	get valueTwo() {
		return this.counterTwoStore.value
	}

	get valueThree() {
		return this.counterThreeStore.value
	}

	increaseTwo = () => {
		this.counterTwoStore.increase()
	}

	increaseThree = () => {
		this.counterThreeStore.increase()
	}

	decreaseTwo = () => {
		this.counterTwoStore.decrease()
	}

	decreaseThree = () => {
		this.counterThreeStore.decrease()
	}

	resetTwo = () => {
		this.counterTwoStore.reset()
	}

	resetThree = () => {
		this.counterThreeStore.reset()
	}
}

export { TwoThreeSeparatedViewModel }
