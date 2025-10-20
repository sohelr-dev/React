export interface prescriptionHistory {
  id: number;
  patient_name: string;
  serial_no: string;
  doctor_name: string;
  bmdc_reg_no: string;
  created_at: string;
  prescription_id?: number;
}
// const prescriptionHistoryDefault: prescriptionHistory = {
//   id: 0,
//   patient_name: "",
//   serial_no: "",
//   doctor_name: "",
//   bmdc_reg_no: "",
//   created_at: "",
// };