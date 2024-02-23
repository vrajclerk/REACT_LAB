import './App.css'
import { Provider } from 'react-redux'
import { LOGIN } from './store/login/actionType'
import store from './store/store'

function App() {
  

  return (
    <Provider store={store}>
    <div>
      <h1>Reract-Redux Login</h1>
      <LOGIN />
    </div>
    </Provider>
  )
}

export default App
