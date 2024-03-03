import React, { useState, useEffect, useReducer, createContext, useContext } from 'react';
import axios from 'axios';

// Context and Reducer Setup
const AppContext = createContext();

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const actionTypes = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case actionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Component for making API call and displaying user data
const UserList = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: actionTypes.FETCH_USERS_REQUEST });

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: actionTypes.FETCH_USERS_ERROR, payload: 'Error fetching users' });
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {state.users.length > 0 && (
        <ul>
          {state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main App component using Context Provider
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>React Functional Components with API Call and Context</h1>
        <UserList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
