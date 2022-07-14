import React from "react";
import items from "../../data/items";
import "./itemsList.css";

export default (props) => {
	const itemsList = items.map((item) => {
		return (
			<tr className={item.id % 2 == 0 ? 'Grey' : ''}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>R${item.price}</td>
			</tr>
		);
	});

	/*function getLines() {
		return items.map((item) => {
			return (
				<tr>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>R${item.price}</td>
				</tr>
			);
		});
	}*/

	return (
		<div className="ItemsTable">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{itemsList}
				</tbody>
			</table>
		</div>
	);
};
