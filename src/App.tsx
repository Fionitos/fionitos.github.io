import Timetable from './components/Timetable'
import Marks from './components/Marks'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable/>} />
            <Route path="/marks" element={<Marks />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;