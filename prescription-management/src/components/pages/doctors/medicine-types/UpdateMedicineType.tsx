import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { medicineTypes } from "../../../interfaces/medicineTypes.interface";
import medicineTypesDefault from "../../../interfaces/medicineTypes.interface";
import api from "../../../../config";

function UpdateMedicineType() {
  const navigate = useNavigate();
  const [medicineTypeId, setMedicineTypeId] =
    useState<medicineTypes>(medicineTypesDefault);
  useEffect(() => {
    document.title = "Update Medicine Type";
    getMedicineTypeID();
  }, []);
  const queryId = useParams();
  const paramId = queryId?.id;
  // console.log(paramId)
  const getMedicineTypeID = () => {
    api.get(`details-medicine-type?id=${paramId}`).then((res) => {
      // console.log(res.data);
      setMedicineTypeId(res.data);
      // console.log(medicineTypeId);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-medicine-type", medicineTypeId)
      .then((response) => {
        alert(response.data);
        navigate("/medicine-types");
      })
      .catch((error) => {
        alert("Something Went Wrong" + error);
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center bg-light p-3 rounded-3 mb-4"
        style={{ border: "1px solid #dee2e6" }}
      >
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 fs-5">
            <li className="breadcrumb-item">
              <Link
                to="/medicine-types"
                className="text-primary text-decoration-none fw-semibold"
              >
                Medicine Type
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update Medicine Type
            </li>
          </ol>
        </nav>
        <Link to="/medicine-types" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card mt-3 shadow-sm">
              <h5 className="card-header text-center fs-3">
                Update Medicine Type
              </h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="hidden"
                      name="id"
                      id="id"
                      value={medicineTypeId.id}
                      onChange={(e) =>
                        setMedicineTypeId({
                          ...medicineTypeId,
                          id: parseInt(e.target.value),
                        })
                      }
                    />
                    <label htmlFor="type_name" className="form-label mb-4">
                      Medicine Type Name
                    </label>
                    <input
                      type="text"
                      id="type_name"
                      name="type_name"
                      className="form-control"
                      placeholder="Enter medicine type"
                      value={medicineTypeId.type_name}
                      onChange={(e) =>
                        setMedicineTypeId({
                          ...medicineTypeId,
                          type_name: e.target.value,
                        })
                      }
                      required
                    />
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
  );
}

export default UpdateMedicineType;
