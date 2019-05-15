import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

class CounterThreeStore {
	@observable value = 0

	@action increase = () => {
		this.value += 3
	}

	@action decrease = () => {
		this.value -= 3
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
		return new CounterThreeStore(isServer, initialData)
	}
	if (store === null) {
		store = new CounterThreeStore(isServer, initialData)
	}
	return store
}
