<?php

use App\Http\Controllers\API\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/employee', [Employee::class, 'store'])->name('employee.store');
Route::get('/employees/list', [Employee::class, 'index'])->name('api.employee.list');
