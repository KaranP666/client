import React, { useEffect, useState } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import { useDispatch, useSelector } from "react-redux";
import {  getAllCommitteeMember ,getMember } from "../../../redux/actions/adminActions";
import { MenuItem, Select } from "@mui/material";
import Spinner from "../../../utils/Spinner";
import * as classes from "../../../utils/styles";
import { SET_ERRORS } from "../../../redux/actionTypes";
const Body = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  // const departments = useSelector((state) => state.admin.allDepartment);
  const committee = useSelector((state) => state.admin.allCommittee);
  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);
  const [value, setValue] = useState({
    // department: "", 
    committee: "",
    // year: "",
  });
  console.log(committee)
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    setLoading(true);
    setError({});
    dispatch(getMember(value));
  };
  const committeemembers = useSelector((state) => state.admin.commiteemember.result);

  useEffect(() => {
    if (committeemembers?.length !== 0) setLoading(false);
  }, [committeemembers]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);
  // console.log(committeemembers)

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <BoyIcon />
          <h1>Committee Members</h1>
        </div>
        <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form
            className="flex flex-col space-y-2 col-span-1"
            onSubmit={handleSubmit}>
            {/* <label htmlFor="department">Department</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
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
            </Select> */}
            <label htmlFor="commitee">Committee Name</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.committee}
              onChange={(e) =>
                setValue({ ...value, committee: e.target.value })
              }>
              <MenuItem value="">None</MenuItem>
              {committee?.map((dp, idx) => (
                <MenuItem key={idx} value={dp.committee}>
                  {dp.committee}
                </MenuItem>
              ))}
            </Select>
            {/* <label htmlFor="year">Year</label>
            <Select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              value={value.year}
              onChange={(e) => setValue({ ...value, year: e.target.value })}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select> */}
            <button
              className={`${classes.adminFormSubmitButton} w-56`}
              type="submit">
              Search
            </button>
          </form>
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noCommitteeMemberError || error.backendError) && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noCommitteeMemberError || error.backendError}
                </p>
              )}
            </div>
            {search &&
              !loading &&
              Object.keys(error).length === 0 &&
              committeemembers?.length !== 0 && (
                <div className={classes.adminData}>
                  <div className="grid grid-cols-10">
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Sr no.
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Name
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Committee
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Role
                    </h1>
                    <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Department
                    </h1>
                    {/* <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Email
                    </h1> */}
                    <h1 className={`col-span-1 ${classes.adminDataHeading}`}>
                      Section
                    </h1>
                    {/* <h1 className={`col-span-2 ${classes.adminDataHeading}`}>
                      Batch
                    </h1> */}
                  </div>
                  {committeemembers?.map((stu, idx) => (
                    <div
                      key={idx}
                      className={`${classes.adminDataBody} grid-cols-10`}>
                      <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {idx + 1}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.name}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.committee}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.role}
                      </h1>
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.department}
                      </h1>
                      {/* <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.email}
                      </h1> */}
                      <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.section}
                      </h1>
                      {/* <h1
                        className={`col-span-2 ${classes.adminDataBodyFields}`}>
                        {stu.batch}
                      </h1> */}
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
