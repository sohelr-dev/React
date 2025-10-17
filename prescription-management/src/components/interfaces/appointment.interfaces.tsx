export interface appointment {
    id: number;
    doctor_id: number;
    patient_id: number;
    appointment_date: string; // number -> string for datetime
    status: "pending" | "confirmed" | "completed" | "cancelled";
    doctor_user_id?: number;
    patient_user_id?: number;
    age?: number;
    phone?: string; // phone usually string
    doctor_name?: string;
    patient_name?: string;
    specialization?: string;
    chamber_name?: string;
    gender?: string;
}

const appointmentDefault: appointment = {
    id: 0,
    doctor_id: 0,
    patient_id: 0,
    appointment_date: "", // default empty string
    status: "pending", // default value
};

export default appointmentDefault;
