export interface medicine {
  id: number;
  name: string;
  generic_name: string;
  description: string;
  medicine_type_id: number;
  type_name?: number;
}
const medicineDefault: medicine = {
  id: 0,
  medicine_type_id: 0,
  name: "",
  generic_name: "",
  description: "",
};

export default medicineDefault;
