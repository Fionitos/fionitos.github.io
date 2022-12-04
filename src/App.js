import React from 'react'
import Timetable from './pages/Timetable'
import Marks from './pages/Marks'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path="/" element={<Timetable/>} />
            <Route path="/marks" element={<Marks />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;