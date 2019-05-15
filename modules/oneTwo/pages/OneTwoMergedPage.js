import { inject } from 'mobx-react'
import { OneTwoMergedViewModel } from '../viewModels/OneTwoMergedViewModel'
import OneTwoMergedView from '../views/OneTwoMergedView'

@inject('counterOne', 'counterTwo')
class OneTwoMergedPage extends React.Component {
	constructor(props) {
		super(props)
		const counterOneStore = props.counterOne
		const counterTwoStore = props.counterTwo
		this.viewModel = new OneTwoMergedViewModel(counterOneStore, counterTwoStore)
	}

	render() {
		return <OneTwoMergedView viewModel={this.viewModel} />
	}
}

export { OneTwoMergedPage }
