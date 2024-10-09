<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Employee extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $file = storage_path('app/employees.json');
        $employees = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        return response()->json($employees);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|in:Male,Female',
            'marital_status' => 'required|in:Single,Married',
            'phone' => 'required|digits_between:10,15',
            'email' => 'required|email',
            'address' => 'required|string|max:500',
            'dob' => 'required|date|before:today',
            'nationality' => 'required|string|max:100',
            'hire_date' => 'required|date',
            'department' => 'required|string|max:255',
        ]);
    
        $employeeData = $request->only([
            'name',
            'gender',
            'marital_status',
            'phone',
            'email',
            'address',
            'dob',
            'nationality',
            'hire_date',
            'department',
        ]);
    
        $file = storage_path('app/employees.json');
    
        if (file_exists($file)) {
            $existingData = json_decode(file_get_contents($file), true);
        } else {
            $existingData = [];
        }
    
        foreach ($existingData as $employee) {
            if ($employee['email'] === $employeeData['email']) {
                return response()->json(['error' => 'Email already exists.'], 400);
            }
        }
    
        $existingData[] = $employeeData;
        
        file_put_contents($file, json_encode($existingData));
    
        return response()->json(['message' => 'Employee added successfully']);
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
