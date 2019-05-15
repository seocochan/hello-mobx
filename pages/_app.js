import App, { Container } from 'next/app'
import React from 'react'
import { initializeStore as initializeCounterOneStore } from '../models/counterOne'
import { initializeStore as initializeCounterTwoStore } from '../models/counterTwo'
import { initializeStore as initializeCounterThreeStore } from '../models/counterThree'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

class MyApp extends App {
	static async getInitialProps(appContext) {
		// Get or Create the store with `undefined` as initialState
		// This allows you to set a custom default initialState
		const counterOneStore = initializeCounterOneStore()
		const counterTwoStore = initializeCounterTwoStore()
		const counterThreeStore = initializeCounterThreeStore()

		// Provide the store to getInitialProps of pages
		appContext.ctx.counterOneStore = counterOneStore
		appContext.ctx.counterTwoStore = counterTwoStore
		appContext.ctx.counterThreeStore = counterThreeStore

		let appProps = await App.getInitialProps(appContext)

		return {
			...appProps,
			initialCounterOneState: counterOneStore,
			initialCounterTwoState: counterTwoStore,
			initialCounterThreeState: counterThreeStore,
		}
	}

	constructor(props) {
		super(props)
		const isServer = !process.browser

		this.counterOneStore = isServer
			? props.initialCounterOneState
			: initializeCounterOneStore(props.initialCounterOneState)
		this.counterTwoStore = isServer
			? props.initialCounterTwoState
			: initializeCounterTwoStore(props.initialCounterTwoState)
		this.counterThreeStore = isServer
			? props.initialCounterThreeState
			: initializeCounterThreeStore(props.initialCounterThreeState)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<Provider
					counterOne={this.counterOneStore}
					counterTwo={this.counterTwoStore}
					counterThree={this.counterThreeStore}>
					<>
						<DevTools />
						<Component {...pageProps} />
					</>
				</Provider>
			</Container>
		)
	}
}
export default MyApp
