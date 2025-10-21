import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { patient } from "../../../interfaces/patient.interfaces";
import patientDefault from "../../../interfaces/patient.interfaces";
import type { User } from "../../../interfaces/user.interface";
import api from "../../../../config";

function PatientCreate() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState<patient>(patientDefault);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    document.title = "Create patient";
  }, []);

  //get patient Type
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    api
      .get("users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .post("create-patient", patient)
      .then((response) => {
        // console.log(response);
        if (response.status === 200 || response.status === 201) {
          alert("Data Save SuccessFull . \n Id no. " + response.data);
          navigate("/patients");
        }
      })
      .catch((error) => {
        alert(
          "Something went wrong! " +
            (error.response?.data?.message || error.message || error)
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
              Create Patient
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
              <h5 className="card-header text-center fs-3">Create Patient</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                      onChange={(e) =>
                        setPatient({
                          ...patient,
                          user_id: parseInt(e.target.value),
                        })
                      }
                    >
                      <option value={patient.user_id}> Select One</option>

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
                      value={patient.age}
                      onChange={(e) =>
                        setPatient({
                          ...patient,
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
                          checked={patient.gender === "male"}
                          onChange={(e) =>
                            setPatient({ ...patient, gender: e.target.value })
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
                          checked={patient.gender === "female"}
                          onChange={(e) =>
                            setPatient({ ...patient, gender: e.target.value })
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
                          checked={patient.gender === "other"}
                          onChange={(e) =>
                            setPatient({ ...patient, gender: e.target.value })
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
                        value={patient.address}
                        onChange={(e) =>
                          setPatient({ ...patient, address: e.target.value })
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
                        value={patient.phone}
                        onChange={(e) =>
                          setPatient({
                            ...patient,
                            phone: parseInt(e.target.value),
                          })
                        }
                        required
                      />
                    </div>
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
  );
}

export default PatientCreate;
