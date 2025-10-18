import { useEffect, useState } from "react";


import type { medicine } from "./interfaces/medicine.interface";
import type { prescriptionItem } from "./interfaces/prescriptionItem.interfaces";
import prescriptionItemDefault from "./interfaces/prescriptionItem.interfaces";
import type { duration } from "./interfaces/duration.interfaces";
import type { instruction } from "./interfaces/instructions.interfaces";
import type { doctor } from "./interfaces/doctor.interfaces";
import api from "../config";

function CreatePrescriptions() {
  const [prescriptionItems, setPrescriptionItems] = useState<prescriptionItem[]>([]);
  const [medicineItem, setMedicineItem] = useState<prescriptionItem>(prescriptionItemDefault);

  const [dosages, setDosages] = useState<doctor[]>([]);
  const [medicines, setMedicines] = useState<medicine[]>([]);
  const [durations, setDurations] = useState<duration[]>([]);
  const [instructions, setInstructions] = useState<instruction[]>([]);

  // Load data functions
  const getMedicines = () => {
    api
      .get("medicines")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setMedicines(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong fetching medicines.");
      });
  };

  const getDosages = () => {
    api
      .get("dosages")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setDosages(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong fetching dosages.");
      });
  };

  const getDurations = () => {
    api
      .get("durations")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setDurations(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong fetching durations.");
      });
  };

  const getInstructions = () => {
    api
      .get("instructions")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setInstructions(res.data);
          console.log("Instructions:", res.data); // ডাটা ঠিক আসছে কিনা চেক করুন
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong fetching instructions.");
      });
  };

  useEffect(() => {
    document.title = "Create Prescription";
    getMedicines();
    getDosages();
    getDurations();
    getInstructions();
  }, []);

  // Add Medicine Item to prescriptionItems list
  const handleAddMedicine = () => {
    // মেলে এমন আইডি গুলো নিয়ে আসা
    const matchMedicine = medicines.find((m) => m.name === medicineItem.medicine_name);
    const matchDosage = dosages.find((d) => d.name === medicineItem.dosage_name);
    const matchDuration = durations.find((du) => du.name === medicineItem.duration_name);
    const matchInstruction = instructions.find((ins) => ins.text === medicineItem.instruction_name);

    if (!matchMedicine) {
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

    // নতুন prescriptionItem তৈরি
    const newItem: prescriptionItem = {
      ...medicineItem,
      medicine_id: matchMedicine.id,
      dosage_id: matchDosage.id,
      duration_id: matchDuration.id,
      instruction_id: matchInstruction.id,
    };

    setPrescriptionItems((prev) => [...prev, newItem]);

    // ইনপুট ফিল্ড খালি করা
    setMedicineItem(prescriptionItemDefault);
  };

  // Remove medicine item
  const handleRemoveMedicine = (index: number) => {
    setPrescriptionItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Final form submit (এখানে আপনার API কল করবেন)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (prescriptionItems.length === 0) {
      alert("Please add at least one medicine.");
      return;
    }

    const payload = {
      // অন্য ডাটা যোগ করতে পারেন এখানে
      prescription_items: prescriptionItems,
    };

    api
      .post("prescriptions", payload)
      .then((res) => {
        alert("Prescription saved successfully!");
        setPrescriptionItems([]);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to save prescription.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white text-center p-3">
          <h4 className="mb-0">Create Prescription</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Medicines Table */}
            <div className="mb-4">
              <label className="form-label fw-semibold">Medicines</label>
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

                    {/* Input Row */}
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="medicine_name"
                          value={medicineItem.medicine_name || ""}
                          onChange={(e) =>
                            setMedicineItem({ ...medicineItem, medicine_name: e.target.value })
                          }
                          list="medicines-list"
                          required
                        />
                        <datalist id="medicines-list">
                          {medicines.map((med) => (
                            <option key={med.id} value={med.name} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="dosage_name"
                          value={medicineItem.dosage_name || ""}
                          onChange={(e) =>
                            setMedicineItem({ ...medicineItem, dosage_name: e.target.value })
                          }
                          list="dosage-list"
                          required
                        />
                        <datalist id="dosage-list">
                          {dosages.map((d) => (
                            <option key={d.id} value={d.name} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="duration_name"
                          value={medicineItem.duration_name || ""}
                          onChange={(e) =>
                            setMedicineItem({ ...medicineItem, duration_name: e.target.value })
                          }
                          list="duration-list"
                          required
                        />
                        <datalist id="duration-list">
                          {durations.map((du) => (
                            <option key={du.id} value={du.name} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="instruction_name"
                          value={medicineItem.instruction_name || ""}
                          onChange={(e) =>
                            setMedicineItem({ ...medicineItem, instruction_name: e.target.value })
                          }
                          list="instruction-list"
                          required
                        />
                        <datalist id="instruction-list">
                          {instructions.map((ins) => (
                            <option key={ins.id} value={ins.text} />
                          ))}
                        </datalist>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={handleAddMedicine}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* এখানে অন্যান্য ফিল্ড যেমন Advice, Notes, Follow-Up Date যোগ করতে পারেন */}

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
