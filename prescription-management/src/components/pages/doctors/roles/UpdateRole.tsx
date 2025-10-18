import type React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../../config";
import type { role } from "../../../interfaces/role.interface";
import roleDefault from "../../../interfaces/role.interface";

function UpdateRole() {
  const navigate = useNavigate();
  const [roleId, setRoleId] = useState<role>(roleDefault);
  useEffect(() => {
    document.title = "Update Role";
    getRoleId();
  }, []);
  const queryId = useParams();
  const paramId = queryId?.id;
  // console.log(paramId)
  const getRoleId = () => {
    api.get(`details-role?id=${paramId}`).then((res) => {
      // console.log(res.data);
      setRoleId(res.data);
      // console.log(roleId);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("edit-role", roleId)
      .then((response) => {
        alert(response.data);
        navigate("/roles");
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
                to="/roles"
                className="text-primary text-decoration-none fw-semibold"
              >
                Roles
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-secondary fw-bold"
              aria-current="page"
            >
              Update Role
            </li>
          </ol>
        </nav>
        <Link to="/roles" className="btn btn-primary fw-semibold">
          ← Back
        </Link>
      </div>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card mt-3 shadow-sm">
              <h5 className="card-header text-center fs-3">Update role</h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value={roleId.id}
                    onChange={(e) =>
                      setRoleId({ ...roleId, id: parseInt(e.target.value) })
                    }
                  />
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label mb-4">
                      {" "}
                      Role{" "}
                    </label>
                    <input
                      type="text"
                      id="role_name"
                      name="role_name"
                      className="form-control"
                      placeholder="Enter role Name"
                      value={roleId.role_name}
                      onChange={(e) =>
                        setRoleId({ ...roleId, role_name: e.target.value })
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

export default UpdateRole;
