import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewPoll from './NewPoll';
import Vote from './Vote';
import PollResults from './PollResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewPoll />} />
            <Route path='/:id' element={<PollResults />} />
            <Route path='/:id/vote' element={<Vote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
