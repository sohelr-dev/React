export interface appointment {
  id: number;
  doctor_id: number;
  patient_id: number;
  role_id: number;
  user_id?: number;
  appointment_date: string; // number -> string for datetime
  status: "pending" | "confirmed" | "completed" | "cancelled"|"offline";
  doctor_user_id?: number;
  patient_user_id?: number;
  age?: number;
  phone?: string; // phone usually string
  doctor_name?: string;
  name?: string;
  address?: string;
  specialization?: string;
  chamber_name?: string;
  gender:string;
  patient_name?:string;
}

const appointmentDefault: appointment = {
  id: 0,
  name: "",
  role_id: 3,
  phone: "",
  user_id: 0,
  age: 0,
  gender: "",
  address: "",
  doctor_id: 0,
  patient_id: 0,
  appointment_date: "", // default empty string
  status: "offline", // default value
};

export default appointmentDefault;
