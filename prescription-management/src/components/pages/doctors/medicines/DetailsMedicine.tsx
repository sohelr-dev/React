import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { medicine } from "../../../interfaces/medicine.interface";
import medicineDefault from "../../../interfaces/medicine.interface";
import api from "../../../../config";

function DetailsMedicine() {
    const [medicine, setMedicine] = useState<medicine>(medicineDefault);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();
    const { id: paramId } = useParams<string>();

    const getMedicineById = () => {
        api.get(`details-medicine?id=${paramId}`)
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    setMedicine(res.data);
                } else {
                    alert("Data not found!");
                    navigate("/medicines");
                }
            })
            .catch((error) => {
                console.error("API Error:", error);
                alert("An error occurred while fetching the medicine data.");
                navigate("/medicines");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        document.title = "Details Medicine";
        getMedicineById();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4 border">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 fs-5">
                        <li className="breadcrumb-item">
                            <Link to="/medicines" className="text-primary text-decoration-none fw-semibold">
                                Medicines
                            </Link>
                        </li>
                        <li className="breadcrumb-item active text-secondary fw-bold" aria-current="page">
                            Medicine Details
                        </li>
                    </ol>
                </nav>
                <Link to="/medicines" className="btn btn-primary fw-semibold">
                    ← Back
                </Link>
            </div>

            <div className="container py-4">
                <div className="card shadow-sm">
                    <div className="card-header bg-dark text-white">
                        <h5 className="mb-0">Medicine Details</h5>
                    </div>
                    <div className="card-body">
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3 text-secondary">Loading medicine data...</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <th style={{ width: "30%" }}>Medicine ID</th>
                                            <td>{medicine.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{medicine.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Generic Name</th>
                                            <td>{medicine.generic_name}</td>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <td>{medicine.description}</td>
                                        </tr>
                                        <tr>
                                            <th>Medicine Type</th>
                                            <td>{medicine.type_name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsMedicine;