import React, { useEffect, useState } from "react";


import type { dosage } from "../interfaces/dosages.interfaces";
import api from "../../config";

interface presType {
     id?: number,
     dosage_id?: number,
     dosage_name?: string,
}


function CreateDosage() {
     const [prescription, setPrescription] = useState<presType>({
          id: 0,
          dosage_id: 0,
          dosage_name: "",
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
                    // console.log(response.data);
                    setDosages(response.data);
               })
               .catch((error) => {
                    console.log(error);
                    alert("Something Wrong !");
               })
     })

     
     const handlePrescription = (e: React.FormEvent) => {
          e.preventDefault();
          const match = dosages.find(opt => opt.name === prescription.dosage_name);
          // console.log(match)
          // if (match) {
               //      setPrescription(match.id);  // set id in state
               // } else {
                    //      setSelectedId(""); // reset if no match
                    // }
                    console.log(prescription);
                    setPrescription({ ...prescription, dosage_id: match?.id});
                    console.log(prescription);
               }
               useEffect (()=>{
          
               },[prescription])
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
                                        <label htmlFor="dosgae">Dosage Name</label>
                                        <input type="text"
                                             className="form-control"
                                             name="dosage_id"
                                             list="dosage-list"
                                             value={prescription.dosage_name}


                                             onChange={(e) => setPrescription({ ...prescription, dosage_name: (e.target.value) })}
                                             required />
                                   </div>
                                   <button type="submit" className="btn btn-success px-4">
                                        Save Prescription
                                   </button>
                              </form>
                         </div>
                         <datalist id="dosage-list">
                              {
                                   dosages.map((do_item) =>
                                        <option value={do_item.name}
                                             key={do_item.id}
                                             data-dosage_id={do_item.id} />
                                   )
                              }
                         </datalist>
                    </div>
               </div>
          </>
     )
}
export default CreateDosage
