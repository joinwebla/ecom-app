import { useState, createContext, useRef, useEffect } from "react";
import { ComponentB } from "./ComponentB";
import { ComponentD } from "./ComponentD";

// create a context
export const NumberContext = createContext("default value")



export const ComponentA = () => {
	const countRef = useRef(0)
	const handleClick = () => {
		countRef.current = countRef.current + 1;
	}

	// will not re-render the component
	return (
		<>
			<h1>Clicked Count {countRef.current}</h1>
			<button onClick={handleClick}>Click me</button>
		</>
	)
}






// export const ComponentA = () => {
// 	// first create a ref and name it
// 	// pass the ref to the HTML element
// 	const inputRef = useRef()

// 	// component did mount
// 	useEffect(() => {
// 		inputRef.current.focus()
// 	}, [])


// 	return (
// 		<>
// 			Enter Your Name
// 			<input ref={inputRef} type="text" />
// 		</>
// 	)
// }


// const [number, setNumber] = useState(0);

// const changeNumber = () => {
// 	setNumber(number + 1)
// }
// return (
// 	<>
// 		<h1>Number inside A - {number}</h1>
// 		<button onClick={changeNumber}>Change in A</button>
// 		<NumberContext.Provider value={number}>
// 			<ComponentB />
// 		</NumberContext.Provider>
// 		<NumberContext.Provider value={number}>
// 			<ComponentD />
// 		</NumberContext.Provider>
// 	</>
// )