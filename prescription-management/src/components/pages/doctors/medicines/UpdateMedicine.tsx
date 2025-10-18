import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../../config";

import type { medicine } from "../../../interfaces/medicine.interface";
import medicineDefault from "../../../interfaces/medicine.interface";
import type { medicineTypes } from "../../../interfaces/medicineTypes.interface";

function UpdateMedicine() {
  const navigate = useNavigate();
  const queryId = useParams();
  const [medicineId, setMedicineId] = useState<medicine>(medicineDefault);
  const [medicineTypes, setmedicineTypes] = useState<medicineTypes[]>([]);
  const paramId = queryId?.id;
  // console.log(paramId)
  const getMedicineId = () => {
    api.get(`details-medicine?id=${paramId}`).then((res) => {
      // console.log(res.data);
      // console.log(medicineId);
      if (res.status && res.data) {
        setMedicineId(res.data);
      } else {
        alert("Medicine Are Not Found !");
        navigate("/medicines");
      }
    });
  };

  const getMedicineType = () => {
    api
      .get("medicine-types")
      .then((response) => {
        // console.log(response.data);
        setmedicineTypes(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      });
  };
  useEffect(() => {
    document.title = "Update Medicine";
    getMedicineType();
  }, []);
  useEffect(() => {
    getMedicineId();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-medicine", medicineId)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert(response.data || "Medicine updated successfully!");
          navigate("/medicines");
        } else {
          alert("Update failed. Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Something went wrong! " + (error?.response?.data?.message || "")
        );
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
                to="/medicines"
                className="text-primary text-decoration-none fw-semibold"
              >
                medicines
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update Medicine
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
              <h5 className="card-header text-center fs-3">Update medicine</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={medicineId.id}
                    onChange={(e) =>
                      setMedicineId({
                        ...medicineId,
                        id: parseInt(e.target.value),
                      })
                    }
                  />
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-4">
                      Medicine Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter medicine Name"
                      value={medicineId.name}
                      onChange={(e) =>
                        setMedicineId({ ...medicineId, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="generic_name" className="form-label mb-4">
                      {" "}
                      Generic Name
                    </label>
                    <input
                      type="text"
                      id="generic_name"
                      name="generic_name"
                      className="form-control"
                      placeholder="Enter medicine"
                      value={medicineId.generic_name}
                      onChange={(e) =>
                        setMedicineId({
                          ...medicineId,
                          generic_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label mb-4">
                      {" "}
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Enter medicine"
                      value={medicineId.description}
                      onChange={(e) =>
                        setMedicineId({
                          ...medicineId,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="medicine_type_id"
                      className="form-label mb-4"
                    >
                      {" "}
                      Medicine Type
                    </label>
                    <select
                      name="medicine_type_id"
                      id="medicine_type_id"
                      className="form-select"
                      value={medicineId.medicine_type_id || 0} // Controlled
                      onChange={(e) =>
                        setMedicineId({
                          ...medicineId,
                          medicine_type_id: Number(e.target.value),
                        })
                      }
                      required
                    >
                      <option value={0}>Select One</option>
                      {medicineTypes.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.type_name}
                        </option>
                      ))}
                    </select>
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

export default UpdateMedicine;
