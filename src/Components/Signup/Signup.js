import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = ({ setLoggedIn }) => {
    const history = useHistory();

    const [signUpForm, setSignUpForm] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tailwind-backend.herokuapp.com/account/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...signUpForm})
            });
            const data = await response.json();
            if (data.token) {
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", data.username);
                window.localStorage.setItem("firstName", data.firstName)
                setLoggedIn(true);
                history.push('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignUpChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.id]: e.target.value});
    }

    return (
        <div className="w-screen h-screen border-black border-2">
           <div className="border-black border-2 w-3/4 h-1/2 m-auto mt-10">
            <h1 className="text-4xl text-center my-6">Sign Up</h1>
            <form className="flex flex-col items-center" onSubmit={handleSignUp}>
                <div className="border-gray-500 border-2">
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="username">Username:</label>
                        <input className="border-gray-500 border-2" type="text" id="username" name="username" value={signUpForm.username} onChange={handleSignUpChange} required placeholder="Username" />
                    </div>
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="password">Password: </label>
                        <input className="border-gray-500 border-2" type="text" id="password" name="password" value={signUpForm.password} onChange={handleSignUpChange} required placeholder="Password" />
                    </div>
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="firstName">First Name: </label>
                        <input className="border-gray-500 border-2" type="text" id="firstName" name="firstName" value={signUpForm.firstName} onChange={handleSignUpChange} required placeholder="First Name" />
                    </div>
                    <div className="text-3xl">
                        <label className="mx-4" htmlFor="lastName">Last Name: </label>
                        <input className="border-gray-500 border-2" type="text" id="lastName" name="LastName" value={signUpForm.lastName} onChange={handleSignUpChange} required placeholder="Last Name" />
                    </div>
                    <input className="text-3xl border-gray-500 border-2 w-1/4 block mx-auto" type="submit" />
                </div>
            </form>
           </div>
        </div>
    )
}

export default Signup
