import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import type { doctor } from "../../interfaces/doctor.interfaces";
import api, { baseUrl } from "../../../config";

function DoctorsManage() {
    const [doctors, setDoctors] = useState<doctor[]>([]);
    const getDoctor = () => {
        api.get("doctors")
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    setDoctors(response.data);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Something Wrong !");
            })
    };

    useEffect(() => {
        document.title = "Doctor List";
        getDoctor();
    }, []);

    // for delete 
    const [doctorId, setDoctorId] = useState<number>(0);
    const handleModal = (id: any) => {
        // alert(id + "hello bangladesh");
        setDoctorId(id);
    }

    //api delete call 
    const handleDelete = (deleteId: any) => {
        api.delete(`delete-doctor?id=${deleteId}`)
            .then((response) => {
                // console.log(JSON.stringify(response.data) + "id Number : "+deleteId);
                if (response.status === 200 || response.status === 201) {
                    alert(JSON.stringify(response.data));
                    getDoctor();

                }
            })
            .catch((error) => {
                console.log(error);
                alert("Somethng Wrong !");
            })

    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4" style={{ border: '1px solid #dee2e6' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 fs-5">
                        <li className="breadcrumb-item">
                            <Link to="/doctors" className="text-primary text-decoration-none fw-semibold">
                                Doctor
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                            Manage Doctor
                        </li>
                    </ol>
                </nav>
                <button className="btn btn-primary fw-semibold">
                    <i className="fa-solid fa-print me-1"></i>
                    Print
                </button>
            </div>

            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="text-primary fw-bold">👨‍⚕️ Doctor Management</h3>
                    <Link to="/doctors/create-doctor" className="btn btn-primary" >
                        + Add Doctor
                    </Link>
                </div>
                <div className="row g-4">
                    {doctors.map((item) => (
                        <div key={item.id} className="col-md-4 col-lg-3 col-sm-6">
                            <div className="card card-hover shadow-sm border-0 rounded-3">
                                <img
                                    src={baseUrl+item.photo || "/default-doctor.jpg"}
                                    alt="Doctor"
                                    className="card-img-top"
                                    style={{ height: "220px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="text-primary">{item.name}</h5>
                                    <p className="text-success">{item.specialization}</p>
                                    <p className="small text-muted mb-2">
                                        <strong>Chamber:</strong> {item.chamber_name}
                                        <br />
                                        {item.chamber_address}
                                    </p>
                                    <p className="small mb-2">
                                        <strong>BMDC:</strong> {item.bmdc_reg_no}
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/doctors/edit-doctor/${item.id}`} className="btn btn-primary btn-sm" >
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleModal(item.id)} data-bs-toggle="modal" data-bs-target="#modalDelete">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="modal" id="modalDelete" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-center fs-1">
                            <i className="fas fa-trash fs-3 text-danger"></i>

                        </div>
                        <div className="modal-body text-center">
                            <p>Are you Want to delete This Item {doctorId}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleDelete(doctorId)} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DoctorsManage