import { inject } from 'mobx-react'
import { OneTwoSeparatedViewModel } from '../viewModels/OneTwoSeparatedViewModel'
import OneTwoSeparatedView from '../views/OneTwoSeparatedView'

@inject('counterOne', 'counterTwo')
class OneTwoSeparatedPage extends React.Component {
	constructor(props) {
		super(props)
		const counterOneStore = props.counterOne
		const counterTwoStore = props.counterTwo
		this.viewModel = new OneTwoSeparatedViewModel(counterOneStore, counterTwoStore)
	}

	render() {
		return <OneTwoSeparatedView viewModel={this.viewModel} />
	}
}

export { OneTwoSeparatedPage }
