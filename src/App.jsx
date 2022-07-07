import React from "react";

import "./App.css";

import First from "./components/basic/First";
import WithParameter from "./components/basic/WithParameter";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";

export default () => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card title="#05 - Component with childrens" color="#00C8F8">
				<Family lastName="Ferreira">
					<FamilyMember name="Pedro" />
					<FamilyMember name="José" {...props} />
					<FamilyMember name="Bia" lastName="Silva" />
				</Family>
			</Card>
			<Card title="#04 - Random challenge" color="#FA6900">
				<Random max={100} min={10} />
			</Card>
			<Card title="#03 - Fragment" color="#E94C6F">
				<Fragment />
			</Card>
			<Card title="#02 - With Parameter" color="#E8B71A">
				<WithParameter
					title="Situação do aluno"
					aluno="Carlos"
					nota={6.4}
				/>
			</Card>
			<Card title="#01 - First component" color="#588C73">
				<First />
			</Card>
		</div>
	</div>
);
