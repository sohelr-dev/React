import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../../config";
import type { tests } from "../../../interfaces/test.interfaces";
import testsDefault from "../../../interfaces/test.interfaces";

function UpdateTest() {
    const navigate =useNavigate();
    const [testId,setTestId] =useState<tests>(testsDefault);
    useEffect(()=>{
        document.title ="Update Test";
        getTestId();
    },[]);
    const queryId =useParams();
    const paramId = queryId ?.id;
    // console.log(paramId)
    const getTestId=(()=>{
        api.get(`details-test?id=${paramId}`)
        .then((res)=>{
            // console.log(res.data);
            setTestId(res.data);
            // console.log(testId);
        })
    })

    const handleSubmit=((e:React.FormEvent)=>{
        e.preventDefault();

        api.put("edit-test",testId)
        .then((response)=>{
            alert(response.data);
            navigate("/tests");
        })
        .catch((error)=>{
            alert("Something Went Wrong" + error)
        })



    })
    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4" style={{ border: '1px solid #dee2e6' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 fs-5">
                        <li className="breadcrumb-item">
                            <Link to="/tests" className="text-primary text-decoration-none fw-semibold">
                                Tests
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                            Update Test
                        </li>
                    </ol>
                </nav>
                <Link to="/tests" className="btn btn-primary fw-semibold">
                    ← Back
                </Link>
            </div>

            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card mt-3 shadow-sm">
                            <h5 className="card-header text-center fs-3">Update Test</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                        <input type="text" name="id" id="id" value={testId.id} onChange={(e) => setTestId({ ...testId, id: parseInt(e.target.value) })}/>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label mb-4">Test Name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Enter Test Name"
                                            value={testId.name} onChange={(e) => setTestId({ ...testId, name: e.target.value })}
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label mb-4">Test Description</label>
                                        <input type="text" id="description" name="description" className="form-control" placeholder="Enter Test description"
                                            value={testId.description} onChange={(e) => setTestId({ ...testId, description: e.target.value })}
                                            required />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 w-100">
                                        Update
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

export default UpdateTest