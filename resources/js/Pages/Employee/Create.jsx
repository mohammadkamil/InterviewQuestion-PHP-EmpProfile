import React from "react";
import { useForm } from "@inertiajs/react"; // Import Inertia
import GuestLayout from "@/Layouts/GuestLayout"; // Use GuestLayout for consistent layout
import Swal from "sweetalert2"; // Import SweetAlert2
import axios from "axios"; // Import Axios
import { Link } from "@inertiajs/react"; // Import Link for navigation

const CreateEmployee = () => {
    const { data, setData, errors, setErrors } = useForm({
        name: "",
        gender: "",
        marital_status: "",
        phone: "",
        email: "",
        address: "",
        dob: "",
        nationality: "",
        hire_date: "",
        department: "",
    });

    const validateForm = () => {
        const newErrors = {};

        // Basic validation rules
        if (!data.name) newErrors.name = "Employee name is required.";
        if (!data.gender) newErrors.gender = "Gender is required.";
        if (!data.marital_status) newErrors.marital_status = "Marital status is required.";
        if (!data.phone) newErrors.phone = "Phone number is required.";
        if (!data.email) newErrors.email = "Email is required.";
        if (!data.address) newErrors.address = "Address is required.";
        if (!data.dob) newErrors.dob = "Date of birth is required.";
        if (!data.nationality) newErrors.nationality = "Nationality is required.";
        if (!data.hire_date) newErrors.hire_date = "Hire date is required.";
        if (!data.department) newErrors.department = "Department is required.";

        // If there are errors, display them in an alert
        if (Object.keys(newErrors).length > 0) {
            // Create a formatted string for error messages
            const errorMessages = Object.values(newErrors).join("\n"); // Join errors with new line

            Swal.fire({
                icon: "error",
                title: "Validation Errors",
                text: errorMessages,
                timer: 3000, // Auto close after 3 seconds
                showConfirmButton: false,
            });
        }

        // Return true if no errors, otherwise false
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form before submission
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        try {
            // Send POST request using Axios
            const response = await axios.post(route("employee.store"), {
                name: data.name,
                gender: data.gender,
                marital_status: data.marital_status,
                phone: data.phone,
                email: data.email,
                address: data.address,
                dob: data.dob,
                nationality: data.nationality,
                hire_date: data.hire_date,
                department: data.department,
            });

            // Show success message
            Swal.fire({
                icon: "success",
                title: "Success",
                text: response.data.message, // Use the success message from the response
                timer: 2000, // Auto close after 2 seconds
                showConfirmButton: false,
            });

            // Optionally, reset the form after successful submission
            setData({
                name: "",
                gender: "",
                marital_status: "",
                phone: "",
                email: "",
                address: "",
                dob: "",
                nationality: "",
                hire_date: "",
                department: "",
            });
        } catch (error) {
            // Handle errors from the server response
            const errorMessage =
                error.response?.data?.error ||
                "There was an error adding the employee.";

            // Show error message
            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMessage,
                timer: 3000, // Auto close after 3 seconds
                showConfirmButton: false,
            });
        }
    };

    return (
        <GuestLayout title="Add Employee">
            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Add New Employee</h1>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Form Fields */}
                    <div>
                        <label className="block font-medium">Employee Name:</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.name && (
                            <span className="text-red-500">{errors.name}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Gender:</label>
                        <select
                            value={data.gender}
                            onChange={(e) => setData("gender", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        >
                            <option value="">Please Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                            <span className="text-red-500">{errors.gender}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Marital Status:</label>
                        <select
                            value={data.marital_status}
                            onChange={(e) => setData("marital_status", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        >
                            <option value="">Please Select Marital Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </select>
                        {errors.marital_status && (
                            <span className="text-red-500">{errors.marital_status}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Phone No.:</label>
                        <input
                            type="text"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.phone && (
                            <span className="text-red-500">{errors.phone}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Email:</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.email && (
                            <span className="text-red-500">{errors.email}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Address:</label>
                        <textarea
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.address && (
                            <span className="text-red-500">{errors.address}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Date of Birth:</label>
                        <input
                            type="date"
                            value={data.dob}
                            onChange={(e) => setData("dob", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.dob && (
                            <span className="text-red-500">{errors.dob}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Nationality:</label>
                        <input
                            type="text"
                            value={data.nationality}
                            onChange={(e) => setData("nationality", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.nationality && (
                            <span className="text-red-500">{errors.nationality}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Hire Date:</label>
                        <input
                            type="date"
                            value={data.hire_date}
                            onChange={(e) => setData("hire_date", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.hire_date && (
                            <span className="text-red-500">{errors.hire_date}</span>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium">Department:</label>
                        <input
                            type="text"
                            value={data.department}
                            onChange={(e) => setData("department", e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
                            required // Add required attribute
                        />
                        {errors.department && (
                            <span className="text-red-500">{errors.department}</span>
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
                        <Link
                            href={route("employees.index")}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Save Employee
                        </button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default CreateEmployee;
