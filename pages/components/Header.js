import React from 'react'
import { useAuth0 } from "../../src/react-auth0-spa";

const Header = () =>{
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
        <div className="header">My Todo App . {!isAuthenticated && (
            <button
                onClick={() =>
                    loginWithRedirect({})
                }
            >
                Log in
        </button>
        )}
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    )
}

export default Header