export interface User {
  id?: number,
  name: string,
  email: string,
  role?: string,
  role_id: number,
  phone?: string,
  photo?: string,
  file?: File | null,
  password?: string,
  role_name?: string,
}
const userDefault: User = { 
  id: 0,
  name: "",
  email: "",
  role: "",
  role_id: 0,
  photo: "",
  file: null,
  password: "", 
  phone:""
};

export default userDefault;