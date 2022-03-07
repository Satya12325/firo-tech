import axios from "axios";
import { 
    GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS
} from "./actionType";

const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST
  };
};

// action creator
const addTodoSuccess = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  };
};

const addTodoFailure = (error) => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  };
};

const addTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  const config = {
      url:" http://localhost:3000/todos",
      method: 'POST',
      data: payload
  }
  return axios(config)
    
    
    .then((res) => {
      dispatch(addTodoSuccess(res.data));
      dispatch(getTodo());
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(addTodoFailure(err));
    });
};




const getTodoRequest = () => {
    return {
      type: GET_TODO_REQUEST
    };
  };
  
  // action creator
  const getTodoSuccess = (payload) => {
    return {
      type: GET_TODO_SUCCESS,
      payload
    };
  };
  
  const getTodoFailure = (error) => {
    return {
      type: GET_TODO_FAILURE,
      payload: error
    };
  };
  
  const getTodo = () => (dispatch) => {
    dispatch(getTodoRequest());
    return axios
      .get(" http://localhost:3000/todos")
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTodoFailure(err));
      });
  };
  
  export { addTodo, getTodo };
  