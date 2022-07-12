import React from "react";
import students from "../../data/students";

export default (props) => {

const studentsList = students.map(student=> {
    return (
        <li ley={student.id}>
			{student.id}- {student.nome} = {student.nota}
		</li>
    )
})

	return (
		<div>
			<ul style={{listStyle: 'none'}}>
				{studentsList}
			</ul>
		</div>
	);
};
