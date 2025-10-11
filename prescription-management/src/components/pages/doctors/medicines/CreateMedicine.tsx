import type React from "react"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import api from "../../../../config";
import type { medicine } from "../../../interfaces/medicine.interface";
import medicineDefault from "../../../interfaces/medicine.interface";
import type { medicineTypes } from "../../../interfaces/medicineTypes.interface";



function CreateMedicine() {
    const navigate =useNavigate();
    const[medicine,setMedicine]=useState<medicine>(medicineDefault);
    const [medicineTypes, setmedicineTypes] = useState<medicineTypes[]>([]);
    useEffect (()=>{
        document.title ="Create Medicine";
    },[]);

    //get medicine Type 
    useEffect(() => {
        getMedicineType();
    }, []);

    const getMedicineType = (() => {
        api.get("medicine-types")
            .then((response) => {
                // console.log(response.data);
                setmedicineTypes(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Something Wrong !");
            })
    });

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

        api.post('create-medicine',medicine)
        .then((response)=>{
            // console.log(response);
            if(response.status ===200 || response.status ===201){
                alert("Data Save SuccessFull . \n Id no. " + response.data);
                navigate("/medicines");
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
                            <Link to="/medicines" className="text-primary text-decoration-none fw-semibold">
                                Medicines
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                            Create Medicine
                        </li>
                    </ol>
                </nav>
                <Link to="/medicines" className="btn btn-primary fw-semibold">
                    ← Back
                </Link>
            </div>

            <div className="container my-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card mt-3 shadow-sm">
                            <h5 className="card-header text-center fs-3">Create medicine</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label mb-4"> Name</label>
                                        <input type="text" id="name" name="name" className="form-control"  placeholder="Enter medicine" 
                                        value={medicine.name} onChange={(e)=>setMedicine({...medicine,name:e.target.value})}
                                        required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="generic_name" className="form-label mb-4"> Generic Name</label>
                                        <input type="text" id="generic_name" name="generic_name" className="form-control"  placeholder="Enter medicine" 
                                        value={medicine.generic_name} onChange={(e)=>setMedicine({...medicine,generic_name:e.target.value})}
                                        required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label mb-4"> Description</label>
                                        <input type="text" id="description" name="description" className="form-control"  placeholder="Enter medicine" 
                                        value={medicine.description} onChange={(e)=>setMedicine({...medicine,description:e.target.value})}
                                        required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="medicine_type_id" className="form-label mb-4"> Medicine Type</label>
                                        <select defaultValue={"Select One"} name="medicine_type_id" id="medicine_type_id" className="form-control"  value={medicine.medicine_type_id} onChange={(e)=>setMedicine({...medicine,medicine_type_id:parseInt(e.target.value)})}>
                                            
                                            {
                                                medicineTypes.map((item)=>
                                                    <option value={item.id} key={item.id}> {item.type_name}</option>
                                                    
                                                )
                                            }
                                        </select>
                                        {/* <input type="number" id="medicine_type_id" name="medicine_type_id" className="form-control"  placeholder="Enter medicine" 
                                        value={medicine.medicine_type_id} onChange={(e)=>setMedicine({...medicine,medicine_type_id:parseInt(e.target.value)})}
                                        required/> */}
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

export default CreateMedicine