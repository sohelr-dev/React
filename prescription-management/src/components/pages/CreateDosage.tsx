import { useState } from "react";
import api from "../../config";
// import api from "../../../config"; // তোমার axios instance

function CreateDosage() {
  const [formData, setFormData] = useState({
    doctor_id: "",
    patient_id: "",
    date: "",
    advice: "",
    next_visit_date: "",
  });

  const [medicines, setMedicines] = useState([
    { medicine_id: "", dosage_id: "", duration_id: "", instruction_id: "", note: "" },
  ]);

  const [tests, setTests] = useState([{ test_id: "", note: "" }]);

  // input change handler
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // medicine dynamic fields
  const handleMedicineChange = (index: number, e: any) => {
    const values = [...medicines];
    values[index][e.target.name] = e.target.value;
    setMedicines(values);
  };

  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { medicine_id: "", dosage_id: "", duration_id: "", instruction_id: "", note: "" },
    ]);
  };

  // test dynamic fields
  const handleTestChange = (index: number, e: any) => {
    const values = [...tests];
    values[index][e.target.name] = e.target.value;
    setTests(values);
  };

  const addTest = () => {
    setTests([...tests, { test_id: "", note: "" }]);
  };

  // submit handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const payload = {
      ...formData,
      medicines,
      tests,
    };

    api
      .post("create-prescription.php", payload)
      .then((response) => {
        if (response.data.status === "success") {
          alert("✅ Prescription created successfully!");
          setFormData({
            doctor_id: "",
            patient_id: "",
            date: "",
            advice: "",
            next_visit_date: "",
          });
          setMedicines([
            { medicine_id: "", dosage_id: "", duration_id: "", instruction_id: "", note: "" },
          ]);
          setTests([{ test_id: "", note: "" }]);
        } else {
          alert("❌ " + response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="container py-4">
      <h3 className="text-primary fw-bold mb-4">📝 Create Prescription</h3>

      <form onSubmit={handleSubmit} className="card shadow-sm p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label fw-semibold">Doctor ID</label>
            <input
              type="number"
              className="form-control"
              name="doctor_id"
              value={formData.doctor_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Patient ID</label>
            <input
              type="number"
              className="form-control"
              name="patient_id"
              value={formData.patient_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label fw-semibold">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Advice</label>
            <textarea
              className="form-control"
              name="advice"
              value={formData.advice}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Next Visit Date</label>
            <input
              type="date"
              className="form-control"
              name="next_visit_date"
              value={formData.next_visit_date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Medicines Section */}
        <hr />
        <h5 className="fw-bold text-success">💊 Medicines</h5>
        {medicines.map((m, i) => (
          <div className="row g-3 align-items-end mt-1" key={i}>
            <div className="col-md-2">
              <input
                type="number"
                name="medicine_id"
                className="form-control"
                placeholder="Medicine ID"
                value={m.medicine_id}
                onChange={(e) => handleMedicineChange(i, e)}
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="dosage_id"
                className="form-control"
                placeholder="Dosage ID"
                value={m.dosage_id}
                onChange={(e) => handleMedicineChange(i, e)}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="duration_id"
                className="form-control"
                placeholder="Duration ID"
                value={m.duration_id}
                onChange={(e) => handleMedicineChange(i, e)}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="instruction_id"
                className="form-control"
                placeholder="Instruction ID"
                value={m.instruction_id}
                onChange={(e) => handleMedicineChange(i, e)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="note"
                className="form-control"
                placeholder="Note"
                value={m.note}
                onChange={(e) => handleMedicineChange(i, e)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline-success mt-2"
          onClick={addMedicine}
        >
          + Add Medicine
        </button>

        {/* Tests Section */}
        <hr />
        <h5 className="fw-bold text-info">🧪 Tests</h5>
        {tests.map((t, i) => (
          <div className="row g-3 align-items-end mt-1" key={i}>
            <div className="col-md-3">
              <input
                type="number"
                name="test_id"
                className="form-control"
                placeholder="Test ID"
                value={t.test_id}
                onChange={(e) => handleTestChange(i, e)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="note"
                className="form-control"
                placeholder="Note"
                value={t.note}
                onChange={(e) => handleTestChange(i, e)}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline-info mt-2"
          onClick={addTest}
        >
          + Add Test
        </button>

        {/* Submit */}
        <hr />
        <button type="submit" className="btn btn-primary px-4 fw-semibold">
          Submit Prescription
        </button>
      </form>
    </div>
  );
}

export default CreateDosage;
