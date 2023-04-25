/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
import * as React from "react";
import { render } from "react-dom";
import { icp_react_backend } from "../../declarations/icp_react_backend";

const MyHello = () => {
	const [counter, setCounter] = React.useState("");
	const [name, setName] = React.useState("");
	const [message, setMessage] = React.useState("");

	async function doGreet() {
		const greeting = await icp_react_backend.greet(name);
		setMessage(greeting);
	}

	const getCounter = async () => {
		const _counter = await icp_react_backend.getCounter();
		setCounter(_counter);
	};

	React.useEffect(() => {
		getCounter();
	});

	return (
		<div style={{ fontSize: "30px" }}>
			<div style={{ backgroundColor: "yellow" }}>
				<p>Greetings, from DFINITY!</p>
				<p>
					{" "}
					Type your message in the Name input field, then click{" "}
					<b> Get Greeting</b> to display the result.
				</p>
			</div>
			<div style={{ margin: "30px" }}>
				<input
					id="name"
					value={name}
					onChange={(ev) => setName(ev.target.value)}
				/>
				<button type="button" onClick={doGreet}>Get Greeting!</button>
			</div>
			<div>
				Greeting is: "
				<span style={{ color: "blue" }}>{message}</span>"
			</div>
			<div>{`Counter: ${counter}`}</div>
		</div>
	);
};

render(<MyHello />, document.getElementById("app"));