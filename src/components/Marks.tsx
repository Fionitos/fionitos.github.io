import React, { useState } from "react";
import Select from 'react-select'
import { useNavigate } from "react-router-dom";

let marks = require('../jsons/marks.json');

function Marks() {
    const navigate = useNavigate();

    const options = [{value: 0,label: 'Анатолий Иванов Сергеевич'}, {value: 1,label: 'Сергей Котельников Иванович'}, {value: 2,label: 'Мария Лукьянова Анатольевна'}];

    const [currentMark, setMark] = useState(0);

    function getValue(){
        return currentMark ? options.find(c => c.value === currentMark) : ' '
    }

    // const onChange = (newValue) => {
    //     setMark(newValue.value)
    //   }
    

    // let all_grade = currentMark;

    // let fioJson = marks.all_grades[all_grade].F.I.O;

    // let fio = [
    //     fioJson[0].subjects, 
    //     fioJson[1].subjects,
    //     fioJson[2].subjects,
    //   ]

    return (
        <div>
            <div className="Marks">
                <button onClick={() => {navigate("/");}}>
                    {" "}Расписание
                </button>
            </div>
            {/* <div className="buttonChange"><Select onChange = {onChange} value = {getValue()} options = {options}/></div> */}
            {/* <div className="ListFio">
                {marks.map(all_grades => (
                    <div key={all_grades.id}>{all_grades.F.I.O} {all_grades.grades}</div>
                    ))};
            </div> */}
        </div>
    );
}

export default Marks;
