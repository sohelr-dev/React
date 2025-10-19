import React, { useEffect, useState } from "react";
import type { dosage } from "../../interfaces/dosages.interfaces";
// import api from "../../../config";
// import type { prescription } from "../../interfaces/prescription.interfaces";
// import prescriptionDefault from "../../interfaces/prescription.interfaces";
import type { medicine } from "../../interfaces/medicine.interface";
import type { prescriptionItem } from "../../interfaces/prescriptionItem.interfaces";
import prescriptionItemDefault from "../../interfaces/prescriptionItem.interfaces";
import type { duration } from "../../interfaces/duration.interfaces";
import type { instruction } from "../../interfaces/instructions.interfaces";
import api from "../../../config";
import type { tests } from "../../interfaces/test.interfaces";
import type { prescriptionTest } from "../../interfaces/prescriptionTests.interfaces";
import prescriptionTestDefault from "../../interfaces/prescriptionTests.interfaces";


function CreatePrescriptions() {
  // const [prescription, setPrescription] = useState<prescription>(prescriptionDefault);
  const [prescriptionItems, setPrescriptionItems] = useState<prescriptionItem[]>([]);
  const [prescriptionTests, setPrescriptionTests] = useState<prescriptionTest[]>([]);
  const [medicineItem, setMedicineItem] = useState<prescriptionItem>(prescriptionItemDefault);
  const [testItem, setTestItem] = useState<prescriptionTest>(prescriptionTestDefault);
  const [dosages, setDosages] = useState<dosage[]>([]);
  const [medicines, setMedicines] = useState<medicine[]>([]);
  const [durations, setDurations] = useState<duration[]>([]);
  const [instructions, setInstructions] = useState<instruction[]>([]);
  const [tests, setTests] = useState<tests[]>([]);

  const getMedicines = () => {
    api
      .get("medicines")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setMedicines(response.data);
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
        setInstructions(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    });
  };
  const getTests = () => {
    api.get("tests")
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        setTests(response.data);
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
    getTests();
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

    const newItem: prescriptionItem = {
      ...medicineItem,
      medicine_id: matchMedicine.id,
      dosage_id: matchDosage.id,
      duration_id: matchDuration.id,
      instruction_id: matchInstruction.id,
    };

    setPrescriptionItems([...prescriptionItems, newItem]);
    setMedicineItem(prescriptionItemDefault);
    console.log("Added medicine:", newItem);
  };

  const handleRemoveMedicine = (index: number) => {
    setPrescriptionItems(prescriptionItems.filter((_, i) => i !== index));
  };
  // console.log("Current prescription Item:", prescriptionItems);

  // useEffect(() => {
  //   console.log("Updated prescription Items:", prescriptionItem);
  // }, [prescriptionItem]);

  const handleAddTest = (e: React.FormEvent) => {
    e.preventDefault();
    const matchTest = tests.find((opt) => opt.name === testItem.test_name);
    if (!matchTest) {
      alert("Invalid Test Selection");
      return;
    }
    const newTestItem: prescriptionTest = {
      ...testItem,
      test_id: matchTest.id,
    };
    setPrescriptionTests([...prescriptionTests, newTestItem]);
    setTestItem(prescriptionTestDefault);
    console.log("added test", newTestItem);
  };

  const handleRemoveTest = (index: number) => {
    setPrescriptionTests(prescriptionTests.filter((_, i) => i !== index));
  };

  console.log("current test item:", prescriptionTests);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting prescription items:", prescriptionItems);
    console.log("Submitting prescription tests:", prescriptionTests);
  };




  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white text-center p-3">
            <h4 className="mb-0"> 📝 Create Prescription</h4>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              {/* Patient & Appointment Info */}
              <div className="row mb-4">
                <div className="col-md-6">
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
                </div>
              </div>
              {/* Diagnosis */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Diagnosis</label>
                <textarea className="form-control" rows={2} required />
              </div>
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
