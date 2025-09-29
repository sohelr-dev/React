// import React, { useState, useEffect } from "react";


// Example medicines database
// const MEDICINES_DB = [
//   { name: "Paracetamol", generic: "Acetaminophen" },
//   { name: "Amoxicillin", generic: "Amoxicillin" },
//   { name: "Omeprazole", generic: "Omeprazole" },
//   { name: "Ibuprofen", generic: "Ibuprofen" }
// ];

// Simulating tests table data
// const TESTS_DB = [
//   "CBC",
//   "X-Ray Chest",
//   "Blood Sugar",
//   "ECG",
//   "Creatinine",
//   "LFT",
//   "Urine R/M/E"
// ];

// Example previous prescriptions

// const PREVIOUS_PRESCRIPTIONS = {
//   1: [
//     {
//       diagnosis: "Fever",
//       notes: "Take rest",
//       advice: "Drink water",
//       medicines: [
//         {
//           name: "Paracetamol",
//           generic: "Acetaminophen",
//           dosage: "500mg",
//           duration: "5 days",
//           instructions: "After food"
//         }
//       ],
//       tests: ["CBC", "Blood Sugar"]
//     }
//   ],
//   2: []
// };

// const initialMedicine = { name: "", generic: "", dosage: "", duration: "", instructions: "" };
// const initialTest = "";

