export interface patient {
  id?: number,
  user_id: number,
  age: number,
  gender?: string,
  address: string,
  name?: string,
  phone?: number,
  created_at?: number,
  email?: number,
  photo?: string,

}
const patientDefault: patient = { 
  id: 0,
  user_id: 0,
  age: 0,
  gender: '',
  address: '',
  phone: 0,
};

export default patientDefault;