import React from "react";

import './App.css'

import First from "./components/basic/First";
import WithParameter from "./components/basic/WithParameter";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";

export default () => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card title="#04 - Desafio aleatório">
				<Random max={100} min={10} />
			</Card>
			<Card title="#03 - Fragment">
				<Fragment />
			</Card>
			<Card title="#02 - With Parameter">
				<WithParameter
					title="Situação do aluno"
					aluno="Carlos"
					nota={6.4}
				/>
			</Card>
			<Card title="#01 - First component">
				<First />
			</Card>
		</div>
	</div>
);
