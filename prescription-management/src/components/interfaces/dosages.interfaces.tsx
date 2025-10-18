export interface dosage {
  id?: number;
  description?: string;
  name?: string;
}

const dosageDefault: dosage = {
  id: 0,
  description: "",
  name: "",
};

export default dosageDefault;
