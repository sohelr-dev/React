export interface tests {
  id?: number;
  description?: string;
  name?: string;
}

const testsDefault: tests = {
  id: 0,
  description: "",
  name: "",
};

export default testsDefault;
