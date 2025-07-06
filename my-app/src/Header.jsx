import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

    function RenderButton() {
        if(props.isLoggedIn == true) {
            return <button onClick={ () => { props.setIsLoggedIn(false)}}>Logout</button>
        } else {
            return <button onClick={ () => { props.setIsLoggedIn(true)}}>Login</button>
        }
    }

  return (
    
    <div id="header">
        <NavLink activeClassName="active" to="/">Home</NavLink>
        {props.isLoggedIn == true ? <> <NavLink activeClassName="active" to="/product">Products</NavLink>
        <NavLink activeClassName="active" to="/about">About</NavLink> </> : ""}
        <RenderButton />
    </div>
  )
}

export default Header