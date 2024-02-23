import React ,{useState} from 'react';
import {connect} from 'react-redux';
import {login,logout} from '../store/login/actions';

const Login =({loggedInUsers,login,logout}) => {
    const [username, setUsername] = useState();

    const handleLogin =() =>{
        if(username && !loggedInUsers.includes(username)){
            login(username);
            setUsername("");
        }
    };
    const handleLogout =() =>{
        if(loggedInUsers.includes(username)){
            logout(username);
            setUsername("");
        }
        
    };
        
    return (
        <div>
            <h1>Login</h1>
            <input 
            type="text"
            placeholder='Enter username'
             value={username} 
             onChange={(e) => setUsername(e.target.value)}
              />
              {" "}
            <button onClick={handleLogin}>Login</button>
            {" "}
            <button onClick={handleLogout}>Logout</button>
            <div>
            <h2>Logged in users</h2>
            <ul>
                {loggedInUsers.map((user, index) =>( <li key={index}>{user}</li>))}
            </ul>
        </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    loggedInUsers: state.loggedInUsers,
});

const mapDispatchToProps = (dispatch) =>({
    login: (user) => dispatch(login(user)),
    logout: (user) => dispatch(logout(user)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);