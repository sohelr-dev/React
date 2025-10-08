import type React from "react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import api from "../../../../config";
import type { role } from "../../../interfaces/role.interface";
import roleDefault from "../../../interfaces/role.interface";


function CreateRole() {
    const navigate =useNavigate();
    const[role,setRole]=useState<role>(roleDefault);
    useEffect (()=>{
        document.title ="Create Role";
    },[]);

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

        api.post('create-role',role)
        .then((response)=>{
            // console.log(response);
            if(response.status ===200 || response.status ===201){
                alert("Data Save SuccessFull . \n Id no. " + response.data);
                navigate("/roles");
            }
        })
        .catch((error)=>{
            alert("Something went wrong! " + (error.response?.data?.message || error.message || error));
        })
        
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4" style={{ border: '1px solid #dee2e6' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 fs-5">
                        <li className="breadcrumb-item">
                            <Link to="/roles" className="text-primary text-decoration-none fw-semibold">
                                Roles
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                            Create Role
                        </li>
                    </ol>
                </nav>
                <Link to="/roles" className="btn btn-primary fw-semibold">
                    ← Back
                </Link>
            </div>

            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card mt-3 shadow-sm">
                            <h5 className="card-header text-center fs-3">Create Role</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="role_name" className="form-label mb-4"> Name</label>
                                        <input type="text" id="role_name" name="role_name" className="form-control"  placeholder="Enter Role" 
                                        value={role.role_name} onChange={(e)=>setRole({...role,role_name:e.target.value})}
                                        required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 w-100">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateRole