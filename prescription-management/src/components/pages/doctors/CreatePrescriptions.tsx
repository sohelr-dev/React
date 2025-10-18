import { useEffect, useState } from "react";
import type { dosage } from "../../interfaces/dosages.interfaces";
import api from "../../../config";

interface presType{
  id?:number,
  dosage_id?:string,
}


function CreatePrescriptions() {
  const[prescription,setPrescription] =useState<presType>({
    id:0,
    dosage_id:"",
  }
  );
  const [dosages, setDosages] = useState<dosage[]>([]);
  useEffect(() => {
    document.title = "Dosages List";
    getdosages();
  }, []);

  const getdosages = (() => {
    api.get("dosages")
      .then((response) => {
        console.log(response.data);
        setDosages(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Wrong !");
      })
  })

  const handlePrescription=()=>{
    console.log(prescription);
  }
  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white text-center p-3">
            <h4 className="mb-0">Create Prescription</h4>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handlePrescription}>
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
                <label className="form-label fw-semibold">Medicines</label>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
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
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            list="medicines-list"
                            required
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" readOnly />
                        </td>
                        <td>
                          <input type="text"
                            className="form-control"
                            name="dosage_id"
                            list="dosage-list"
                            value={prescription.dosage_id}
                            onChange={(e)=>setPrescription({...prescription,dosage_id:(e.target.value)})}
                            required />
                        </td>
                        <td>
                          <input type="text" className="form-control" required />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger" disabled>
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" className="btn btn-outline-primary btn-sm mt-2">
                    Add Medicine
                  </button>
                </div>
              <datalist id="dosage-list">
                {
                  dosages.map((do_item) =>
                    <option value={do_item.name}
                  data-dosage_id={do_item.id} />
                  )
                }
              </datalist>
                <datalist id="medicines-list">
                  <option value="Paracetamol" />
                  <option value="Amoxicillin" />
                  <option value="Omeprazole" />
                  <option value="Ibuprofen" />
                </datalist>
              </div>

              {/* Tests */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Recommended Tests</label>
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
                        <button className="btn btn-sm btn-outline-danger" disabled>
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn btn-outline-primary btn-sm mt-2">
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
              </div>

              {/* Advice & Notes */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Advice / Instructions</label>
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
  )
}

export default CreatePrescriptions
