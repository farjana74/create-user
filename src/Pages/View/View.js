
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const View = () => {

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

    // main array of objects state || books state || books array of objects
    const [users, setUsers] = useState(getDatafromLS());


    useEffect(() => {
        getDatafromLS();
    }, []);



    // delete book from LS
    const deleteUser = (phone) => {
        const filteredUsers = users.filter((element, index) => {
            return element.phone !== phone
        })
        setUsers(filteredUsers);

    }



    // data tabel-----------------
    const columns = [

        {
            name: 'Name',
            selector: row => row.firstName + ' ' + row.lastName,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Date of Birth',
            selector: row => row.birth,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Action',
            cell: row => [<button onClick={() => (deleteUser(row.phone))} className='btn me-2 btn-danger'>Delete</button>, <button onClick={() => alert(row.phone)} className='btn btn-warning'>Edit</button>]
        }
    ];



    return (
        <div className='mt-2 container border shadow rounded'>

            <DataTable
                columns={columns}
                data={users}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={<Link to="/userCreate"><button className='send-btn   p-2 rounded  '>Go Create User</button></Link>}
                subHeader
                subHeaderComponent={<input
                    type='text'
                    placeholder='Search'
                    className='w-25 form-control'

                />}
            />
            <button className='btn btn-danger btn-md'
                onClick={() => setUsers([])}>Remove All</button>

        </div>
    );
};

export default View;