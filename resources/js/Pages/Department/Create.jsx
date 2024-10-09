import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const CreateEmployee = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        gender: 'Male',
        marital_status: 'Single',
        phone: '',
        email: '',
        address: '',
        dob: '',
        nationality: '',
        hire_date: '',
        department: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('employee.store'));
    };

    return (
        <div>
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={data.gender} onChange={e => setData('gender', e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.gender && <span>{errors.gender}</span>}
                </div>
                <div>
                    <label>Marital Status:</label>
                    <select value={data.marital_status} onChange={e => setData('marital_status', e.target.value)}>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                    </select>
                    {errors.marital_status && <span>{errors.marital_status}</span>}
                </div>
                <div>
                    <label>Phone No.:</label>
                    <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                    {errors.phone && <span>{errors.phone}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Address:</label>
                    <textarea value={data.address} onChange={e => setData('address', e.target.value)} />
                    {errors.address && <span>{errors.address}</span>}
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" value={data.dob} onChange={e => setData('dob', e.target.value)} />
                    {errors.dob && <span>{errors.dob}</span>}
                </div>
                <div>
                    <label>Nationality:</label>
                    <input type="text" value={data.nationality} onChange={e => setData('nationality', e.target.value)} />
                    {errors.nationality && <span>{errors.nationality}</span>}
                </div>
                <div>
                    <label>Hire Date:</label>
                    <input type="date" value={data.hire_date} onChange={e => setData('hire_date', e.target.value)} />
                    {errors.hire_date && <span>{errors.hire_date}</span>}
                </div>
                <div>
                    <label>Department:</label>
                    <input type="text" value={data.department} onChange={e => setData('department', e.target.value)} />
                    {errors.department && <span>{errors.department}</span>}
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
