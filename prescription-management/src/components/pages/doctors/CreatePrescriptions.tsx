import { useEffect, useState } from "react";
import type { dosage } from "../../interfaces/dosages.interfaces";
import api from  "../../../config";
// import type { prescription } from "../../interfaces/prescription.interfaces";
// import prescriptionDefault from "../../interfaces/prescription.interfaces";
import type { medicine } from "../../interfaces/medicine.interface";
import type { prescriptionItem } from "../../interfaces/prescriptionItem.interfaces";
import prescriptionItemDefault from "../../interfaces/prescriptionItem.interfaces";
import type { duration } from "../../interfaces/duration.interfaces";
import type { instruction } from "../../interfaces/instructions.interfaces";


function CreatePrescriptions () {
  // const [prescription, setPrescription] = useState<prescription>(prescriptionDefault);
  const [prescriptionItem, setPrescriptionItem] = useState<prescriptionItem>(prescriptionItemDefault);
  const [medicineItem, setMedicineItem] = useState<prescriptionItem>(prescriptionItemDefault);
  const [dosages, setDosages] = useState<dosage[]>([]);
  const [medicines, setMedicines] = useState<medicine[]>([]);
  const [durations, setDurations] = useState<duration[]>([]);
  const [instructions, setInstructions] = useState<instruction[]>([]);
  const getMedicines = () => {
    api
      .get("medicines")
      .then((response) => {
        // console.log(response.data);
        if (response.status === 200 || response.status === 201) {
          setMedicines(response.data);
          // console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      });
  };
  const getDosages = () => {
    api.get("dosages")
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        // console.log(response.data);
        setDosages(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
  };
  const getDurations = () => {
    api.get("durations")
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        // console.log(response.data);
        setDurations(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
  };
  const getInstructions = () => {
    api.get("instructions")
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        // console.log(response.data);
        setInstructions(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
  };

  useEffect (() => {
    document.title = "Create Prescription";
    getMedicines();
    getDosages();
    getDurations();
    getInstructions();
  },[]);

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    const matchDosage = dosages.find((opt) => opt.name === medicineItem.dosage_name);
    const matchMedicine = medicines.find((opt) => opt.name === medicineItem.medicine_name);
    const matchDuration = durations.find((opt) => opt.name === medicineItem.duration_name);
    const matchInstruction = instructions.find((opt) => opt.text === medicineItem.instruction_name);

    if(!matchMedicine){
      alert("Invalid Medicine selected!");
      return;
    }
    if (!matchDosage) {
      alert("Invalid Dosage selected!");
      return;
    }
    if (!matchDuration) {
      alert("Invalid Duration selected!");
      return;
    }
    if (!matchInstruction) {
      alert("Invalid Instruction selected!");
      return;
    }
      console.log("Before adding medicine:", prescriptionItem);

      //new Item
      const newItem: prescriptionItem = {
        ...prescriptionItem,
        medicine_id: matchMedicine.id,
        dosage_id: matchDosage.id,
        duration_id: matchDuration.id,
        instruction_id: matchInstruction.id,
      };
      setPrescriptionItem(newItem);
      console.log("New prescription item to add:", newItem);
      setMedicineItem(prescriptionItemDefault);


    // if (matchMedicine) {
    //   setPrescriptionItem((prev) => ({ ...prev, medicine_id: matchMedicine.id }));
    // }
    // if (matchDosage) {
    //   // console.log("Matched dosage:", match);
    //   setPrescriptionItem((prev) => ({ ...prev, dosage_id: matchDosage.id }));
    // } else {
    //   console.log("No matching dosage found.");
    // }
    // if (matchDuration) {
    //   setPrescriptionItem((prev) => ({ ...prev, duration_id: matchDuration.id }));
    // } else {
    //   console.log("No matching duration found.");
    // }
    // if (matchInstruction) {
    //   setPrescriptionItem((prev) => ({ ...prev, instruction_id: matchInstruction.id }));
    // } else {
    //   console.log("No matching instruction found.");
    // }
    
  };
  console.log("Current prescription Item:", prescriptionItem);
  // useEffect(() => {
  //   console.log("Updated prescription Items:", prescriptionItem);
  // }, [prescriptionItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the prescriptionItem to the API or handle it as needed
    console.log("Submitting prescription item:", prescriptionItem);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white text-center p-3">
            <h4 className="mb-0">Create Prescription</h4>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              {/* Patient & Appointment Info */}
              <div className="row mb-4">
                {/* <div className="col-md-6">
                  <label className="form-label fw-semibold">Patient</label>
                  <select className="form-select" required>
                    <option value="">Select Patient</option>
                    <option value="1">Ali Hossain</option>
                    <option value="2">Tanjiya Sultana</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Appointment</label>
                  <select className="form-select" required>
                    <option value="">Select Appointment</option>
                    <option value="1">2025-09-28 10:00 AM</option>
                    <option value="2">2025-09-28 11:30 AM</option>
                  </select>
                </div> */}
              </div>
              {/* Diagnosis */}
              {/* <div className="mb-4">
                <label className="form-label fw-semibold">Diagnosis</label>
                <textarea className="form-control" rows={2} required />
              </div> */}
              {/* Medicines */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Medicines</label>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Medicine Name</th>
                        {/* <th>Generic</th> */}
                        <th>Dosage</th>
                        <th>Duration</th>
                        <th>Instructions</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="medicine_name"
                            value={medicineItem.medicine_name ? medicineItem.medicine_name : ""}
                            onChange={(e)=> setMedicineItem({...medicineItem,medicine_name:e.target.value})}
                            list="medicines-list"/>
                            <datalist id="medicines-list">
                            {medicines.map((med_item) => (
                              <option value={med_item.name} key={med_item.id} />
                            ))}

                            </datalist>
                        </td>
                        {/* <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                          />
                        </td> */}
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            name="dosage_name"
                            list="dosage-list"
                            value={medicineItem.dosage_name ? medicineItem.dosage_name : ""}
                            onChange={(e) =>
                              setMedicineItem(
                                {...medicineItem,
                                dosage_name: e.target.value,
                              }
                            )
                          }
                            required/>
                          <datalist id="dosage-list">
                            {dosages.map((do_item) => (
                              <option value={do_item.name} key={do_item.id} />
                            ))}
                          </datalist>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            list="duration-list"
                            name="duration_name"
                            value={medicineItem.duration_name ? medicineItem.duration_name : ""}
                            onChange={(e) => setMedicineItem({...medicineItem, duration_name: e.target.value})}/>
                          <datalist id="duration-list">
                            {durations.map((du_item) => (
                              <option value={du_item.name} key={du_item.id} />
                            ))}
                          </datalist>
                        </td>
                        <td>
                          <input type="text" className="form-control" 
                          name="instruction_name"
                          list="instruction-list"
                          value={medicineItem.instruction_name ? medicineItem.instruction_name : ""}
                          onChange={(e) => setMedicineItem({...medicineItem, instruction_name: e.target.value})}
                          />
                          <datalist id="instruction-list">
                            {instructions.map((in_item) => (
                              <option value={in_item.text} key={in_item.id} />
                            ))}
                          </datalist>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            
                            disabled
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm mt-2"
                    onClick={handleAddMedicine}
                  >
                    Add Medicine
                  </button>
                </div>
                {/* <datalist id="dosage-list">
                  {dosages.map((do_item) => (
                    <option value={do_item.name} data-dosage_id={do_item.id} />
                  ))}
                </datalist>
                <datalist id="medicines-list">
                  <option value="Paracetamol" />
                  <option value="Amoxicillin" />
                  <option value="Omeprazole" />
                  <option value="Ibuprofen" />
                </datalist> */}
              </div>
              {/* Tests */}
              {/* <div className="mb-4">
                <label className="form-label fw-semibold">
                  Recommended Tests
                </label>
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Test Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          list="test-list"
                          required
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          disabled
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm mt-2"
                >
                  Add Test
                </button>
                <datalist id="test-list">
                  <option value="CBC" />
                  <option value="X-Ray Chest" />
                  <option value="Blood Sugar" />
                  <option value="ECG" />
                  <option value="Creatinine" />
                  <option value="LFT" />
                  <option value="Urine R/M/E" />
                </datalist>
              </div> */}
              {/* Advice & Notes */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Advice / Instructions
                </label>
                <textarea className="form-control" rows={2} />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Doctor's Notes</label>
                <textarea className="form-control" rows={2} />
              </div>
              {/* Follow-Up */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Follow-Up Date</label>
                <input type="date" className="form-control" />
              </div>
              {/* Submit */}
              <div className="text-end">
                <button type="submit" className="btn btn-success px-4">
                  Save Prescription
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreatePrescriptions;
