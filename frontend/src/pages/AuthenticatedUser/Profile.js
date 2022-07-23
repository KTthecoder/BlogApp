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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '95%', height: '50vh'}}>
                <h1>User is authenticated</h1>
                <br/>
                {/* <h2>Token: {userToken}</h2>
                <br/> */}
                <p onClick={LogoutUser} style={{cursor: 'pointer', padding: '8px 20px', color: 'white', borderRadius: '5px', backgroundColor: 'rgb(15, 118, 173)'}}>Log out</p>
            </div>
        ) : (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
                <h1 style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>You are not authenticated</h1>
            </div>
        )}
       </>    
    );
}

export default Profile;
