import {
  LOGOUT,
  STUDENT_LOGIN,
  UPDATE_STUDENT,
  UPDATE_PASSWORD,
  TEST_RESULT,
  ATTENDANCE,
  GET_STUDENT_DETAILS,
  UPLOAD_PDF,
  SET_ERRORS,
  GET_PDF
} from "../actionTypes";

const initialState = {
  pdfData: null,
  authData: null,
  updatedPassword: false,
  updatedStudent: false,
  testAdded: false,
  marksUploaded: false,
  attendanceUploaded: false,
  testResult: [],
  tests: [],
  attendance: [],
  getStudentDetails: {},
  uploading: false,
  successAlert: null,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN:
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPassword: action.payload,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        updatedStudent: action.payload,
      };
    case TEST_RESULT:
      return {
        ...state,
        testResult: action.payload,
      };
    case ATTENDANCE:
      return {
        ...state,
        attendance: action.payload,
      };

    case GET_STUDENT_DETAILS:
      return {
        ...state,
        getStudentDetails: action.payload,
      }
    case UPLOAD_PDF:
      return {
        ...state,
        uploading: false,
        successAlert: 'File uploaded successfully!',
        error: null,
      };
    case GET_PDF:
       return {
           ...state,
           pdfData: action.payload, 
      };
    case SET_ERRORS:
      return {
        ...state,
        uploading: false,
        successAlert: null,
        error: action.payload,
      };  

    default:
      return state;
  }
};

export default studentReducer;
