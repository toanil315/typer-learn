import React, {useState} from 'react'
import InputField from './InputField'

export default function LoginForm({setDisplayLoginForm}) {

  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: ""
  })

  const [error, setError] = useState({
    userName: "",
    password: ""
  })

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    })
    if(e.target.value.trim() === "") {
      setError({
        ...error,
        [e.target.name]: `*${e.target.name} is required!`
      })
    }
    else {
      setError({
        ...error,
        [e.target.name]: ""
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!error.userName && !error.password) {
      console.log(loginInfo)
    }
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-40">
        <div onClick={() => {setDisplayLoginForm(false)}} className="w-full h-full bg-opacity-40 bg-slate-700"></div>
        <form onSubmit={handleSubmit} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white w-1/3 my-10 rounded-xl pt-4 px-8 pb-8">
            <h2 className="text-gray-700 font-bold text-2xl mb-4 text-center">Login</h2>
            <div>
                <p className="text-gray-700 font-semibold text-md mb-3">User Name</p>
                <InputField onChange={handleChange} name="userName" value={loginInfo.userName} className="form-input" type="text" placeholder="Example: anbede123..." />
                <p className="text-sm text-red-500 font-semibold mb-2">{error.userName}</p>
            </div>
            <div>
                <p className="text-gray-700 font-semibold text-md mb-3">Password</p>
                <InputField onChange={handleChange} name="password" value={loginInfo.password} className="form-input" type="text" placeholder="Input password" />
                <p className="text-sm text-red-500 font-semibold mb-2">{error.password}</p>
            </div>
            <button type='submit' className="font-semibold text-white bg-red-500 w-full mt-4 px-4 py-2 border-2 border-red-500 rounded-xl cursor-pointer hover:bg-red-600 transition duration-150 ease-out">Gét gô</button>
        </form>
    </div>
  )
}
