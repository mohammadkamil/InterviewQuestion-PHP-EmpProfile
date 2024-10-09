<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Redirect root to employee list
Route::get('/', function () {
    return redirect('/employees/list');
});

// Employee routes
Route::get('/employees/add', [EmployeeController::class, 'create'])->name('employees.create');
Route::get('/employees/list', [EmployeeController::class, 'index'])->name('employees.index');

// Uncommented routes for profile and auth management
// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
