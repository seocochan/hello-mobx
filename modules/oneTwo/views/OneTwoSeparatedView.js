import { observer } from 'mobx-react'
import Counter from '../../../components/Counter'

@observer
class OneTwoSeparatedView extends React.Component {
	render() {
		const {
			valueOne,
			increaseOne,
			decreaseOne,
			resetOne,
			valueTwo,
			increaseTwo,
			decreaseTwo,
			resetTwo,
		} = this.props.viewModel

		return (
			<>
				<Counter
					value={valueOne}
					onIncrease={() => increaseOne()}
					onDecrease={() => decreaseOne()}
					onReset={() => resetOne()}
				/>
				<br />
				<Counter
					value={valueTwo}
					onIncrease={() => increaseTwo()}
					onDecrease={() => decreaseTwo()}
					onReset={() => resetTwo()}
				/>
			</>
		)
	}
}

export default OneTwoSeparatedView
