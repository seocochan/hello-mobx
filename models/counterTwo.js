import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

class CounterTwoStore {
	@observable value = 0

	@action increase = () => {
		this.value += 2
	}

	@action decrease = () => {
		this.value -= 2
	}

	@action reset = () => {
		this.value = 0
	}

	constructor(isServer, initialData = {}) {
		this.value = initialData.value != null ? initialData.value : 0
	}
}

let store = null

export const initializeStore = initialData => {
	// Always make a new store if server, otherwise state is shared between requests
	if (isServer) {
		return new CounterTwoStore(isServer, initialData)
	}
	if (store === null) {
		store = new CounterTwoStore(isServer, initialData)
	}
	return store
}
