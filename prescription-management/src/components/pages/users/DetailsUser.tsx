import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { baseUrl } from "../../../config";
import type { User } from "../../interfaces/user.interface";
import userDefault from "../../interfaces/user.interface";

function DetailsUser() {
  const [user, setUser] = useState<User>(userDefault);
  useEffect(() => {
    document.title = "Details User";
    getUserById();
  }, []);

  const queryId = useParams<string>();
  const paramId = queryId?.id;
  const getUserById = () => {
    api
      .get(`details-user?id=${paramId}`)
      .then((res) => {
        // console.log(res);
        let data = res.data;
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
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
                to="/users"
                className="text-primary text-decoration-none fw-semibold"
              >
                Users
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              User Details
            </li>
          </ol>
        </nav>
        <Link to="/users" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">User Profile</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3 text-center mb-4">
                <img
                  src={baseUrl + user.photo}
                  alt="Profile"
                  className="rounded-circle img-thumbnail"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-9 table-responsive">
                <table className="table table-bordered table-striped mb-0">
                  <tbody>
                    <tr>
                      <th style={{ width: "30%" }}>User ID</th>
                      <td>{user.id}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Role</th>
                      <td>{user.role_name}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <th>Join Date</th>
                      <td>{user.created_at}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsUser;
