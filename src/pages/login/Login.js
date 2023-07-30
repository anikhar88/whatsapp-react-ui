import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from '../../recoil/atom/userAtom';
import toast, { Toaster } from 'react-hot-toast';
import { socket } from '../../socketConnection/socketConn';
import { loggedInUsers } from '../../recoil/atom/loginUserHistory'
const userDetailItem = {
    name: "",
    password: ""
}
const Login = () => {
    const [logginUsers, setLoggedInUsers] = useRecoilState(loggedInUsers);

    const [loginCredientials, setLoginCredientials] = useState(userDetailItem);
    const [loggedInUser, setLoggedInUser] = useRecoilState(userAtom);
    const navigate = useNavigate();

    const setUserDetailData = (e) => {
        setLoginCredientials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleLogin = useCallback(
        (e) => {
            e.preventDefault();
            setLoggedInUser(loginCredientials);
            socket.emit("newuser", { name: loginCredientials.name, id: uuidv4() })
            socket.on('loginuser', (data) => {
                console.log(data);
                setLoggedInUsers((prev) => [...prev, data])
            })
            toast.success("Login successfully")
            setTimeout(() => {
                navigate("/")
            }, 2000);
        },
        [loginCredientials, navigate],
    )
    return (
        <div>
            <section className="text-gray-600 body-font">
                <Toaster />
                <div className="container px-5 py-24 flex justify-center items-center">

                    <form autoComplete="off" onSubmit={(e) => handleLogin(e)} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input onChange={(e) => setUserDetailData(e)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={(e) => setUserDetailData(e)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white bg-[#262626] border-0 py-2 px-8 focus:outline-none hover:bg-[#3e3e3e] rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">If donot have an accout go to the <Link to={'/auth/signup'} className='text-blue-500 hover:underline '>sign up</Link></p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login