import React, { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout"; // Import the layout
import { Link } from "@inertiajs/react"; // To create a link for the new employee button
import EmployeeModal from "@/Components/EmployeeModal"; // Import the Modal component

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]); // All employees fetched from the API
    const [displayedEmployees, setDisplayedEmployees] = useState([]); // Employees to display
    const [itemsToShow, setItemsToShow] = useState(5); // Number of items to show initially
    const [viewType, setViewType] = useState("card"); // State to track the view type
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Employee to display in the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

    useEffect(() => {
        fetch("/api/employees/list")
            .then((res) => res.json())
            .then((data) => {
                setEmployees(data); // Set the full list of employees
                setDisplayedEmployees(data.slice(0, itemsToShow)); // Display only the first 5 employees
            })
            .catch((error) =>
                console.error("Error fetching employees:", error)
            ); // Handle potential errors
    }, []);

    // Function to load more employees
    const loadMore = () => {
        setItemsToShow((prev) => prev + 5); // Show 5 more employees
        setDisplayedEmployees(employees.slice(0, itemsToShow + 5)); // Update displayed employees
    };

    // Function to open the modal
    const openModal = (employee) => {
        setSelectedEmployee(employee); // Set the selected employee
        setIsModalOpen(true); // Open the modal
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedEmployee(null); // Clear the selected employee
    };

    return (
        <GuestLayout title="List Employee">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Employee Profiles</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={() =>
                            setViewType(viewType === "card" ? "table" : "card")
                        }
                        className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
                    >
                        Switch to{" "}
                        {viewType === "card" ? "Table View" : "Card View"}
                    </button>
                    <Link
                        href={route("employees.create")}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        New Employee
                    </Link>
                </div>
            </div>

            {/* Toggle View Button */}
            <div className="mb-4"></div>

            {displayedEmployees.length ? (
                viewType === "card" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {displayedEmployees.map((employee, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow-lg rounded-lg border transition-transform transform hover:scale-105 hover:shadow-2xl"
                                onClick={() => openModal(employee)} // Open modal on click
                            >
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {employee.name}
                                    </h3>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Email
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                {employee.email}
                                            </dd>
                                        </div>
                                        {/* Other employee details */}
                                    </dl>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Full Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Gender
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Marital Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Phone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                {/* Add more headers as needed */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {displayedEmployees.map((employee, index) => (
                                <tr
                                    key={index}
                                    onClick={() => openModal(employee)}
                                >
                                    {" "}
                                    {/* Open modal on click */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {employee.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {employee.gender}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {employee.marital_status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {employee.phone}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {employee.email}
                                    </td>
                                    {/* Add more details as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            ) : (
                <p>No employees found.</p>
            )}

            {/* Load More Button */}
            {employees.length > displayedEmployees.length && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={loadMore}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* Modal for Employee Details */}
            <EmployeeModal
                isOpen={isModalOpen}
                onClose={closeModal}
                employee={selectedEmployee}
            />
        </GuestLayout>
    );
};

export default EmployeeList;
