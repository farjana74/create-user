import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, Navigate, Link } from "react-router-dom";
import "./UserCreate.css";



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


const UserCreate = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    // main array of objects state || users state || users array of objects
    const [users, setUsers] = useState(getDatafromLS());


    // input field states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');



    // form submit event
    const handleAddUserSubmit = (e) => {

        e.preventDefault();
        // creating an object
        let user = {
            firstName,
            lastName,
            gender,
            birth,
            city,
            phone,
            email
        }
        setUsers([...users, user]);

        setFirstName('');
        setLastName('');
        setGender('');
        setBirth('');
        setCity('');
        setPhone('');
        setEmail('');



    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))

        // navigate('/view')
    }, [users])




    return (
        <div className='container my-5 ' >
            <div className=' py-2 d-flex align-items-center justify-content-between w-75 mx-auto  '>
                <div>
                    <h1 className=' fs-1 fst-italic text-muted  '>Create User</h1>

                </div>

            </div>
            <div className=' border col shadow-lg p-4 w-75 mx-auto '>

                <div className='contact-us-form'>
                    <form autoComplete="off" className='form-group'
                        onSubmit={handleAddUserSubmit}>

                        <label className='fs-5  fst-italic'>First Name</label>
                        <input type="text" className='form-control p-3' required {...register("firstName", { minLength: 2, maxLength: 50 })}
                            onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
                        <br></br>

                        <label className='fs-5  fst-italic'>Last Name</label>
                        <input type="text" className='form-control p-3' required {...register("lastName", { minLength: 2, maxLength: 50 })}
                            onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
                        <br></br>

                        <label className='fs-5  fst-italic'>Gender</label>
                        <select className=' w-100 py-2 form-floating p-3 ' required onChange={(e) => setGender(e.target.value)} value={gender} >
                            <option>Gender</option>
                            <option value="female">Female</option>

                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>

                        <br />


                        <br></br>
                        <label className='fs-5  fst-italic'>Birth</label>
                        <input type="date" className='form-control p-3' required {...register("birth", { min: 100 })}
                            onChange={(e) => setBirth(e.target.value)} value={birth}></input>
                        <br></br>

                        <label className='fs-5  fst-italic'>City</label>
                        <input type="text" className='form-control p-3'
                            onChange={(e) => setCity(e.target.value)} value={city}></input>
                        <br></br>

                        <label className='fs-5  fst-italic'>Phone</label>
                        <input type="number" className='form-control p-3' required  {...register("phone", {
                            maxLength: 11,
                            minLength: 8
                        })}
                            onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                        <br></br>

                        <label className='fs-5  fst-italic'>email</label>
                        <input type="email" className='form-control p-3' required  {...register("email", { pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                            onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        <br></br>

                        <button type="submit" className=' btn send-btn  '>
                            Submit
                        </button>


                    </form>

                </div>


            </div>

            <br />
            <h2 className='text-end'>Go to  <Link to="/view">User List</Link></h2>


        </div>

    );
};

export default UserCreate;