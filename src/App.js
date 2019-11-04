import React from "react";
import PaymentIcon from "react-payment-icons-inline";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<div>
					Icon:{" -> "}
					<PaymentIcon
						id="visa"
						icon="visa"
						key="visa"
						transparent={false}
						style={{ width: 40 }}
					/>
					<PaymentIcon
						id="shopify"
						icon="shopify"
						key="shopify"
						transparent={false}
						style={{ width: 40 }}
					/>
					<PaymentIcon
						id="skrill"
						icon="skrill"
						key="skrill"
						transparent={false}
						style={{ width: 40 }}
					/>
				</div>

				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
