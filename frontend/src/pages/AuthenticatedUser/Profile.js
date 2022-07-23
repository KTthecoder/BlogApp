import '../Home/Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Profile() {
    const [userToken, setUserToken] = useState("")
    const navigate  = useNavigate()

    function getToken() {
        const token = localStorage.getItem('token');
        setUserToken(token)
    }

    function LogoutUser() {
        localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => {
        getToken()
    }, [])

    return (
       <>
       {userToken ? (
            <div className="container">
                <h1>User is authenticated</h1>
                <br/>
                <h2>Token: {userToken}</h2>
                <br/>
                <p onClick={LogoutUser} style={{cursor: 'pointer'}}>Log out</p>
            </div>
        ) : (
            <div className="container">
                <h1>User is not authenticated</h1>
            </div>
        )}
       </>    
    );
}

export default Profile;
