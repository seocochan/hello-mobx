import Link from 'next/link'

const Index = () => {
	return (
		<div>
			<h1>Counters</h1>
			<nav>
				<Link href={'/one-two-merged'}>
					<a>One Two Merged</a>
				</Link>
				<br />
				<Link href={'/one-two-separated'}>
					<a>One Two Separated</a>
				</Link>
				<br />
				<Link href={'/two-three-merged'}>
					<a>Two Three Merged</a>
				</Link>
				<br />
				<Link href={'/two-three-separated'}>
					<a>Two Three Separated</a>
				</Link>
			</nav>
		</div>
	)
}

export default Index
