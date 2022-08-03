import React from "react";

import "./App.css";

import First from "./components/basic/First";
import WithParameter from "./components/basic/WithParameter";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import StudentsList from "./components/repetitions/StudentsList";
import ItemsList from "./components/repetitions/ItemsList";
import ParOrImpar from "./components/conditions/ParOrImpar";
import UserInfo from "./components/conditions/UserInfo";
import DirectFather from "./components/comunication/DirectFather";
import IndirectFather from "./components/comunication/IndirectFather";
import Input from "./components/forms/Input";
import Counter from './components/counter/Counter'

export default () => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card title="#12 - Counter" color="#424242">
				<Counter initialNumber={10}></Counter>
			</Card>
			<Card title="#11 - Controlled component" color="#E45F56">
				<Input></Input>
			</Card>
			<Card title="#10 - Indirect Communication" color="#8BAD39">
				<IndirectFather></IndirectFather>
			</Card>
			<Card title="#09 - Direct Communication" color="#59323C">
				<DirectFather></DirectFather>
			</Card>
			<Card title="#08 - Conditional Render" color="#982395">
				<ParOrImpar number={19}></ParOrImpar>
				<UserInfo user={{ name: "Neto" }}></UserInfo>
				<UserInfo user={{ email: "zeneto2604@gmail.com" }}></UserInfo>
			</Card>
			<Card title="#07 - Repetition challenge" color="#080">
				<ItemsList></ItemsList>
			</Card>
			<Card title="#06 - Repetition" color="#FF4C65">
				<StudentsList></StudentsList>
			</Card>
			<Card title="#05 - Component with childrens" color="#00C8F8">
				<Family lastName="Silva">
					<FamilyMember name="Pedro" />
					<FamilyMember name="José" />
					<FamilyMember name="Bia" />
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
