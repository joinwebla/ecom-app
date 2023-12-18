import { useContext } from "react"
import { NumberContext } from "./ComponentA"


export const ComponentD = () => {
	const number = useContext(NumberContext)

	return (
		<>
			<h1>Number inside D - {number}</h1>
		</>
	)
}