import React from 'react'
import Timetable from './pages/Timetable'
import Marks from './pages/Marks'
import Home from './pages/Home'
import Mark_teacher from './pages/Mark_teacher'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable/>} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/marks_teacher" element={<Mark_teacher />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
