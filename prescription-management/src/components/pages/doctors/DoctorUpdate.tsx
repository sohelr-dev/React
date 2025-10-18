import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { doctor } from "../../interfaces/doctor.interfaces";
import doctorDefault from "../../interfaces/doctor.interfaces";
import type { User } from "../../interfaces/user.interface";
import api from "../../../config";

function DoctorUpdate() {
  const navigate = useNavigate();
  const queryId = useParams();
  const [doctorId, setDoctorId] = useState<doctor>(doctorDefault);
  const [users, setUsers] = useState<User[]>([]);
  const paramId = queryId?.id;
  // console.log(paramId)
  const getDoctorId = () => {
    api.get(`details-doctor?id=${paramId}`).then((res) => {
      console.log(res.data);
      // console.log(doctorId);
      if (res.status && res.data) {
        setDoctorId(res.data);
      } else {
        alert("doctor Are Not Found !");
        navigate("/doctors");
      }
    });
  };

  const getDoctors = () => {
    api
      .get("users")
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      });
  };
  useEffect(() => {
    document.title = "Update Doctor";
    getDoctors();
  }, []);
  useEffect(() => {
    getDoctorId();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-doctor", doctorId)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert(response.data || "doctor updated successfully!");
          navigate("/doctors");
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
                to="/doctors"
                className="text-primary text-decoration-none fw-semibold"
              >
                doctors
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update doctor
            </li>
          </ol>
        </nav>
        <Link to="/doctors" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card mt-3 shadow-sm">
              <h5 className="card-header text-center fs-3">Update doctor</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={doctorId.id}
                    onChange={(e) =>
                      setDoctorId({ ...doctorId, id: parseInt(e.target.value) })
                    }
                  />
                  <div className="mb-3">
                    <label htmlFor="user_id" className="form-label mb-4">
                      {" "}
                      Name
                    </label>
                    <select
                      defaultValue={"Select One"}
                      name="user_id"
                      id="user_id"
                      className="form-select"
                      value={doctorId.user_id || ""}
                      onChange={(e) =>
                        setDoctorId({
                          ...doctorId,
                          user_id: parseInt(e.target.value),
                        })
                      }
                    >
                      {users.map((item) => (
                        <option value={item.id} key={item.id}>
                          {" "}
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="specialization" className="form-label mb-4">
                      {" "}
                      Specialist
                    </label>
                    <input
                      type="text"
                      id="generic_name"
                      name="generic_name"
                      className="form-control"
                      placeholder="Enter specialization"
                      value={doctorId.specialization}
                      onChange={(e) =>
                        setDoctorId({
                          ...doctorId,
                          specialization: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bmdc_reg_no" className="form-label mb-4">
                      {" "}
                      BMDC Reg. No
                    </label>
                    <input
                      type="text"
                      id="bmdc_reg_no"
                      name="bmdc_reg_no"
                      className="form-control"
                      placeholder="Enter BMDC reg. no"
                      value={doctorId.bmdc_reg_no}
                      onChange={(e) =>
                        setDoctorId({
                          ...doctorId,
                          bmdc_reg_no: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="chamber_name" className="form-label mb-4">
                      {" "}
                      Chamber Name
                    </label>
                    <input
                      type="text"
                      id="chamber_name"
                      name="chamber_name"
                      className="form-control"
                      placeholder="Enter Chamber Name"
                      value={doctorId.chamber_name}
                      onChange={(e) =>
                        setDoctorId({
                          ...doctorId,
                          chamber_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="chamber_address"
                      className="form-label mb-4"
                    >
                      {" "}
                      Chamber Address
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      name="chamber_address"
                      id="chamber_address"
                      value={doctorId.chamber_address}
                      onChange={(e) =>
                        setDoctorId({
                          ...doctorId,
                          chamber_address: e.target.value,
                        })
                      }
                      required
                    ></textarea>
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

export default DoctorUpdate;