function CreatePrescription() {
  // const [patient, setPatient] = useState("");
  // const [appointment, setAppointment] = useState("");
  // const [diagnosis, setDiagnosis] = useState("");
  // const [notes, setNotes] = useState("");
  // const [advice, setAdvice] = useState("");
  // const [tests, setTests] = useState([initialTest]);
  // const [followUp, setFollowUp] = useState("");
  // const [medicines, setMedicines] = useState([initialMedicine]);

  // Load previous prescription when patient changes
  // useEffect(() => {
  //   if (patient && PREVIOUS_PRESCRIPTIONS[patient]) {
  //     const lastPrescription = PREVIOUS_PRESCRIPTIONS[patient][PREVIOUS_PRESCRIPTIONS[patient].length - 1];
  //     if (lastPrescription) {
  //       setDiagnosis(lastPrescription.diagnosis);
  //       setNotes(lastPrescription.notes);
  //       setAdvice(lastPrescription.advice);
  //       setMedicines(lastPrescription.medicines.length ? lastPrescription.medicines : [initialMedicine]);
  //       setTests(lastPrescription.tests.length ? lastPrescription.tests : [initialTest]);
  //     } else {
  //       setDiagnosis("");
  //       setNotes("");
  //       setAdvice("");
  //       setMedicines([initialMedicine]);
  //       setTests([initialTest]);
  //     }
  //   } else {
  //     setDiagnosis("");
  //     setNotes("");
  //     setAdvice("");
  //     setMedicines([initialMedicine]);
  //     setTests([initialTest]);
  //   }
  // }, [patient]);

  // Medicines handlers
  // const addMedicine = () => setMedicines([...medicines, initialMedicine]);
  // const removeMedicine = (index) => setMedicines(medicines.filter((_, i) => i !== index));
  // const handleMedicineChange = (index, field, value) => {
  //   const newMeds = [...medicines];
  //   newMeds[index][field] = value;

  //   // Auto-fill generic if name matches
  //   if (field === "name") {
  //     const med = MEDICINES_DB.find(m => m.name.toLowerCase() === value.toLowerCase());
  //     if (med) newMeds[index]["generic"] = med.generic;
  //     else newMeds[index]["generic"] = "";
  //   }

  //   setMedicines(newMeds);
  // };

  // Tests handlers
  // const addTest = () => setTests([...tests, initialTest]);
  // const removeTest = (index) => setTests(tests.filter((_, i) => i !== index));
  // const handleTestChange = (index, value) => {
  //   const updatedTests = [...tests];
  //   updatedTests[index] = value;
  //   setTests(updatedTests);
  // };

  // Submit handler
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const payload = { patient, appointment, diagnosis, notes, advice, tests, followUp, medicines };
  //   console.log("Prescription Data:", payload);
  //   alert("Prescription Saved! Check console for data.");
  //   // TODO: Call API to save prescription
  // };

  return (
    <>

      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">Create Prescription</h3>
            <div className="card-body">
              {/* onSubmit={handleSubmit} */}
              <form >
                {/* Patient & Appointment */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label>Patient</label>
                    {/* value={patient} onChange={(e) => setPatient(e.target.value)} required */}
                    <select className="form-select" >
                      <option value="">Select Patient</option>
                      <option value="1">Ali Hossain</option>
                      <option value="2">Tanjiya Sultana</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Appointment</label>
                    {/* value={appointment} onChange={(e) => setAppointment(e.target.value)} required */}
                    <select className="form-select" >
                      <option value="">Select Appointment</option>
                      <option value="1">2025-09-28 10:00 AM</option>
                      <option value="2">2025-09-28 11:30 AM</option>
                    </select>
                  </div>
                </div>

                {/* Diagnosis */}
                <div className="mb-3">
                  <label>Diagnosis</label>
                  {/* value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} rows="2" required */}
                  <textarea className="form-control" ></textarea>
                </div>
               
                {/* Medicines Table */}
                <div className="mb-3 ">
                  <label>Medicines</label>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Medicine Name</th>
                          <th>Generic Name</th>
                          <th>Dosage</th>
                          <th>Duration</th>
                          <th>Instructions</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {medicines.map((med, index) => ( */}

                        {/* key={index} */}
                        <tr >
                          <td>
                            {/* value={med.name}
                      onChange={(e) => handleMedicineChange(index, "name", e.target.value)}
                      list="medicines-list"
                      required */}
                            <input
                              type="text"
                              className="form-control"

                            />
                            {/* <datalist id="medicines-list">
                      {MEDICINES_DB.map((m) => (
                        <option key={m.name} value={m.name} />
                      ))}
                    </datalist> */}
                          </td>
                          <td>
                            {/* value={med.generic} readOnly */}
                            <input type="text" className="form-control" />
                          </td>
                          <td>
                            {/* value={med.dosage}
                      onChange={(e) => handleMedicineChange(index, "dosage", e.target.value)}
                      required */}
                            <input
                              type="text"
                              className="form-control"

                            />
                          </td>
                          <td>
                            {/*  value={med.duration}
                      onChange={(e) => handleMedicineChange(index, "duration", e.target.value)}
                      required */}
                            <input
                              type="text"
                              className="form-control"

                            />
                          </td>
                          <td>
                            {/*  value={med.instructions}
                      onChange={(e) => handleMedicineChange(index, "instructions", e.target.value)} */}
                            <input
                              type="text"
                              className="form-control"

                            />
                          </td>
                          <td>
                            {/*  onClick={() => removeMedicine(index)}
                      disabled={medicines.length === 1} */}
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"

                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                        {/* ))} */}
                      </tbody>
                    </table>

                  </div>
                  {/* onClick={addMedicine} */}
                  <button type="button" className="btn btn-primary btn-sm" >
                    Add Medicine
                  </button>
                </div>

                {/* Tests Table */}
                <div className="mb-3">
                  <label>Tests</label>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {tests.map((test, index) => ( */}

                      {/* key={index} */}
                      <tr >
                        <td>
                          {/* value={test}
                      onChange={(e) => handleTestChange(index, e.target.value)}
                      required */}
                          <input
                            type="text"
                            className="form-control"
                            list="test-list"

                          />
                          {/* <datalist id="test-list">
                      {TESTS_DB.map((testName, i) => (
                        <option key={i} value={testName} />
                      ))}
                    </datalist> */}
                        </td>
                        <td>
                          {/* onClick={() => removeTest(index)}
                      disabled={tests.length === 1} */}
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"

                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </table>
                  {/* onClick={addTest} */}
                  <button type="button" className="btn btn-primary btn-sm" >
                    Add Test
                  </button>
                </div>

                {/* Advice */}
                <div className="mb-3">
                  <label>Advice / Instructions</label>
                  {/* value={advice} onChange={(e) => setAdvice(e.target.value)} rows="2" */}
                  <textarea className="form-control" ></textarea>
                </div>
                {/* Notes */}
                <div className="mb-3">
                  <label>Notes</label>
                  {/* value={notes} onChange={(e) => setNotes(e.target.value)} rows="2" */}
                  <textarea className="form-control" ></textarea>
                </div>               
                {/* Follow-up Date */}
                <div className="mb-3">
                  <label>Follow-Up Date</label>
                  {/* value={followUp} onChange={(e) => setFollowUp(e.target.value)} */}
                  <input type="date" className="form-control" />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-success">
                  Save Prescription
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePrescription;
