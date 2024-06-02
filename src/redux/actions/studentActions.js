import {
  SET_ERRORS,
  UPDATE_PASSWORD,
  TEST_RESULT,
  STUDENT_LOGIN,
  ATTENDANCE,
  UPDATE_STUDENT,
  GET_SUBJECT,
  GET_STUDENT_DETAILS,
  UPLOAD_PDF,
  GET_PDF
} from "../actionTypes";
import * as api from "../api";

export const studentSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentSignIn(formData);
    dispatch({ type: STUDENT_LOGIN, data });
    if (data.result.passwordUpdated) navigate("/student/home");
    else navigate("/student/password");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const studentUpdatePassword =
  (formData, navigate) => async (dispatch) => {
    try {
      const { data } = await api.studentUpdatePassword(formData);
      dispatch({ type: UPDATE_PASSWORD, payload: true });
      alert("Password Updated");
      navigate("/student/home");
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

// export const updateStudent = (formData) => async (dispatch) => {
//   try {
//     const { data } = await api.updateStudent(formData);
//     dispatch({ type: UPDATE_STUDENT, payload: true });
//   } catch (error) {
//     dispatch({ type: SET_ERRORS, payload: error.response.data });
//   }
// };

export const updateStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(formData);
    dispatch({ type: GET_STUDENT_DETAILS, payload: true });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getStudentDetails = (formData) => async (dispatch) => {
  try {
    const { data } = await api.getStudentDetails(formData);
    dispatch({ type: GET_STUDENT_DETAILS, payload: data });
  } catch (error) {
    dispatch({ type: GET_STUDENT_DETAILS, payload: error.response.data });
  }
};

export const getSubject = (department, year) => async (dispatch) => {
  try {
    const formData = {
      department,
      year,
    };
    const { data } = await api.getSubject(formData);
    dispatch({ type: GET_SUBJECT, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};

export const getTestResult =
  (department, year, section) => async (dispatch) => {
    try {
      const formData = {
        department,
        year,
        section,
      };
      const { data } = await api.getTestResult(formData);
      dispatch({ type: TEST_RESULT, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

export const getAttendance =
  (department, year, section) => async (dispatch) => {
    try {
      const formData = {
        department,
        year,
        section,
      };
      const { data } = await api.getAttendance(formData);
      dispatch({ type: ATTENDANCE, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  };

  export const getPDF = (username) => async (dispatch) => {
    try {
        // Make an API request to fetch the PDF file.
        const { data } = await api.getPDF(username);
        // Dispatch the action type GET_PDF with the received data.
        dispatch({ type: GET_PDF, payload: data });
    } catch (error) {
        // Handle errors by dispatching SET_ERRORS with the error response data.
        dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
};


export const uploadPDF = (formData) => async (dispatch) => {
  try {
    const { data } = await api.uploadPDF(formData);
    dispatch({ type: UPLOAD_PDF, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error.response.data });
  }
};