const Counter = ({ value, onIncrease, onDecrease, onReset }) => {
	return (
		<div>
			<span>{value}</span>
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
			<button onClick={onReset}>reset</button>
		</div>
	)
}

export default Counter
