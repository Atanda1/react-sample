import React, {useState} from 'react';

function HookCounter () {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}

	return (
		<div>
			<h3>{count}</h3>
			<button onClick={incrementFive}>Increment 5</button>
		</div>
	
	)
}

export default HookCounter;