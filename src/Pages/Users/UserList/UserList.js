import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    // getting the values of local storage
    const getDatafromLS = () => {
        const data = localStorage.getItem('users');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return []
        }
    }
    const [users, setUsers] = useState(getDatafromLS());
    console.log(users)

    // delete book from LS
    const deleteUser = (phone) => {
        const filteredUsers = users.filter((element, index) => {
            return element.phone !== phone
        })
        setUsers(filteredUsers);
    }
    return (
        <div className='my-5 container'>
            {users.length > 0 && <>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>

                                <th>email</th>
                                <th>phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(book => {
                                    return (
                                        <tr key={book.phone} >
                                            <td>{book.firstName + " " + book.lastName}</td>


                                            <td>{book.gender}</td>
                                            <td>{book.birth}</td>
                                            <td>{book.email}</td>
                                            <td>{book.phone}</td>


                                            <td className='delete-btn' onClick={() => deleteUser(book.phone)}>
                                                delete
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <button className='btn btn-danger btn-md'
                    onClick={() => setUsers([])}>Remove All</button>
                <Link to="/userCreate">
                    <button type="submit" className=' mx-5 btn btn-success btn-md'>
                        Users Create
                    </button>
                </Link>

            </>}
            {users.length < 1 && <div>No users are added yet</div>}
        </div>
    );
};

export default UserList;