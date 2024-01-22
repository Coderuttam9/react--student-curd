import axios from "axios";
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

//Get data from server
export const getDateformApi = () => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_DATA_PENDING });
    const response = await axios.get("http://localhost:5555/students");
    dispatch({ type: GET_STUDENT_DATA_SUCCESSFULL, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_STUDENT_DATA_REJECTED });
  }
};

// Send data to the server
export const handleSendData = (data) => async (dispatch) => {
  try {
    dispatch({ type: SEND_DATA_PANDING });
    const response = await axios.post("http://localhost:5555/students", data);
    dispatch({ type: SEND_DATA_SUCCESSFULL, payload: response.data });
  } catch (error) {
    dispatch({ type: SEND_DATA_REJECTED });
  }
};

// Delete date from server
export const handleDeleteData = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETED_DATA_PANDING });
    await axios.delete(`http://localhost:5555/students/${id}`);
    dispatch({ type: DELETED_DATA_SUCCESSFULL, payload: id });
  } catch (error) {
    dispatch({ type: DELETED_DATA_REJECTED });
  }
};

// Edit date from server
export const handleEditData = (data) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_DATA_PANDING });
    await axios.patch(`http://localhost:5555/students/${data.id}`, data);
    dispatch({ type: EDIT_DATA_SUCCESSFULL, payload: data });
  } catch (error) {
    dispatch({ type: EDIT_DATA_REJECTED });
  }
};
