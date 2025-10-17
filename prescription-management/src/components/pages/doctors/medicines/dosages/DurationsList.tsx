import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import api from "../../../../../config";
import type { duration } from "../../../../interfaces/duration.interfaces";

function DurationsList() {
    const [durations, setDurations] = useState<duration[]>([]);
    useEffect(() => {
        document.title = "durations List";
        getDurations();
    }, []);

    const getDurations = (() => {
        api.get("durations")
            .then((response) => {
                console.log(response.data);
                setDurations(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Something Wrong !");
            })
    })

    // for delete 
    const [durationId, setDurationId] = useState<number>(0);
    const handleModal = (id: any) => {
        // alert(id + "hello bangladesh");
        setDurationId(id);
    }

    //api delete call 
    const handleDelete = (deleteId: any) => {
        api.delete(`delete-duration?id=${deleteId}`)
            .then((response) => {
                // console.log(JSON.stringify(response.data) + "id Number : "+deleteId);
                alert(JSON.stringify(response.data));
                getDurations();
            })
            .catch((error) => {
                console.log(error);
                alert("Somethng Wrong !");
            })

    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4" style={{ border: '1px solid #dee2e6' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 fs-5">
                        <li className="breadcrumb-item">
                            <Link to="/durations" className="text-primary text-decoration-none fw-semibold">
                                durations
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                             Manage duration
                        </li>
                    </ol>
                </nav>
                <button className="btn btn-primary fw-semibold">
                    <i className="fa-solid fa-print me-1"></i>
                    Print
                </button>
            </div>

            <Link to="/durations/create-duration" className="btn btn-primary mb-4">Create </Link>
            <div className="container my-4">
                <div className="card shadow-sm">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped border table-subtle align-middle">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th scope="col" >#ID</th>
                                    <th scope="col" >duration </th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {durations.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td >
                                            <div className="d-flex justify-content-center gap-2">
                                                {/* <Link to={`/durations/details-user/${item.id}`} className="btn btn-outline-primary btn-sm">
                                                    <i className="fas fa-eye"></i>
                                                </Link> */}
                                                <Link to={`/durations/edit-duration/${item.id}`} className="btn btn-primary btn-sm" >
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleModal(item.id)} data-bs-toggle="modal" data-bs-target="#modalDelete">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="modal" id="modalDelete" tab-index="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-center fs-1">
                            <i className="fas fa-trash fs-3 text-danger"></i>

                        </div>
                        <div className="modal-body text-center">
                            <p>Are you Want to delete This Item {durationId}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleDelete(durationId)} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DurationsList