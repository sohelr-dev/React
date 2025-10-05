import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { Roles } from "../../interfaces/role.interface";
import api from "../../../config";

function CreateUser() {
    const [roles,setRoles] = useState<Roles[]>([]);
    useEffect (()=>{
        document.title = "Create User";
        getRoles();
    },[]);

    const getRoles =(()=>{
        api.get("roles")
        .then((res)=>{
            // console.log(res);
            setRoles(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    });

    
    return (
        <>
            <h4 className="fw-bold py-3 mb-4"><Link to={'/users'} className="text-muted fw-light text-decoration-none">Users /</Link> Create User</h4>
            <div className="conatiner">
                <div className="card mt-3">
                    <h5 className="card-header text-center fs-3">Create User</h5>
                    <div className="card-body">
                        <form >
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select name="role" id="role" className="form-control">
                                    <option value={0} selected disabled className="text-center">-----Select One---- </option>
                                    {
                                        roles.map((item)=>
                                        <option value={item.id}>{item.role_name}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="number" name="phone" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Photo</label>
                                <input type="file" name="file" className="form-control" />
                            </div>
                            


                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateUser