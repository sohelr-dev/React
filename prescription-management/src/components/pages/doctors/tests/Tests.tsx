import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../../../config";
import type { tests } from "../../../interfaces/test.interfaces";

function Tests() {
    const [tests, settests] = useState<tests[]>([]);
    useEffect(() => {
        document.title = "Tests List";
        getTest();
    }, []);

    const getTest = (() => {
        api.get("tests")
            .then((response) => {
                // console.log(response.data);
                settests(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Something Wrong !");
            })
    })

    // for delete 
    const [testId, setTestId] = useState<number>(0);
    const handleModal = (id: any) => {
        // alert(id + "hello bangladesh");
        setTestId(id);
    }

    //api delete call 
    const handleDelete = (deleteId: any) => {
        api.delete(`delete-test?id=${deleteId}`)
            .then((response) => {
                // console.log(JSON.stringify(response.data) + "id Number : "+deleteId);
                alert(JSON.stringify(response.data));
                getTest();
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
                            <Link to="/tests" className="text-primary text-decoration-none fw-semibold">
                                Tests
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                             Manage Test
                        </li>
                    </ol>
                </nav>
                <button className="btn btn-primary fw-semibold">
                    <i className="fa-solid fa-print me-1"></i>
                    Print
                </button>
            </div>

            <Link to="/tests/create-test" className="btn btn-primary mb-4">Create </Link>
            <div className="container my-4">
                <div className="card shadow-sm">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped border table-subtle align-middle">
                            <thead className="table-dark">
                                <tr className="text-center">
                                    <th scope="col" >#ID</th>
                                    <th scope="col" >Test Name</th>
                                    <th scope="col" >Test Description</th>
                                    <th scope="col" >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tests.map((item) => (
                                    <tr key={item.id} className="text-center">
                                        <td >{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td >
                                            <div className="d-flex justify-content-center gap-2">
                                                {/* <Link to={`/tests/details-user/${item.id}`} className="btn btn-outline-primary btn-sm">
                                                    <i className="fas fa-eye"></i>
                                                </Link> */}
                                                <Link to={`/tests/edit-test/${item.id}`} className="btn btn-primary btn-sm" >
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
                            <p>Are you Want to delete This Item {testId}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleDelete(testId)} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tests