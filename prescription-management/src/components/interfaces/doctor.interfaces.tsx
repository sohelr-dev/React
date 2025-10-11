export interface doctor {
    id: number,
    user_id: number,
    specialization: string,
    chamber_name: string,
    chamber_address: string,
    bmdc_reg_no: number,
    photo: null,
}

const doctorDefault: doctor = {
    id:0,
    user_id: 0,
    specialization: "",
    chamber_name: "",
    chamber_address: "",
    bmdc_reg_no: 0,
    photo: null,
};

export default doctorDefault;