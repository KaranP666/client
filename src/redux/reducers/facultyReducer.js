import {
  ADD_TEST,
  ATTENDANCE_MARKED,
  FACULTY_LOGIN,
  GET_TEST,
  LOGOUT,
  MARKS_UPLOADED,
  UPDATE_FACULTY,
  UPDATE_PASSWORD,
  GET_PERTICULAR_STUDENT_DETAILS,
  UPLOAD_FACULTY_PDF
} from "../actionTypes";

const initialState = {
  pdfData: null,
  uploading: false,
  successAlert: null,
  error: null,
  authData: null,
  updatedPassword: false,
  updatedFaculty: false,
  testAdded: false,
  marksUploaded: false,
  attendanceUploaded: false,
  tests: [],
  student: null,
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACULTY_LOGIN:
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
    case UPDATE_FACULTY:
      return {
        ...state,
        updatedFaculty: action.payload,
      };
    case ADD_TEST:
      return {
        ...state,
        testAdded: action.payload,
      };
    case GET_TEST:
      return {
        ...state,
        tests: action.payload,
      };
    case MARKS_UPLOADED:
      return {
        ...state,
        marksUploaded: action.payload,
      };
    case ATTENDANCE_MARKED:
      return {
        ...state,
        attendanceUploaded: action.payload,
      };
    case GET_PERTICULAR_STUDENT_DETAILS:
      return {
        ...state,
        student: action.payload,
        error: null,
      };
    case UPLOAD_FACULTY_PDF:
      return {
        ...state,
        uploading: false,
        successAlert: 'File uploaded successfully!',
        error: null,
      };

    default:
      return state;
  }
};

export default facultyReducer;
