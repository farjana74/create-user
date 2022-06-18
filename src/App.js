import './App.css';
import UserCreate from './Pages/Users/UserCreate/UserCreate';
import { Route, Routes } from 'react-router';
import View from './Pages/View/View';


function App() {
  return (
    <div>

      {/* Routing----- */}
      <Routes>
        <Route path="/" element={<UserCreate />} />
        <Route path="userCreate" element={<UserCreate />} />
        <Route path="view" element={<View />} />

      </Routes>

    </div>
  );
}

export default App;
