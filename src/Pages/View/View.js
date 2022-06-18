
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

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

    // data tabel-----------------
    const columns = [

        {
            name: 'Name',
            selector: row => row.firstName,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Date of Birth',
            selector: row => row.birth,
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
            cell: row => [<button className='btn me-2 btn-danger'>Delete</button>, <button className='btn btn-warning'>Edit</button>]
        }
    ];



    return (
        <div className='mt-5'>
            <DataTable
                title="Data Table"
                columns={columns}
                data={users}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                // actions={<button className='btn btn-sm btn-primary'>Export Data</button>}
                subHeader
                subHeaderComponent={<input
                    type='text'
                    placeholder='Search'
                    className='w-25 form-control'
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                />}
            />
            <button className='btn btn-primary btn-sm'>export</button>
        </div>
    );
};

export default View;