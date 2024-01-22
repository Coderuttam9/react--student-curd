import {
  DELETED_DATA_PANDING,
  DELETED_DATA_REJECTED,
  DELETED_DATA_SUCCESSFULL,
  EDIT_DATA_PANDING,
  EDIT_DATA_REJECTED,
  EDIT_DATA_SUCCESSFULL,
  GET_STUDENT_DATA_PENDING,
  GET_STUDENT_DATA_REJECTED,
  GET_STUDENT_DATA_SUCCESSFULL,
  SEND_DATA_PANDING,
  SEND_DATA_REJECTED,
  SEND_DATA_SUCCESSFULL,
} from "./actionType";
import initialState from "./initialstate";

// create student reducer
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    //Get data from server
    case GET_STUDENT_DATA_PENDING:
      return {
        ...state,
        isloading: true,
      };
    case GET_STUDENT_DATA_SUCCESSFULL:
      return {
        ...state,
        students: action.payload,
        isloading: false,
      };

    case GET_STUDENT_DATA_REJECTED:
      return {
        ...state,
        isloading: false,
        iserror: "error student",
      };

    // Send data to the server
    case SEND_DATA_PANDING:
      return {
        ...state,
        isloading: true,
      };
    case SEND_DATA_SUCCESSFULL:
      return {
        ...state,
        isloading: false,
        students: [...state.students, action.payload],
      };
    case SEND_DATA_REJECTED:
      return {
        ...state,
        iserror: true,
      };

    // Deleted date form state and server
    case DELETED_DATA_PANDING:
      return {
        ...state,
        isloading: true,
      };
    case DELETED_DATA_SUCCESSFULL:
      return {
        ...state,
        students: state.students.filter((data) => data.id != action.payload),
        isloading: false,
      };
    case DELETED_DATA_REJECTED:
      return {
        ...state,
        iserror: true,
      };

    case EDIT_DATA_PANDING:
      return {
        ...state,
        isloading: true,
      };
    case EDIT_DATA_SUCCESSFULL:
      return {
        ...state,
        students: state.students.map((data) => {
          if (data.id == action.payload.id) {
            return action.payload;
          } else {
            return data;
          }
        }),
      };
    case EDIT_DATA_REJECTED:
      return {
        ...state,
        iserror: true,
      };
    default:
      return state;
  }
};

export default studentReducer;
