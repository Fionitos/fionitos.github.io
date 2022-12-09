import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="sun">
                <img id="sun" src={require('../img/sun.png')} />
            </div>
            <div className="vxod"></div>
            <div className="black"></div>
            <div className="login"></div>
            <div className="password"></div>
            <div className="enter">Войти</div>
            <div className="Timetable" onClick={() => {navigate("/timetable");}}>Расписание</div>
            <div className="phone">
                <div className="phone2">
                    <img id="phone2" src={require('../img/phone2.png')} />
                </div>
                <div className="phone1">
                    <img id="phone1" src={require('../img/phone1.png')} />
                </div>
                <div className="rustore">
                    <img id="rustore" src={require('../img/rustore.png')} />
                </div>
            </div>
        </div>
    );
}

export default Home;
