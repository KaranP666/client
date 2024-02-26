import React, { useEffect, useState } from "react";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../../../redux/actions/studentActions";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import Spinner from "../../../../utils/Spinner";
import { SET_ERRORS } from "../../../../redux/actionTypes";
import * as classes from "../../../../utils/styles";

const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const departments = useSelector((state) => state.admin.allDepartment);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [value, setValue] = useState({
    name: "",
    dob: "",
    email: user.result.email,
    department: "",
    contactNumber: "",
    avatar: "",
    batch: "",
    year: "",
    motherName: "",
    fatherName: "",
    fatherContactNumber: "",
    section: "",
  });

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setLoading(true);
    if (
      value.name === "" &&
      value.dob === "" &&
      value.department === "" &&
      value.contactNumber === "" &&
      value.avatar === "" &&
      value.batch === "" &&
      value.year === "" &&
      value.motherName === "" &&
      value.fatherName === "" &&
      value.fatherContactNumber === "" &&
      value.section === ""
    ) {
      alert("Enter atleast one value");
      setLoading(false);
    } else {
      dispatch(updateStudent(value));
      alert("Kindly login again to see updates");
    }
  };

  useEffect(() => {
    if (store.errors || store.student.updatedStudent) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [store.errors, store.student.updatedStudent]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <SecurityUpdateIcon />
            <h1>Update</h1>
          </div>

          <div
            onClick={() => navigate("/student/update/password")}
            className="flex space-x-2 cursor-pointer">
            <VisibilityOffIcon />
            <h1 className="font-bold">Password</h1>
          </div>
        </div>

        <div className=" mr-10 bg-white flex flex-col rounded-xl overflow-y-scroll h-[27rem] ">
          <form className={classes.adminForm0} onSubmit={handleSubmit}>
            <div className={classes.adminForm1}>
              <div className={classes.adminForm2l}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Name :</h1>
                  <input
                    placeholder={user.result?.name}
                    className={classes.adminInput}
                    type="text"
                    value={value.name}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>DOB :</h1>
                  <input
                    placeholder={user.result?.dob}
                    className={classes.adminInput}
                    type="text"
                    value={value.dob}
                    onChange={(e) =>
                      setValue({ ...value, dob: e.target.value })
                    }
                  />
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Email :</h1>
                  <input
                    placeholder={user.result?.email}
                    disabled
                    className={classes.adminInput}
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Batch :</h1>
                  <input
                    placeholder={user.result?.batch}
                    className={classes.adminInput}
                    value={value.batch}
                    onChange={(e) =>
                      setValue({ ...value, batch: e.target.value })
                    }
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Father's Name :</h1>
                  <input
                    placeholder={user.result?.fatherName}
                    className={classes.adminInput}
                    value={value.fatherName}
                    onChange={(e) =>
                      setValue({ ...value, fatherName: e.target.value })
                    }
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Mother's Name :</h1>
                  <input
                    placeholder={user.result?.motherName}
                    className={classes.adminInput}
                    value={value.motherName}
                    onChange={(e) =>
                      setValue({ ...value, motherName: e.target.value })
                    }
                    type="text"
                  />
                </div>
              </div>

              <div className={classes.adminForm2r}>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Department :</h1>
                  <Select
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    value={value.department}
                    onChange={(e) =>
                      setValue({ ...value, department: e.target.value })
                    }>
                    <MenuItem value="">None</MenuItem>
                    {departments?.map((dp, idx) => (
                      <MenuItem key={idx} value={dp.department}>
                        {dp.department}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Contact Number :</h1>
                  <input
                    placeholder={user.result?.contactNumber}
                    className={classes.adminInput}
                    type="text"
                    value={value.contactNumber}
                    onChange={(e) =>
                      setValue({ ...value, contactNumber: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Year :</h1>
                  <input
                    placeholder={user.result?.year}
                    className={classes.adminInput}
                    type="text"
                    value={value.year}
                    onChange={(e) =>
                      setValue({ ...value, year: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Section :</h1>
                  <input
                    placeholder={user.result?.section}
                    className={classes.adminInput}
                    type="text"
                    value={value.section}
                    onChange={(e) =>
                      setValue({ ...value, section: e.target.value })
                    }
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>
                    Father's Contact Number :
                  </h1>
                  <input
                    placeholder={user.result?.fatherContactNumber}
                    className={classes.adminInput}
                    value={value.fatherContactNumber}
                    onChange={(e) =>
                      setValue({
                        ...value,
                        fatherContactNumber: e.target.value,
                      })
                    }
                    type="text"
                  />
                </div>
                <div className={classes.adminForm3}>
                  <h1 className={classes.adminLabel}>Avatar :</h1>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setValue({ ...value, avatar: base64 })
                    }
                  />
                </div>
              </div>
            </div>

            <div className={classes.adminFormButton}>
              <button className={classes.adminFormSubmitButton} type="submit">
                Submit
              </button>

              <button
                onClick={() => navigate("/admin/profile")}
                className={classes.adminFormClearButton}
                type="button">
                Cancel
              </button>
            </div>

            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Updating"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
// import React, { useEffect, useState } from "react";
// import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
// import FileBase from "react-file-base64";
// import { useDispatch, useSelector } from "react-redux";
// import { updateStudent } from "../../../../redux/actions/studentActions";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useNavigate } from "react-router-dom";
// import { MenuItem, Select } from "@mui/material";
// import Spinner from "../../../../utils/Spinner";
// import { SET_ERRORS } from "../../../../redux/actionTypes";
// import * as classes from "../../../../utils/styles";

// const Body = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const store = useSelector((state) => state);
//   const departments = useSelector((state) => state.admin.allDepartment);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState({});
//   const [value, setValue] = useState({
//     name: "",
//     dob: "",
//     email: user.result.email,
//     department: "",
//     contactNumber: "",
//     avatar: "",
//     batch: "",
//     year: "",
//     motherName: "",
//     fatherName: "",
//     fatherContactNumber: "",
//     section: "",
//     ML: 0,
//     Blockchain: 0,
//     AI: 0,
//     Data_Science: 0,
//     Cyber_Security: 0,
//     App_Dev: 0,
//     Web_Dev: 0,
//   });

//   useEffect(() => {
//     if (Object.keys(store.errors).length !== 0) {
//       setError(store.errors);
//     }
//   }, [store.errors]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError({});
//     setLoading(true);
//     if (
//       value.name === "" &&
//       value.dob === "" &&
//       value.department === "" &&
//       value.contactNumber === "" &&
//       value.avatar === "" &&
//       value.batch === "" &&
//       value.year === "" &&
//       value.motherName === "" &&
//       value.fatherName === "" &&
//       value.fatherContactNumber === "" &&
//       value.section === ""
//     ) {
//       alert("Enter at least one value");
//       setLoading(false);
//     } else {
//       dispatch(updateStudent(value));
//       alert("Kindly login again to see updates");
//     }
//   };

//   useEffect(() => {
//     if (store.errors || store.student.updatedStudent) {
//       setLoading(false);
//     } else {
//       setLoading(true);
//     }
//   }, [store.errors, store.student.updatedStudent]);

//   useEffect(() => {
//     dispatch({ type: SET_ERRORS, payload: {} });
//   }, []);

//   return (
//     <div className="flex-[0.8] mt-3">
//       <div className="space-y-5">
//         <div className="flex  items-center justify-between mr-8">
//           <div className="flex space-x-2 text-gray-400">
//             <SecurityUpdateIcon />
//             <h1>Update</h1>
//           </div>

//           <div
//             onClick={() => navigate("/student/update/password")}
//             className="flex space-x-2 cursor-pointer">
//             <VisibilityOffIcon />
//             <h1 className="font-bold">Password</h1>
//           </div>
//         </div>

//         <div className=" mr-10 bg-white flex flex-col rounded-xl overflow-y-scroll h-[27rem] ">
//           <form className={classes.adminForm0} onSubmit={handleSubmit}>
//             <div className={classes.adminForm1}>
//               <div className={classes.adminForm2l}>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Name :</h1>
//                   <input
//                     placeholder={user.result?.name}
//                     className={classes.adminInput}
//                     type="text"
//                     value={value.name}
//                     onChange={(e) =>
//                       setValue({ ...value, name: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>DOB :</h1>
//                   <input
//                     placeholder={user.result?.dob}
//                     className={classes.adminInput}
//                     type="text"
//                     value={value.dob}
//                     onChange={(e) =>
//                       setValue({ ...value, dob: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Email :</h1>
//                   <input
//                     placeholder={user.result?.email}
//                     disabled
//                     className={classes.adminInput}
//                     type="text"
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Batch :</h1>
//                   <input
//                     placeholder={user.result?.batch}
//                     className={classes.adminInput}
//                     value={value.batch}
//                     onChange={(e) =>
//                       setValue({ ...value, batch: e.target.value })
//                     }
//                     type="text"
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Father's Name :</h1>
//                   <input
//                     placeholder={user.result?.fatherName}
//                     className={classes.adminInput}
//                     value={value.fatherName}
//                     onChange={(e) =>
//                       setValue({ ...value, fatherName: e.target.value })
//                     }
//                     type="text"
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Mother's Name :</h1>
//                   <input
//                     placeholder={user.result?.motherName}
//                     className={classes.adminInput}
//                     value={value.motherName}
//                     onChange={(e) =>
//                       setValue({ ...value, motherName: e.target.value })
//                     }
//                     type="text"
//                   />
//                 </div>
//               </div>

//               <div className={classes.adminForm2r}>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Department :</h1>
//                   <Select
//                     displayEmpty
//                     sx={{ height: 36 }}
//                     inputProps={{ "aria-label": "Without label" }}
//                     value={value.department}
//                     onChange={(e) =>
//                       setValue({ ...value, department: e.target.value })
//                     }>
//                     <MenuItem value="">None</MenuItem>
//                     {departments?.map((dp, idx) => (
//                       <MenuItem key={idx} value={dp.department}>
//                         {dp.department}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </div>

//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Contact Number :</h1>
//                   <input
//                     placeholder={user.result?.contactNumber}
//                     className={classes.adminInput}
//                     type="text"
//                     value={value.contactNumber}
//                     onChange={(e) =>
//                       setValue({ ...value, contactNumber: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Year :</h1>
//                   <input
//                     placeholder={user.result?.year}
//                     className={classes.adminInput}
//                     type="text"
//                     value={value.year}
//                     onChange={(e) =>
//                       setValue({ ...value, year: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Section :</h1>
//                   <input
//                     placeholder={user.result?.section}
//                     className={classes.adminInput}
//                     type="text"
//                     value={value.section}
//                     onChange={(e) =>
//                       setValue({ ...value, section: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>
//                     Father's Contact Number :
//                   </h1>
//                   <input
//                     placeholder={user.result?.fatherContactNumber}
//                     className={classes.adminInput}
//                     value={value.fatherContactNumber}
//                     onChange={(e) =>
//                       setValue({
//                         ...value,
//                         fatherContactNumber: e.target.value,
//                       })
//                     }
//                     type="text"
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Avatar :</h1>
//                   <FileBase
//                     type="file"
//                     multiple={false}
//                     onDone={({ base64 }) =>
//                       setValue({ ...value, avatar: base64 })
//                     }
//                   />
//                 </div>
//                 {/* Skill fields */}
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>ML Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.ML}
//                     onChange={(e) =>
//                       setValue({ ...value, ML: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Blockchain Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.Blockchain}
//                     onChange={(e) =>
//                       setValue({ ...value, Blockchain: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>AI Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.AI}
//                     onChange={(e) =>
//                       setValue({ ...value, AI: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Data Science Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.Data_Science}
//                     onChange={(e) =>
//                       setValue({ ...value, Data_Science: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Cyber Security Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.Cyber_Security}
//                     onChange={(e) =>
//                       setValue({ ...value, Cyber_Security: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>App Dev Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.App_Dev}
//                     onChange={(e) =>
//                       setValue({ ...value, App_Dev: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className={classes.adminForm3}>
//                   <h1 className={classes.adminLabel}>Web Dev Skill:</h1>
//                   <input
//                     className={classes.adminInput}
//                     type="number"
//                     value={value.Web_Dev}
//                     onChange={(e) =>
//                       setValue({ ...value, Web_Dev: e.target.value })
//                     }
//                   />
//                 </div>
//                 {/* Add other skill fields similarly */}
//               </div>
//             </div>

//             <div className={classes.adminFormButton}>
//               <button className={classes.adminFormSubmitButton} type="submit">
//                 Submit
//               </button>

//               <button
//                 onClick={() => navigate("/admin/profile")}
//                 className={classes.adminFormClearButton}
//                 type="button">
//                 Cancel
//               </button>
//             </div>

//             <div className={classes.loadingAndError}>
//               {loading && (
//                 <Spinner
//                   message="Updating"
//                   height={30}
//                   width={150}
//                   color="#111111"
//                   messageColor="blue"
//                 />
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;

