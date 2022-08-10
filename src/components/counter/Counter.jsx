import React, { Component } from "react";
import './counter.css'
class Counter extends Component {
	state = {
		number: this.props.initialNumber || 0,
		pass: this.props.initialPass || 5,
	};

	inc = () => {
		this.setState({
			number: this.state.number + this.state.pass,
		});
	};

	dec = () => {
		this.setState({
			number: this.state.number - this.state.pass,
		});
	};

	setPass = (e) => {
		this.setState({
			pass: +e.target.value,
		});
	};

	render() {
		return (
			<div className="Counter">
				<h2>Counter</h2>
				<h3>{this.state.number}</h3>
				<div>
					<label htmlFor="inputPass">Pass: </label>
					<input
						id="inputPass"
						type="number"
						value={this.state.pass}
						onChange={this.setPass}
					/>
				</div>
				<button onClick={this.inc}>+</button>
				<button onClick={this.dec}>
					-
				</button>
			</div>
		);
	}
}

export default Counter;
