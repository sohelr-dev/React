import React, { useEffect, useState } from "react";
import type { dosage } from "../interfaces/dosages.interfaces";
import api from "../../config";
import type { prescription } from "../interfaces/prescription.interfaces";


function CreateDosage() {
     const [prescription, setPrescription] = useState<prescription>({
          id: 0,
          dosage_id: 0,
          dosage_name: "",
     }
     );
     const [dosages, setDosages] = useState<dosage[]>([]);

     useEffect(() => {
          document.title = "Dosages List";
          getDosages();
     }, []);

     const getDosages = () => {
          api.get("dosages")
          .then((response) => {
               setDosages(response.data);
          })
          .catch((error) => {
               console.log(error);
               alert("Something went wrong!");
          });
     };

     const handlePrescription = (e: React.FormEvent) => {
          e.preventDefault();
          const match = dosages.find((opt) => opt.name === prescription.dosage_name);

          if (match) {
               setPrescription((prev) => ({ ...prev, dosage_id: match.id }));
          } else {
               alert("Dosage name not found!");
          }
     };
     useEffect (() => {
          console.log("Updated prescription:", prescription);
     }, [prescription]);

     return (
          <div className="container mt-5">
               <div className="card shadow-sm border-0">
                    <div className="card-header bg-primary text-white text-center p-3">
                         <h4 className="mb-0">Create Prescription</h4>
                    </div>

                    <div className="card-body p-4">
                         <form onSubmit={handlePrescription}>
                              <div className="row mb-4">
                                   <label htmlFor="dosage_name">Dosage Name</label>
                                   <input
                                        type="text"
                                        className="form-control"
                                        name="dosage_name"
                                        list="dosage-list"
                                        value={prescription.dosage_name}
                                        onChange={(e) =>
                                             setPrescription({
                                                  ...prescription,
                                                  dosage_name: e.target.value,
                                             })
                                        }
                                        required
                                   />
                                   <datalist id="dosage-list">
                                        {dosages.map((do_item) => (
                                             <option value={do_item.name} key={do_item.id} />
                                        ))}
                                   </datalist>
                              </div>

                              <button type="submit" className="btn btn-success px-4">
                                   Save Prescription
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default CreateDosage;
