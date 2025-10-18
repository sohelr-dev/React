export interface prescription {
    id?: number;
    dosage_id?: number;
    dosage_name?: string;

}
const prescriptionDefault: prescription = {
    id: 0,
    dosage_id: 0,
    
};

export default prescriptionDefault;