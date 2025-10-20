import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../config";
import type { prescriptionHistory } from "../../interfaces/history.interfaces";


function PrescriptionsList() {
  const [prescriptionsList, setPrescriptionsList] = useState<prescriptionHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSerach] = useState("");

  const getPrescriptionsList = () => {
    setLoading(true);
    api
      .get("prescriptions")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setPrescriptionsList(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.title = "Prescription List";
    getPrescriptionsList();
  }, []);

  // Delete modal states
  const [prescriptionId, setPrescriptionId] = useState<number>(0);
  const handleModal = (id: number) => setPrescriptionId(id);

  // Delete API call
  const handleDelete = (deleteId: number) => {
    api
      .delete(`delete-prescription?id=${deleteId}`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert("Prescription deleted successfully!");
          getPrescriptionsList();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong while deleting!");
      });
  };

  //Search
  const handleSearch = () => {
    console.log(search);
    api
      .get(`prescriptions?search=${search}`)
      .then((res) => {
        // console.log(res);
        setPrescriptionsList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* ======= HEADER / BREADCRUMB ======= */}
      <div className="d-flex justify-content-between align-items-center bg-white shadow-sm rounded-3  mb-4 border">
        <div className="ms-1">
          <h2 className="fw-bold mb-1 text-primary">Prescriptions</h2>
          <p className="text-muted mb-0">
            Manage and review all  prescriptions.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary">
            <i className="fa-solid fa-print me-2"></i>Print
          </button>
          <Link
            to="/prescriptions/prescription-create"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-plus me-2"></i>New Prescription
          </Link>
        </div>
      </div>

      {/* ======= TABLE SECTION ======= */}
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold text-secondary mb-0">
                Prescription List
              </h5>
              <input
                type="text"
                className="form-control w-auto"
                placeholder="🔍 Search..."
                value={search}
                onChange={(e) => setSerach(e.target.value)}
                style={{ minWidth: "220px" }}
                onKeyUp={handleSearch}
              />
            </div>

            <div className="table-responsive">
              {loading ? (
                <div className="text-center py-5">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                  <p className="mt-3 text-muted">Loading prescriptions...</p>
                </div>
              ) : (
                <table className="table table-hover align-middle">
                  <thead className="table-primary">
                    <tr className="text-center">
                      <th>#ID</th>
                      <th>Patient Name</th>
                      <th>Patient Serial No.</th>
                      <th>Doctor Name</th>
                      <th>BMDC Reg. No.</th>
                      <th>Create Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prescriptionsList.length > 0 ? (
                      prescriptionsList.map((item) => (
                        <tr key={item.prescription_id} className="text-center">
                          <td className="fw-semibold text-secondary">
                            {item.prescription_id ?? "—"}
                          </td>
                          <td>{item.patient_name ?? "—"}</td>
                          <td>{item.serial_no ?? "—"}</td>
                          <td>{item.doctor_name ?? "—"}</td>
                          <td>{item.bmdc_reg_no ?? "—"}</td>
                          <td>{item.created_at ?? "—"}</td>
                          
                          {/* <td>
                            {item.prescription_date
                              ? new Date(
                                  item.prescription_date
                                ).toLocaleDateString()
                              : "—"}
                          </td> */}
                          <td>
                            <div className="d-flex justify-content-center gap-2">
                              <Link
                                to={`/prescriptions/prescription-details/${item.prescription_id}`}
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fas fa-eye"></i>
                              </Link>
                              <Link
                                to={`/prescriptions/edit-prescription/${item.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                <i className="fas fa-edit"></i>
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleModal(item.prescription_id ?? 0)}
                                data-bs-toggle="modal"
                                data-bs-target="#modalDelete"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="text-center py-4 text-muted">
                          No prescriptions found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ======= DELETE MODAL ======= */}
      <div className="modal fade" id="modalDelete" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                <i className="fa-solid fa-triangle-exclamation me-2"></i>
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body text-center py-4">
              <i className="fa-solid fa-trash fs-1 text-danger mb-3"></i>
              <p className="fs-5">
                Are you sure you want to delete prescription ID{" "}
                <strong>#{prescriptionId}</strong>?
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                type="button"
                className="btn btn-secondary px-4"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger px-4"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(prescriptionId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrescriptionsList;
