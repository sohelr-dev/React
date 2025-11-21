import React, { useEffect, useState } from "react";
import api from "../../../config";
import type { dosage } from "../../interfaces/dosages.interfaces";
import type { prescription } from "../../interfaces/prescription.interfaces";
import prescriptionDefault from "../../interfaces/prescription.interfaces";
import type { medicine } from "../../interfaces/medicine.interface";
import type { prescriptionItem } from "../../interfaces/prescriptionItem.interfaces";
import prescriptionItemDefault from "../../interfaces/prescriptionItem.interfaces";
import type { duration } from "../../interfaces/duration.interfaces";
import type { instruction } from "../../interfaces/instructions.interfaces";
import type { tests } from "../../interfaces/test.interfaces";
import type { prescriptionTest } from "../../interfaces/prescriptionTests.interfaces";
import prescriptionTestDefault from "../../interfaces/prescriptionTests.interfaces";
import type { appointment } from "../../interfaces/appointment.interfaces";
import appointmentDefault from "../../interfaces/appointment.interfaces";
import { useNavigate } from "react-router-dom";

function CreatePrescriptions() {
  const [prescription, setPrescription] = useState<prescription>(prescriptionDefault);
  const [prescriptionItems, setPrescriptionItems] = useState<prescriptionItem[]>([]);
  const [prescriptionTests, setPrescriptionTests] = useState<prescriptionTest[]>([]);
  const [medicineItem, setMedicineItem] = useState<prescriptionItem>(prescriptionItemDefault);
  const [testItem, setTestItem] = useState<prescriptionTest>(prescriptionTestDefault);
  const [dosages, setDosages] = useState<dosage[]>([]);
  const [medicines, setMedicines] = useState<medicine[]>([]);
  const [durations, setDurations] = useState<duration[]>([]);
  const [instructions, setInstructions] = useState<instruction[]>([]);
  const [tests, setTests] = useState<tests[]>([]);
  const [appointments, setAppointments] = useState<appointment[]>([]);
  const [appointmentItems, setAppointmentItems] = useState<appointment>(appointmentDefault);

    // useEffect (()=>{
    //   const match = appointments.find(opt => opt.patient_name == appointmentItems.patient_name);
    //   if (match) {
    //     setPrescription(prev => ({
    //       ...prev,
    //       patient_id: match.patient_id,
    //       appointment_id: match.id,
    //       doctor_id: match.doctor_id,
    //     }));
    //   }
    //   console.log(prescription)
    // },[appointmentItems.patient_name])
    // console.log("set" + JSON.stringify(prescription));

    function handlePatient(e:any){
      // console.log(e.target.value)
      let name = e.target.value
      setAppointmentItems({ ...appointmentItems, patient_name: name });

      const match = appointments.find(opt => opt.patient_name === name);
      // console.log(match)
      if (match) {
        setPrescription(prev => ({
          ...prev,
          patient_id: match.patient_id,
          appointment_id: match.id,
          doctor_id: match.doctor_id,
        }));
      }
      // console.log(prescription)
      
    }

 

  useEffect(() => {
    document.title = "Create Prescription";
    api.get("appointments-today").then(res => setAppointments(res.data));
    api.get("medicines").then(res => setMedicines(res.data));
    api.get("dosages").then(res => setDosages(res.data));
    api.get("durations").then(res => setDurations(res.data));
    api.get("instructions").then(res => setInstructions(res.data));
    api.get("tests").then(res => setTests(res.data));
  }, []);

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    const dosageMatch = dosages.find(opt => opt.name === medicineItem.dosage_name);
    const medMatch = medicines.find(opt => opt.name === medicineItem.medicine_name);
    const durMatch = durations.find(opt => opt.name === medicineItem.duration_name);
    const instrMatch = instructions.find(opt => opt.text === medicineItem.instruction_name);

    if (!medMatch || !dosageMatch || !durMatch || !instrMatch) {
      alert("Invalid medicine fields.");
      return;
    }

    setPrescriptionItems([...prescriptionItems, {
      ...medicineItem,
      medicine_id: medMatch.id,
      dosage_id: dosageMatch.id,
      duration_id: durMatch.id,
      instruction_id: instrMatch.id,
    }]);

    setMedicineItem(prescriptionItemDefault);
    // console.log("pre" + prescription)
  };

  const handleRemoveMedicine = (index: number) => {
    setPrescriptionItems(prescriptionItems.filter((_, i) => i !== index));
  };

  const handleAddTest = (e: React.FormEvent) => {
    e.preventDefault();
    const testMatch = tests.find(opt => opt.name === testItem.test_name);
    if (!testMatch) {
      alert("Invalid test");
      return;
    }

    setPrescriptionTests([
      ...prescriptionTests,
      { ...testItem, test_id: testMatch.id },
    ]);
    setTestItem(prescriptionTestDefault);
  };

  const handleRemoveTest = (index: number) => {
    setPrescriptionTests(prescriptionTests.filter((_, i) => i !== index));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // console.log(prescription);
    // console.log(prescriptionItems);

    api.post("create-prescription",{
      "prescription":prescription,
      "medicine":prescriptionItems,
      "tests":prescriptionTests
    })
    .then((res)=>{
      console.log(res.data)
      alert(res.data.message);
      setPrescription(prescriptionDefault);
      setPrescriptionItems([]);
      setPrescriptionTests([]);
      setAppointmentItems(appointmentDefault);
      navigate("/prescriptions/prescription-details/"+res.data.prescription_id);


    })
    .catch((err)=>{
      console.log(err)
    })
    
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white text-center p-3">
          <h4 className="mb-0">📝 Create Prescription</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Patient Selection */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Patient</label>
              <input type="text" className="form-control"
                list="ap_list"
                value={appointmentItems.patient_name ? appointmentItems.patient_name : ""}
                onChange={handlePatient} />
              {/* <select
                className="form-select"
                list="ap_list"
                value={appointmentItems.patient_id || ""}
                onChange={(e) =>
                  setAppointmentItems({ ...appointmentItems, patient_id: parseInt(e.target.value) })
                }
                required
              >
                <option value="">Select Patient</option>
                {appointments.map((app) => (
                  <option value={app.patient_id} key={app.id}>
                    {app.patient_name} - {app.age} yrs | Serial No: {app.id}
                  </option>
                ))}
              </select> */}
            </div>
            <datalist id="ap_list">
              {
                appointments.map((a)=>
                  <option key={a.id} value={a.patient_name } />
                )
              }
            </datalist>

            {/* Diagnosis */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Diagnosis</label>
              <textarea
                className="form-control"
                value={prescription.diagnosis || ""}
                onChange={(e) => setPrescription({ ...prescription, diagnosis: e.target.value })}
                // required
              />
            </div>

            {/* Medicines Section */}

            {/* Medicines */}
              <div className="mb-4">
                <label className="form-label fw-semibold text-success"> 💊 Medicines</label>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Medicine Name</th>
                        <th>Dosage</th>
                        <th>Duration</th>
                        <th>Instructions</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Input Row for Adding New Medicine */}
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
                            />
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
                            type="button"
                            className="btn btn-sm btn-primary"
                            onClick={handleAddMedicine}
                          >
                            Add New
                          </button>
                        </td>
                      </tr>

                      {/* Display Added Medicines */}
                      {prescriptionItems.map((item, index) => (
                        <tr key={index}>
                          <td>{item.medicine_name}</td>
                          <td>{item.dosage_name}</td>
                          <td>{item.duration_name}</td>
                          <td>{item.instruction_name}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleRemoveMedicine(index)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}

                      {/* Show message if no medicines added */}
                      {prescriptionItems.length === 0 && (
                        <tr>
                          <td colSpan={5} className="text-muted">
                            No medicines added yet. Fill the form above and click "Add" to add medicines.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Tests */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  Recommended Tests
                </label>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Test Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Input Row for Adding New Test */}
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            list="test-list"
                            name="test_name"
                            value={testItem.test_name ? testItem.test_name : ""}
                            onChange={(e) => setTestItem({...testItem, test_name: e.target.value})}
                          />
                          <datalist id="test-list">
                            {tests.map((test) => (
                              <option value={test.name} key={test.id} />
                            ))}
                          </datalist>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            onClick={handleAddTest}
                          >
                            Add
                          </button>
                        </td>
                      </tr>

                      {/* Display Added Tests */}
                      {prescriptionTests.map((item, index) => (
                        <tr key={index}>
                          <td>{item.test_name}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleRemoveTest(index)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}

                      {/* Show message if no tests added */}
                      {prescriptionTests.length === 0 && (
                        <tr>
                          <td colSpan={2} className="text-muted">
                            No tests added yet. Fill the form above and click "Add" to add tests.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            {/* Tests Section */}
          

            {/* Advice */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Advice</label>
              <textarea
                className="form-control"
                value={prescription.advice || ""}
                onChange={(e) => setPrescription({ ...prescription, advice: e.target.value })}
              />
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Doctor Notes</label>
              <textarea
                className="form-control"
                value={prescription.notes || ""}
                onChange={(e) => setPrescription({ ...prescription, notes: e.target.value })}
              />
            </div>

            {/* Follow-up */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Follow-Up Date</label>
              <input
                type="date"
                className="form-control"
                value={prescription.follow_up_date || ""}
                onChange={(e) => setPrescription({ ...prescription, follow_up_date: e.target.value })}
              />
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-success px-4">
                Save Prescription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePrescriptions;
