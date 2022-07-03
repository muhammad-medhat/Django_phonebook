import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (  
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1 m-2">
                <i className="fas fa-tasks"></i>
            </span>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto m">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/todos">Todos List</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                
                                <span className="badge btn-primary">
                                    {props.numTODO}
                                </span>
                            }
                        </li>

                    </ul>
                </div>
                
            </nav>
        </>
    );
}
 
export default Navbar;


