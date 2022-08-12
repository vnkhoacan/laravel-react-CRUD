<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Resources\EmployeeCollection;
use App\Http\Traits\ApiResponses;
use App\Models\Employee;

class EmployeeController extends Controller
{
    use ApiResponses;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = Employee::all();

        return $this->successResponse([
            'data'  =>  $employees
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {
        $employee = new Employee;
        $employee->name    = $request->name;
        $employee->age     = $request->get('age');
        $employee->address = $request->get('address');
        $employee->save();

        return $this->successResponse([], 'Employee created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::findOrFail($id);

        return $this->successResponse($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreEmployeeRequest $request, $id)
    {
        $employee = Employee::findOrFail($id);
        $employee->name    = $request->name;
        $employee->age     = $request->get('age');
        $employee->address = $request->get('address');
        $employee->save();

        return $this->successResponse([], 'Employee saved');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::findOrFail($id);
        $employee->delete();

        return $this->successResponse([], 'Employee deleted');
    }
}
