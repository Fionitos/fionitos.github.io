import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="sun">
                <img id="sun" src={require('../img/sun.png')} />
            </div>
            <div className="vxod">
                <a id="vxod">ВХОД</a>
                <div className="blue"></div>
                <div className="login">
                    <a id="login">Логин</a>
                </div>
                <div className="password">
                    <a id="password">Пароль</a>
                </div>
                <div className="remember">
                    <div className="checkmark"></div>
                    <a id="remember">Запомнить меня</a>
                </div>
                <div className="enter">
                    <a id="enter">Войти</a>
                </div>
                <div className="Timetable" onClick={() => {navigate("/timetable");}}>
                    <a id="Timetable">Расписание</a>
                </div>
            </div>
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
