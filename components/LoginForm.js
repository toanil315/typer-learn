import React from 'react'
import InputField from './InputField'

export default function LoginForm({setDisplayLoginForm}) {

  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-40">
        <div onClick={() => {setDisplayLoginForm(false)}} className="w-full h-full bg-opacity-40 bg-slate-700"></div>
        <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-1/3 my-10 rounded-xl pt-4 px-8 pb-8">
            <h2 className="text-gray-700 font-bold text-2xl mb-4 text-center">Login</h2>
            <div>
                <p className="text-gray-700 font-semibold text-md mb-3">User Name</p>
                <InputField className="form-input" type="text" placeholder="Example: anbede123..." />
            </div>
            <div>
                <p className="text-gray-700 font-semibold text-md mb-3">Password</p>
                <InputField className="form-input" type="text" placeholder="Input password" />
            </div>
            <button type='submit' className="font-semibold text-white bg-red-500 w-full mt-4 px-4 py-2 border-2 border-red-500 rounded-xl cursor-pointer hover:bg-red-600 transition duration-150 ease-out">Gét gô</button>
        </form>
    </div>
  )
}
