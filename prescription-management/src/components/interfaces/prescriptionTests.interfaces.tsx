export interface prescriptionTest {
 id?: number;
 prescription_id?: number;
 test_id?: number;
 test_name?: string;
}
const prescriptionTestDefault: prescriptionTest = {
 id: 0,
 prescription_id: 0,
 test_id: 0,
};
export default prescriptionTestDefault;