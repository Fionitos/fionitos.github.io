import React, { useState } from "react";
import Select from 'react-select';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from "react-router-dom";

let students = require('../jsons/marks.json');

function Mark_teacher() {
    const navigate = useNavigate();

    let student= students.subject_marks[0].students;
    return (
        <div className="Marks">
            <div className="Home">
                <button onClick={() => {navigate("/");}}>
                    {" "}Расписание
                </button>
            </div>
            <div className="Marks">
                <button onClick={() => {navigate("/marks");}}>
                    {" "}Оценки для студента
                </button>
            </div>
            <div className="Info">
                <div className="Group">{students.subject_marks[0].group_name} </div>
                <Tippy className="Tippy" content={<div className="Description">{students.subject_marks[0].subject_description}</div>}>
                    <div className="Subject">{students.subject_marks[0].subject} </div>
                </Tippy>
            </div>
            <div>
                {student.map((val, key) => {
                    return (
                    <div key={key}>
                        <div className="Students">{val.student_name} </div>
                    </div>)
                })}
            </div>
            <div>
                {student[0].marks.map((val, key) => {
                    return (
                    <div key={key}>
                        <div className="MarkInfo1">
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
        </div>
    );
}

export default Mark_teacher;