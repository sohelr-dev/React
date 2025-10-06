import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import type { Roles } from "../../interfaces/role.interface";
import api from "../../../config";
import type { User } from "../../interfaces/user.interface";
import userDefault from "../../interfaces/user.interface";

function UpdateUser() {

    const navigate =useNavigate();
    const [roles, setRoles] = useState<Roles[]>([]);
    const [user,setUser] =useState<User>(userDefault);
    useEffect(() => {
        document.title = "Update User";
        getRoles();
    }, []);
    
    const queryId = useParams<string>();
    const paramId = queryId ?.id;
    useEffect(()=>{
        api.get(`details-user?id=${paramId}`)
        .then ((res)=>{
            console.log(res);
            let data = res.data;
            setUser(data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[paramId])

    //api call to get roles data

    const getRoles = (() => {
        api.get("roles")
            .then((res) => {
                // console.log(res);
                setRoles(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Something wrong !");
            });
    });

    //api call post method

    const handleSubmit=((e:React.FormEvent)=>{
        e.preventDefault();
        // console.log(user);
        const formdata = new FormData();
        formdata.append("id",user.id?.toString() ?? "");
        formdata.append("old_photo",user.photo);
        formdata.append("name",user.name);
        formdata.append("email",user.email);
        formdata.append("role_id",user.role_id.toString());
        formdata.append("phone",user.phone??"");
        if(user.file)formdata.append('photo',user.file);

        api.post('edit-user',formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((response)=>{
            console.log(response.data);
            // if(response.status === 200 || response.status===201){
            //     setUser(userDefault);
            //     navigate('/users');
            // }
        })
        .catch((error)=>{
            console.log(error);
            alert("Something Wrong !");
        })
        
    })


    return (
        <>
            <h4 className="fw-bold py-3 mb-4"><Link to={'/users'} className="text-muted fw-light text-decoration-none">Users /</Link> Update User</h4>
            <div className="conatiner">
                <div className="card mt-3">
                    <h5 className="card-header text-center fs-3">Update User</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                                <input  type="text" name="id" id="id" className="form-control" value={user.id} onChange={(e)=>setUser({...user,id: parseInt(e.target.value)})}/>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" id="name" className="form-control" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" className="form-control" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Role</label>
                                <select name="role_id" id="role" className="form-control" value={user.role_id} onChange={(e) => setUser({...user,role_id:parseInt(e.target.value)})}>
                                    <option value="" className="text-center" disabled hidden>-----Select One-----</option>
                                    { roles.map((item) => (
                                            <option value={item.id} key={item.id}>{item.role_name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" id="phone" name="phone" className="form-control" value={user.phone??""} onChange={(e)=>setUser({...user, phone:e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label">Photo</label>
                                <input type="file" id="photo" name="file" className="form-control"
                                onChange={(e)=>{
                                    if(e.target.files){
                                        setUser({...user, file:e.target.files[0]} )
                                    }
                                }} />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdateUser