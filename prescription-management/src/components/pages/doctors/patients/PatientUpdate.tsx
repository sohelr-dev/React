import type React from "react";
import { useEffect , useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type{ patient } from "../../../interfaces/patient.interfaces";
import patientDefault from "../../../interfaces/patient.interfaces";
import type { User } from "../../../interfaces/user.interface";
import api from "../../../../config" ;

function PatientUpdate() {
  const navigate = useNavigate();
  const queryId = useParams();
  const [patientId, setPatientId] = useState<patient>(patientDefault);
  const [users, setUsers] = useState<User[]>([]);
  const paramId = queryId?.id;
  // console.log(paramId)
  const getPatientId = () => {
    api.get(`details-patient?id=${paramId}`).then((res) => {
      // console.log(patientId);
      if (res.status && res.data) {
        setPatientId(res.data);
        console.log(res.data);
      } else {
        alert("patient Are Not Found !");
        navigate("/patients");
      }
    });
  };

  const getUsers = () => {
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
    document.title = "Update Patient";
    getUsers();
  }, []);
  useEffect(() => {
    getPatientId();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-patient", patientId)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          alert(response.data || "patient updated successfully!");
          navigate("/patients");
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
                to="/patients"
                className="text-primary text-decoration-none fw-semibold"
              >
                Patients
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update Patient
            </li>
          </ol>
        </nav>
        <Link to="/patients" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card mt-3 shadow-sm">
              <h5 className="card-header text-center fs-3">Update Patient</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={patientId.id}
                    onChange={(e) =>
                      setPatientId({
                        ...patientId,
                        id: parseInt(e.target.value),
                      })
                    }
                  />
                  <div className="mb-3">
                    <label htmlFor="user_id" className="form-label mb-4">
                      {" "}
                      Patient Name
                    </label>
                    <select
                      defaultValue={"Select One"}
                      name="user_id"
                      id="user_id"
                      className="form-select"
                      value={patientId.user_id || ""}
                      onChange={(e) =>
                        setPatientId({
                          ...patientId,
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
                    <label htmlFor="age" className="form-label mb-4">
                      {" "}
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      className="form-control"
                      placeholder="Enter age"
                      value={patientId.age}
                      onChange={(e) =>
                        setPatientId({
                          ...patientId,
                          age: parseInt(e.target.value),
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label mb-4">Gender</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="genderMale"
                          value="male"
                          checked={patientId.gender === "male"}
                          onChange={(e) =>
                            setPatientId({
                              ...patientId,
                              gender: e.target.value,
                            })
                          }
                          required
                        />
                        <label
                          className="form-check-label"
                          htmlFor="genderMale"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="genderFemale"
                          value="female"
                          checked={patientId.gender === "female"}
                          onChange={(e) =>
                            setPatientId({
                              ...patientId,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="genderFemale"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="genderOther"
                          value="other"
                          checked={patientId.gender === "other"}
                          onChange={(e) =>
                            setPatientId({
                              ...patientId,
                              gender: e.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="genderOther"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label mb-4">
                      {" "}
                      Address
                    </label>
                    <textarea
                      name="address"
                      id="address"
                      className="form-control"
                      rows={3}
                      value={patientId.address}
                      onChange={(e) =>
                        setPatientId({ ...patientId, address: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label mb-4">
                      {" "}
                      Phone
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone"
                      value={patientId.phone}
                      onChange={(e) =>
                        setPatientId({
                          ...patientId,
                          phone: parseInt(e.target.value),
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

export default PatientUpdate;
