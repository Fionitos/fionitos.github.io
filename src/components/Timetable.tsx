import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import Select from 'react-select'
import axios from 'axios'

const options = [{value: 0,label: '101'}, {value: 1,label: '111' }, {value: 2,label: '121'},{value: 3, label:'131C'},{value: 4,label:'132C'},{value: 5,label: '141'},{value: 6,label: '142'},  { value: 7, label: '151'}, {value: 8, label: '160C'}, {value: 9,label: '161'},{value: 10, label: '162T'}, {value: 11,label:'163T'},{value: 12, label:'164T'},{ value: 13, label: '170C'},{ value: 14, label: '171C'},{ value: 15, label: '172C'},{ value: 16, label: '181'},{ value: 17, label: '191C'},{ value: 18, label: '201'},{ value: 19, label: '211'},{ value: 20, label: '221'},{ value: 21, label: '230C'},{ value: 22, label: '241'},{ value: 23, label: '242'},{ value: 24, label: '243'},{ value: 25, label: '251'},{ value: 26, label: '260C'},{ value: 27, label: '261'},{ value: 28, label: '262T'},{ value: 29, label: '263T'},{ value: 30, label: '270C'},{ value: 31, label: '271'},{ value: 32, label: '281'},{ value: 33, label: '290C'},{ value: 34, label: '301'},{ value: 35, label: '315'},{ value: 36, label: '321'},{ value: 37, label: '341'},{ value: 38, label: '351'},{ value: 39, label: '361C'},{ value: 40, label: '362T'},{ value: 41, label: '365T'},{ value: 42, label: '366T'},{ value: 43, label: '371'},{ value: 44, label: '375C'},{ value: 45, label: '383'},{ value: 46, label: '390C'},{ value: 47, label: '462T'},{ value: 48, label: '465T'},{ value: 49, label: '466T'},{ value: 50, label: '490C'},{ value: 51, label: '82'}];
let subbota = require('../jsons/sub.json');

function Timetable() {
  const navigate = useNavigate();

  const [currentGroup, setGroup] = useState(0);
  const [data, setData] = useState();

  function getValue(){
    return currentGroup ? options.find(c => c.value === currentGroup) : ' '
  }

  useEffect(() => {
    axios.get(`http://10.0.0.151:8000/api/get/raspisanie_group/id/group/101`).then(res =>{
      setData(res.data)
    })
  }, [])

//   const onChange = (newValue) => {
//     setGroup(newValue.value)
//   }

  let daySix = subbota.subjects;

  try { daySix = data  } catch (error) {console.log()}

  return (
    <div className="Home">
        {/* <div className='Marks'>
            <button onClick={() => {navigate("/marks");}}>
                {" "}Оценки
            </button>
        </div> */}
        <img id="background" src={require('../img/background.png')} />
        <img id="circle" src={require('../img/circle.png')} />
        <div className="Days"></div>
        <div className="Group"></div>
        <div className="CourseList">
            <div className="GroupText"> 
                <a className="SelectGroupText">Выберите группу</a>
            </div>
            <div className="FirstCourse">
                <div className="FirstCourseText">
                    <a id="FirstCourseText">1 курс</a>
                </div>
            </div>
            <div className="SecondCourse">
                <div className="SecondCourseText">
                    <a id="SecondCourseText">2 курс</a>
                </div>
            </div>
            <div className="ThirdCourse">
                <div className="ThirdCourseText">
                    <a id="ThirdCourseText">3 курс</a>
                </div>
            </div>
            <div className="FourthCourse">
                <div className="FourthCourseText">
                    <a id="FourthCourseText">4 курс</a>
                </div>
            </div>
        </div>
        <div className="Barrier">
            <img id="cat" src={require('../img/cat.png')} />
            <div id="Develop">Пока здесь ничего нет, но скоро появится</div>
        </div>
    </div>
  );
}

export default Timetable;
