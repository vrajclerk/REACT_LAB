//import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate();

        return (
            
                <nav>
                    <Link to={"/home"}>Home</Link>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink
                        to={"/feedback"}
                        style={({ isActive, isPending }) => ({
                            color: isActive || isPending ? 'brown' : 'blue',
                        })}
                    >
                    
                        Feedback
                    </NavLink>
                    <NavLink to={"/teacher/1?expertise=c"} state={{visited:"Teacher 1"}}>Teacher 1</NavLink>
                    <NavLink to={"/teacher/2?expertise=java"} >Teacher 2</NavLink>
                    <NavLink to={"/teacher/3?expertise=javaScript"} >Teacher 3</NavLink>
                    <button onClick={() => navigate('/home')}>Go to Home </button>
                </nav>
                
        );
    }

export default Navigation;
  