import { useCallback, useMemo, useState } from "react"
import { ComponentC } from "./ComponentC"
import PropTypes from 'prop-types';

const ComponentB = (props) => {
	const [some, setSome] = useState(0)
	const [count, setCount] = useState(0)

	// variable will reset whenever state change
	let number = 0;
	const handleClick = () => {
		number = number + 1
		console.log(number, "inside");
	}
	console.log(number, "outside");


	return (
		<>
			<button onClick={() => setSome(some + 1)}>change state</button>
			<button onClick={handleClick}>change number</button>
			<ComponentC handleClick={handleClick} />
		</>
	)
}


ComponentB.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number,
	name: PropTypes.string,
	list: PropTypes.array,
	element: PropTypes.element
}

export { ComponentB }