import React, { useState } from "react";
import Select from 'react-select';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from "react-router-dom";

let students = require('../jsons/marks.json');

function Marks() {
    const navigate = useNavigate();

    const options = [{value: 0,label: 'Иванов Анатолий Сергеевич'}, {value: 1,label: 'Котельников Сергей Иванович'}, {value: 2,label: 'Лукьянова Мария Анатольевна'}];

    const [currentName, setName] = useState(0);

    function getValue(){
        return currentName ? options.find(i => i.value === currentName) : ' '
    }

    const onChange = (newValue) => {
        setName(newValue.value)
      }

    let student_name = currentName;

    let student= students.subject_marks[0].students;

    return (
        <div className="Marks">
            <div className="Home">
                <button onClick={() => {navigate("/");}}>
                    {" "}Расписание
                </button>
            </div>
            <div className="Info">
                <div className="Person">{student[student_name].student_name} </div>
                <Tippy className="Tippy" content={<div className="Description">{students.subject_marks[0].subject_description}</div>}>
                    <div className="Subject">{students.subject_marks[0].subject} </div>
                </Tippy>
            </div>
            <div>
                {student[student_name].marks.map((val, key) => {
                    return (
                    <div key={key}>
                        <div className="MarkInfo">
                            <span className="Day">{val.day}</span>
                            <div className="Mark_Theme">
                                <Tippy content={<div className="Theme">{val.theme}</div>}>
                                    <span className='Mark'>{val.mark}</span>
                                </Tippy>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            <div className="buttonChange_Mark"><Select onChange = {onChange} value = {getValue()} options = {options} defaultValue={options[1]}/></div>
        </div>
    );
}

export default Marks;