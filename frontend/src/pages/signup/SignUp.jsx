import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { loading, signup } = useSignup();
  
  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-400'>
                Sign Up
                <span className='text-orange-400'> StreamLine</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Full Name</span>
                    </label>
                    <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' 
                        value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>

                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Username</span>
                    </label>
                    <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
                        value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-400'>Password</span>
                    </label>
                    <input 
                        type='password'
                        placeholder="Enter password"
                        className='w-full input input-bordered h-10'
                        value={inputs.password} 
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-400'>Confirm Password</span>
                    </label>
                    <input 
                        type='password'
                        placeholder="Confirm password"
                        className='w-full input input-bordered h-10'
                        value={inputs.confirmPassword} 
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to= {"/login"}
                    className='text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block'
                    href='#'
                >
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </div>

            </form>
        </div>
    
    </div>
  )
}

export default SignUp


/* STARTER CODE FOR SIGNUP PAGE

import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-400'>
                Sign Up
                <span className='text-blue-200'> StreamLine</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Full Name</span>
                    </label>
                    <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-400'>Username</span>
                    </label>
                    <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-400'>Password</span>
                    </label>
                    <input 
                        type='password'
                        placeholder="Enter password"
                        className='w-full input input-bordered h-10'
                    />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-400'>Confirm Password</span>
                    </label>
                    <input 
                        type='password'
                        placeholder="Confirm password"
                        className='w-full input input-bordered h-10'
                    />
                </div>

                <GenderCheckbox />

                <a 
                    className='text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block'
                    href='#'
                >
                    Already have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                </div>

            </form>
        </div>
    
    </div>
  )
}

export default SignUp
*/