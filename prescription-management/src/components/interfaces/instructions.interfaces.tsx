export interface instruction {
    id?: number;
    text?: string;
    description?: string;
}
const instructionDefault: instruction = {
    id: 0,
    text: "",
    description: "",
};
export default instructionDefault;