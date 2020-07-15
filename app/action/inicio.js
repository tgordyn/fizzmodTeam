import axios from "axios";

const getSession = (id) => ({
  type: "GET_SESSION",
  list,
});

const headers = {
    headers:{
        'Content-Type': 'application/json',
        'janis-api-key' : 'Bearer',
        'janis-api-secret' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGRiZTg4NmNkYTk2OGVkYzMwMDgxOCIsImNsaWVudENvZGUiOiJwbGF0YWZvcm1hNS0yMDIwIiwiaXNEZXYiOmZhbHNlLCJleHAiOjE1OTUwMDEwOTYsImlhdCI6MTU5NDgyODI5Nn0.iMIiWM0axLUrZbnhcrbnbHhX_lBLO-gocavequcZw7Y',
    }
}

export const fetchSession = (id) => (dispatch) => {
  return axios
    .get(`https://picking.janisdev.in/api/session/${id}`, headers)
    .then((list) => {
      console.log("SESSION LISTA DEVUELTA DE BACKEND: ", list)
      dispatch(getSession(list))}
      );
};
