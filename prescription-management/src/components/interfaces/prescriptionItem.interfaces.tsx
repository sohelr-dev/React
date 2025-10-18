export interface prescriptionItem {
    id?: number;
    prescription_id?: number;
    dosage_id?: number;
    duration_id?: number;
    medicine_id?: number;
    instruction_id?: number;
    dosage_name?: string;
    medicine_name?: string;
    duration_name?: string;
    instruction_name?: string;
}
const prescriptionItemDefault: prescriptionItem = {
    id: 0,
    prescription_id: 0,
    dosage_id: 0,
    duration_id: 0,
    instruction_id: 0,
    medicine_id: 0,
};
export default prescriptionItemDefault;