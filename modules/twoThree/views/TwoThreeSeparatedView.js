import { observer } from 'mobx-react'
import Counter from '../../../components/Counter'

@observer
class TwoThreeSeparatedView extends React.Component {
	render() {
		const {
			valueTwo,
			increaseTwo,
			decreaseTwo,
			resetTwo,
			valueThree,
			increaseThree,
			decreaseThree,
			resetThree,
		} = this.props.viewModel

		return (
			<>
				<Counter
					value={valueTwo}
					onIncrease={() => increaseTwo()}
					onDecrease={() => decreaseTwo()}
					onReset={() => resetTwo()}
				/>
				<br />
				<Counter
					value={valueThree}
					onIncrease={() => increaseThree()}
					onDecrease={() => decreaseThree()}
					onReset={() => resetThree()}
				/>
			</>
		)
	}
}

export default TwoThreeSeparatedView
