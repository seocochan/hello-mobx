import { inject } from 'mobx-react'
import { TwoThreeMergedViewModel } from '../viewModels/TwoThreeMergedViewModel'
import TwoThreeMergedView from '../views/TwoThreeMergedView'

@inject('counterTwo', 'counterThree')
class TwoThreeMergedPage extends React.Component {
	constructor(props) {
		super(props)
		const counterTwoStore = props.counterTwo
		const counterThreeStore = props.counterThree
		this.viewModel = new TwoThreeMergedViewModel(counterTwoStore, counterThreeStore)
	}

	render() {
		return <TwoThreeMergedView viewModel={this.viewModel} />
	}
}

export { TwoThreeMergedPage }
