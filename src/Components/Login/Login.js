import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ setLoggedIn }) => {
    const history = useHistory();

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tailwind-backend.herokuapp.com/account/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...loginForm})
            });
            const data = await response.json();
            if (data.token) {
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", data.username);
                window.localStorage.setItem("firstName", data.firstName);
                setLoggedIn(true);
                history.push('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleLoginChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.id]: e.target.value});
    }

    return (
        <div className="w-screen h-screen border-black border-2">
           <div className="border-black border-2 w-3/4 h-1/2 m-auto mt-10">
            <h1 className="text-4xl text-center my-6">Login</h1>
            <form className="flex flex-col items-center" onSubmit={handleLogin}>
                <div className="border-gray-500 border-2">
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="username">Username:</label>
                        <input className="border-gray-500 border-2" type="text" id="username" name="username" value={loginForm.username} onChange={handleLoginChange} required placeholder="Username" />
                    </div>
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="password">Password: </label>
                        <input className="border-gray-500 border-2" type="password" id="password" name="password" value={loginForm.password} onChange={handleLoginChange} required placeholder="Password" />
                    </div>
                    <input className="text-3xl border-gray-500 border-2 w-1/4 block mx-auto" type="submit" />
                </div>
                <h2>No Account?</h2>
                <Link to="/signup">Sign Up</Link>
            </form>
           </div>
        </div>
    )
}

export default Login