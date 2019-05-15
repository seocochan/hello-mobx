import { inject } from 'mobx-react'
import { TwoThreeSeparatedViewModel } from '../viewModels/TwoThreeSeparatedViewModel'
import TwoThreeSeparatedView from '../views/TwoThreeSeparatedView'

@inject('counterTwo', 'counterThree')
class TwoThreeSeparatedPage extends React.Component {
	constructor(props) {
		super(props)
		const counterTwoStore = props.counterTwo
		const counterThreeStore = props.counterThree
		this.viewModel = new TwoThreeSeparatedViewModel(counterTwoStore, counterThreeStore)
	}

	render() {
		return <TwoThreeSeparatedView viewModel={this.viewModel} />
	}
}

export { TwoThreeSeparatedPage }
