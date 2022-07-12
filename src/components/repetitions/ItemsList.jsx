import React from "react";
import items from "../../data/items";

export default (props) => {
	const idList = items.map((item) => {
		return (
			<tr>
				<td>{item.id}</td>
			</tr>
		);
	});

	const nameList = items.map((item) => {
		return (
			<tr>
				<td>{item.name}</td>
			</tr>
		);
	});

	const priceList = items.map((item) => {
		return (
			<tr>
				<td>{item.price}</td>
			</tr>
		);
	});

	return (
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<table>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>price</th>
				</tr>
				<tr>
					<td>{idList}</td>
					<td>{nameList}</td>
					<td>{priceList}</td>
				</tr>
			</table>
		</div>
	);
};
