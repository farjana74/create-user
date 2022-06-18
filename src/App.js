import logo from './logo.svg';
import './App.css';
import UserCreate from './Pages/Users/UserCreate/UserCreate';
import UserList from './Pages/Users/UserList/UserList';
import { Route, Routes } from 'react-router';
import View from './Pages/View/View';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserCreate />} />
        <Route path="userCreate" element={<UserCreate />} />
        <Route path="view" element={<View />} />
        {/* <Route path="userList" element={<UserList />} /> */}
      </Routes>

      {/* <UserCreate></UserCreate>
      <UserList></UserList> */}
    </div>
  );
}

export default App;
