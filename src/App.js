import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './common/Main';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Redirect from './api/Redirect';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/kakao/callback" element={<Redirect />} />
        </Routes>
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
