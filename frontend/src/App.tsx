import React from 'react';
import './App.css';
import CreateUser from './Components/CreateUser';
import UpdatePassword from './Components/UpdatePassword';
import UserList from './Components/UserList';


function App() {
    return (
        <>
            <CreateUser />
            <UserList />
            <UpdatePassword />
        </>
    );
}

export default App;
