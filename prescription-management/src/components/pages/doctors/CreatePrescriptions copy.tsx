import React, { useState, useEffect } from "react";

// Types
interface Medicine {
  name: string;
  generic: string;
  dosage: string;
  duration: string;
  instructions: string;
}

type PrescriptionTest = string;

interface Prescription {
  diagnosis: string;
  notes: string;
  advice: string;
  followUp: string;
  medicines: Medicine[];
  tests: PrescriptionTest[];
}

// Dummy data
const MEDICINES_DB: Medicine[] = [
  { name: "Paracetamol", generic: "Acetaminophen", dosage: "", duration: "", instructions: "" },
  { name: "Amoxicillin", generic: "Amoxicillin", dosage: "", duration: "", instructions: "" },
  { name: "Omeprazole", generic: "Omeprazole", dosage: "", duration: "", instructions: "" },
  { name: "Ibuprofen", generic: "Ibuprofen", dosage: "", duration: "", instructions: "" },
];

const TESTS_DB: string[] = [
  "CBC",
  "X-Ray Chest",
  "Blood Sugar",
  "ECG",
  "Creatinine",
  "LFT",
  "Urine R/M/E"
];

const PREVIOUS_PRESCRIPTIONS: Record<number, Prescription[]> = {
  1: [
    {
      diagnosis: "Fever",
      notes: "Take rest",
      advice: "Drink water",
      followUp: "",
      medicines: [
        {
          name: "Paracetamol",
          generic: "Acetaminophen",
          dosage: "500mg",
          duration: "5 days",
          instructions: "After food"
        }
      ],
      tests: ["CBC", "Blood Sugar"]
    }
  ],
  2: []
};

const initialMedicine: Medicine = {
  name: "",
  generic: "",
  dosage: "",
  duration: "",
  instructions: ""
};

const initialTest = "";

function CreatePrescription() {
  const [patient, setPatient] = useState<string>("");
  const [appointment, setAppointment] = useState<string>("");
  const [diagnosis, setDiagnosis] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");
  const [followUp, setFollowUp] = useState<string>("");
  const [medicines, setMedicines] = useState<Medicine[]>([initialMedicine]);
  const [tests, setTests] = useState<PrescriptionTest[]>([initialTest]);

  // Load previous prescriptions when patient changes
  useEffect(() => {
    const id = Number(patient);
    if (id && PREVIOUS_PRESCRIPTIONS[id]?.length > 0) {
      const last = PREVIOUS_PRESCRIPTIONS[id].slice(-1)[0];
      setDiagnosis(last.diagnosis);
      setNotes(last.notes);
      setAdvice(last.advice);
      setFollowUp(last.followUp);
      setMedicines(last.medicines.length ? last.medicines : [initialMedicine]);
      setTests(last.tests.length ? last.tests : [initialTest]);
    } else {
      setDiagnosis("");
      setNotes("");
      setAdvice("");
      setFollowUp("");
      setMedicines([initialMedicine]);
      setTests([initialTest]);
    }
  }, [patient]);

  // Handlers
  const addMedicine = () => setMedicines([...medicines, initialMedicine]);
  const removeMedicine = (index: number) =>
    setMedicines(medicines.filter((_, i) => i !== index));

  const handleMedicineChange = (index: number, field: keyof Medicine, value: string) => {
    const updated = [...medicines];
    updated[index][field] = value;

    if (field === "name") {
      const med = MEDICINES_DB.find(m => m.name.toLowerCase() === value.toLowerCase());
      updated[index].generic = med ? med.generic : "";
    }

    setMedicines(updated);
  };

  const addTest = () => setTests([...tests, ""]);
  const removeTest = (index: number) => setTests(tests.filter((_, i) => i !== index));
  const handleTestChange = (index: number, value: string) => {
    const updated = [...tests];
    updated[index] = value;
    setTests(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      patient,
      appointment,
      diagnosis,
      notes,
      advice,
      followUp,
      medicines,
      tests
    };
    console.log("Prescription Saved:", payload);
    alert("Prescription Saved! Check console.");
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header text-center">
          <h3>Create Prescription</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>Patient</label>
                <select
                  className="form-select"
                  value={patient}
                  onChange={(e) => setPatient(e.target.value)}
                  required
                >
                  <option value="">Select Patient</option>
                  <option value="1">Ali Hossain</option>
                  <option value="2">Tanjiya Sultana</option>
                </select>
              </div>
              <div className="col-md-6">
                <label>Appointment</label>
                <select
                  className="form-select"
                  value={appointment}
                  onChange={(e) => setAppointment(e.target.value)}
                  required
                >
                  <option value="">Select Appointment</option>
                  <option value="1">2025-09-28 10:00 AM</option>
                  <option value="2">2025-09-28 11:30 AM</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label>Diagnosis</label>
              <textarea
                className="form-control"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                rows={2}
                required
              />
            </div>

            <div className="mb-3">
              <label>Medicines</label>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Generic</th>
                      <th>Dosage</th>
                      <th>Duration</th>
                      <th>Instructions</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicines.map((med, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={med.name}
                            onChange={(e) => handleMedicineChange(index, "name", e.target.value)}
                            list="medicines-list"
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={med.generic}
                            readOnly
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={med.dosage}
                            onChange={(e) => handleMedicineChange(index, "dosage", e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={med.duration}
                            onChange={(e) => handleMedicineChange(index, "duration", e.target.value)}
                            required
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={med.instructions}
                            onChange={(e) => handleMedicineChange(index, "instructions", e.target.value)}
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => removeMedicine(index)}
                            disabled={medicines.length === 1}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={addMedicine}
                >
                  Add Medicine
                </button>
              </div>
              <datalist id="medicines-list">
                {MEDICINES_DB.map((m) => (
                  <option key={m.name} value={m.name} />
                ))}
              </datalist>
            </div>

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
                  {tests.map((test, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={test}
                          onChange={(e) => handleTestChange(index, e.target.value)}
                          list="test-list"
                          required
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => removeTest(index)}
                          disabled={tests.length === 1}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={addTest}
              >
                Add Test
              </button>
              <datalist id="test-list">
                {TESTS_DB.map((test, i) => (
                  <option key={i} value={test} />
                ))}
              </datalist>
            </div>

            <div className="mb-3">
              <label>Advice / Instructions</label>
              <textarea
                className="form-control"
                value={advice}
                onChange={(e) => setAdvice(e.target.value)}
                rows={2}
              />
            </div>

            <div className="mb-3">
              <label>Notes</label>
              <textarea
                className="form-control"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
              />
            </div>

            <div className="mb-3">
              <label>Follow-Up Date</label>
              <input
                type="date"
                className="form-control"
                value={followUp}
                onChange={(e) => setFollowUp(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success">
              Save Prescription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePrescription;
