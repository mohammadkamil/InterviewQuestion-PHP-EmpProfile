import React from "react";

const Modal = ({ isOpen, onClose, employee }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-lg transition-transform transform-gpu scale-95 hover:scale-100 duration-300">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Employee Details</h2>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Full Name:</span>
                        <span className="text-gray-800">{employee.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Gender:</span>
                        <span className="text-gray-800">{employee.gender}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Marital Status:</span>
                        <span className="text-gray-800">{employee.marital_status}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Phone:</span>
                        <span className="text-gray-800">{employee.phone}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Email:</span>
                        <span className="text-gray-800">{employee.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Address:</span>
                        <span className="text-gray-800">{employee.address}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Date of Birth:</span>
                        <span className="text-gray-800">{employee.dob}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Nationality:</span>
                        <span className="text-gray-800">{employee.nationality}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Hire Date:</span>
                        <span className="text-gray-800">{employee.hire_date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Department:</span>
                        <span className="text-gray-800">{employee.department}</span>
                    </div>
                </div>
                <button 
                    onClick={onClose} 
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
