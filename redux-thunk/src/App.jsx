import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from "react-redux";
import store from "./store/store";
import UserList from "./Component/UserList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <div>
      <h1>User Information App</h1>
      <UserList />
    </div>
  </Provider>
);
}

export default App
