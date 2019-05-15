import { observer } from 'mobx-react'
import Counter from '../../../components/Counter'

@observer
class TwoThreeMergedView extends React.Component {
	render() {
		const { value, increase, decrease, reset } = this.props.viewModel

		return (
			<Counter
				value={value}
				onIncrease={() => increase()}
				onDecrease={() => decrease()}
				onReset={() => reset()}
			/>
		)
	}
}

export default TwoThreeMergedView
