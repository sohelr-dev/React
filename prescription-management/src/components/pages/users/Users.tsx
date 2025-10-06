import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { User } from "../../interfaces/user.interface";
import api, { baseUrl } from "../../../config";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    document.title = "Users List";
    getUsers();
  }, []);

  const getUsers = (() => {
    api.get("users")
      .then((response) => {
        // console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      })
  })

// for delete 
const [userId,setUserId]=useState<number>(0);
  const handleModal=(id:any)=>{
    // alert(id + "hello bangladesh");
    setUserId(id);
  }

  //api delete call 
  const handleDelete=(deleteId:any)=>{
    api.delete(`delete-user?id=${deleteId}`)
    .then((response)=>{
      // console.log(JSON.stringify(response.data) + "id Number : "+deleteId);
      alert(JSON.stringify(response.data));
      getUsers();
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return (
    <>
      <h4 className="fw-bold py-3 mb-4"><Link to={'/users'} className="text-muted fw-light text-decoration-none">Users /</Link> Manage</h4>
      <Link to="/create-user" className="btn btn-primary mb-4">Create </Link>
      <div className="containe">
        <div className="card">
          <div className="table-responsive">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>#ID</th>
                  <th> Name  </th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Phone No.</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  users.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}
                          <span className="ms-2 d-inline-block">
                            <img src={baseUrl + item.photo} alt="image" className="rounded-circle"
                              style={{ width: "40px", height: "40px", objectFit: "cover" }} />
                          </span>
                        </td>
                        <td>{item.email}</td>
                        <td>{item.role_name}</td>
                        <td>{item.phone}</td>
                        <th>
                          <div className="d-flex gap-2">
                            <Link to={`/users/${item.id}`} type="button" className="btn btn-icon btn-outline-primary">
                              <i className="fas fa-eye"></i>
                            </Link>
                            <Link to={`/user/edit/${item.id}`} type="button" className="btn btn-icon btn-primary">

                              <i className="fas fa-edit"></i>
                            </Link>
                            <button type="button" className="btn btn-icon btn-danger" 
                            onClick={()=>handleModal(item.id)} data-bs-toggle="modal" data-bs-target="#modalDelete"
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </th>
                      </tr>
                    )
                  })
                }

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
              <p>Are you Want to delete This Item {userId}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleDelete(userId)} >Delete</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Users