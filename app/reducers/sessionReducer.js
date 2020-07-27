const initialState = {
  tokenSession: {},
  sessionId: '',
  sessionPicking:{},
  booleano:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SESSION':
      localStorage.setItem('token' , action.token.token )
      return { ...state, tokenSession: action.token };
    case 'GET_SESSIONID':
      return { ...state, sessionId: action.sessionId };
    case 'GET_SESSIONPICKING':
      return {...state , sessionPicking:action.session};
    case 'SET_BOOLEANO' : 
      return {...state , booleano: action.booleano }
    default:
      return state;
  }
};
