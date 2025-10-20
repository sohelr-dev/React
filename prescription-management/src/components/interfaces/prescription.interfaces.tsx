export interface prescription {
  id?: number;
  dosage_id?: number;
  appointment_id?: number;
  doctor_id?: number;
  patient_id?: number;
  diagnosis?: string;
  notes?: string;
  advice?: string;
  tests?:string;
  follow_up_date?: string;
  created_at?: string;
  dosage_name?: string;
}
const prescriptionDefault: prescription = {
  id: 0,
  // dosage_id: 0,
  appointment_id: 0,
  doctor_id: 0,
  patient_id: 0,
  diagnosis: "",
  notes: "",
  advice: "",
  // tests: "",
  follow_up_date: "",
  // created_at: "",
  // dosage_name: "",
};

export default prescriptionDefault;
