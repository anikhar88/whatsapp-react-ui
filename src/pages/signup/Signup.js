import React, { useCallback, useState } from 'react'
export const userDetailItem = {
    name: "",
    email: "",
    password: ""
}
const Signup = () => {
    const [userDetail, setUserDetail] = useState(userDetailItem);
    const setUserDetailData = (e) => {
        setUserDetail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSignup = useCallback(
        (e) => {
            e.preventDefault();
            console.log(userDetail);
        },
        [userDetail],
    )

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 flex justify-center items-center">

                    <form autoComplete="off" onSubmit={(e) => handleSignup(e)} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input onChange={(e) => setUserDetailData(e)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="off" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={(e) => setUserDetailData(e)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="off" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={(e) => setUserDetailData(e)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autoComplete="off" />
                        </div>
                        <button type='submit' className="text-white bg-[#262626] border-0 py-2 px-8 focus:outline-none hover:bg-[#3e3e3e] rounded text-lg">Button</button>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Signup