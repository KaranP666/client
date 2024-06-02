import EngineeringIcon from "@mui/icons-material/Engineering";
import React, { useEffect, useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { addCommitteeMember } from "../../../redux/actions/adminActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "../../../utils/Spinner";
import { ADD_COMMITTEE_MEMBER, SET_ERRORS } from "../../../redux/actionTypes";
import * as classes from "../../../utils/styles";
import scrollIntoView from "scroll-into-view";

const Body = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const departments = useSelector((state) => state.admin.allDepartment);
    const committees = useSelector((state) => state.admin.allCommittee);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const errorRef = useRef();

    const [value, setValue] = useState({
        name: "",
        department: "",
        contactNumber: "",
        email: "",
        section: "",
        batch: "",
        year: "",
        committee: "",
        role: "",
        designation: "",
    });

    // useEffect(() => {
    //     if (Object.keys(store.errors).length !== 0) {
    //         setError(store.errors);
    //         errorRef.current.scrollIntoView({ behavior: "smooth" });
    //         setValue({ ...value, email: "" });
    //     }
    // }, [store.errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCommitteeMember(value));
        setError({});
        setLoading(true);
    };

    useEffect(() => {
        if (store.errors || store.admin.committeeMemberAdded) {
            setLoading(false);
            if (store.admin.committeeMemberAdded) {
                setValue({
                    name: "",
                    department: "",
                    contactNumber: "",
                    email: "",
                    section: "",
                    batch: "",
                    year: "",
                    committee: "",
                    role: "",
                    designation: "",
                });

                dispatch({ type: SET_ERRORS, payload: {} });
                dispatch({ type: ADD_COMMITTEE_MEMBER, payload: false });
            }
        } else {
            setLoading(true);
        }
    }, [store.errors, store.admin.committeeMemberAdded]);

    useEffect(() => {
        dispatch({ type: SET_ERRORS, payload: {} });
    }, []);


    return (
        <div className="flex-[0.8] mt-3">
            <div className="space-y-5">
                <div className="flex text-gray-400 items-center space-x-2">
                    <EngineeringIcon />
                    <h1>Add Committee Member</h1>
                </div>
                <div className=" mr-10 bg-white flex flex-col rounded-xl ">
                    <form className={classes.adminForm0} onSubmit={handleSubmit}>
                        <div className={classes.adminForm1}>
                            <div className={classes.adminForm2l}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Name :</h1>

                                    <input
                                        placeholder="Full Name"
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.name}
                                        onChange={(e) =>
                                            setValue({ ...value, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Year :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{ "aria-label": "Without label" }}
                                        value={value.year}
                                        onChange={(e) =>
                                            setValue({ ...value, year: e.target.value })
                                        }>
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                        <MenuItem value="4">4</MenuItem>
                                    </Select>
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Section :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{ "aria-label": "Without label" }}
                                        value={value.section}
                                        onChange={(e) =>
                                            setValue({ ...value, section: e.target.value })
                                        }>
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="1">1</MenuItem>
                                        <MenuItem value="2">2</MenuItem>
                                        <MenuItem value="3">3</MenuItem>
                                    </Select>
                                </div>

                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Email :</h1>

                                    <input
                                        placeholder="Email"
                                        required
                                        className={classes.adminInput}
                                        type="email"
                                        value={value.email}
                                        onChange={(e) =>
                                            setValue({ ...value, email: e.target.value })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Batch :</h1>

                                    <input
                                        required
                                        placeholder="yyyy-yyyy"
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.batch}
                                        onChange={(e) =>
                                            setValue({ ...value, batch: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className={classes.adminForm2r}>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Department :</h1>
                                    <Select
                                        required
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
                                {/* <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Committiee :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{ "aria-label": "Without label" }}
                                        value={value.committee}
                                        onChange={(e) =>
                                            setValue({ ...value, committee: e.target.value })
                                        }>
                                        <MenuItem value="">None</MenuItem>
                                        {committees?.map((cp, idx) => (
                                            <MenuItem key={idx} value={cp.committee}>
                                                {cp.committee}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div> */}
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Committee :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{ "aria-label": "Without label" }}
                                        value={value.committee}
                                        onChange={(e) =>
                                            setValue({ ...value, committee: e.target.value })
                                        }>
                                        <MenuItem value="">None</MenuItem>
                                        {committees?.map((dp, idx) => (
                      <MenuItem key={idx} value={dp.committee}>
                        {dp.committee}
                      </MenuItem>
                    ))}
                                        
                                    </Select>
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Role :</h1>
                                    <Select
                                        required
                                        displayEmpty
                                        sx={{ height: 36 }}
                                        inputProps={{ "aria-label": "Without label" }}
                                        value={value.role}
                                        onChange={(e) =>
                                            setValue({ ...value, role: e.target.value })
                                        }>
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value="Committee Incharge">Committee Incharge</MenuItem>
                                        <MenuItem value="Lead">Lead</MenuItem>
                                        <MenuItem value="Member">Member</MenuItem>
                                    </Select>
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Designation :</h1>
                                    <input
                                        placeholder="Technical Head, Socials.."
                                        required
                                        className={classes.adminInput}
                                        type="text"
                                        value={value.designation}
                                        onChange={(e) =>
                                            setValue({ ...value, designation: e.target.value })
                                        }
                                    />
                                </div>
                                <div className={classes.adminForm3}>
                                    <h1 className={classes.adminLabel}>Contact Number :</h1>

                                    <input
                                        required
                                        placeholder="Contact Number"
                                        className={classes.adminInput}
                                        type="number"
                                        value={value.contactNumber}
                                        onChange={(e) =>
                                            setValue({ ...value, contactNumber: e.target.value })
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
                                onClick={() => {
                                    setValue({
                                        name: "",
                                        dob: "",
                                        email: "",
                                        department: "",
                                        contactNumber: "",
                                        avatar: "",
                                        joiningYear: Date().split(" ")[3],
                                        password: "",
                                        username: "",
                                    });
                                    setError({});
                                }}
                                className={classes.adminFormClearButton}
                                type="button">
                                Clear
                            </button>
                        </div>
                        <div className={classes.loadingAndError}>
                            {loading && (
                                <Spinner
                                    message="Adding Committee Member"
                                    height={30}
                                    width={150}
                                    color="#111111"
                                    messageColor="blue"
                                />
                            )}
                            {(error.emailError || error.backendError) && (
                                <p className="text-red-500">
                                    {error.emailError || error.backendError}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Body;
