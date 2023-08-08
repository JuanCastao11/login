import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    const {register, 
      handleSubmit, 
      formState :{errors} } = useForm();
    const {signup, isAuthenticathed, errors: RegisterErrors } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
      if(isAuthenticathed) navigate('/tasks');
 }, [isAuthenticathed, navigate])

 const onSubmit = handleSubmit (async (values) => {
  signup(values)
 })
  return (
    <div className='bg-zinc-800 ma-10 max-w-md p-5 rounded-md'>

      {
        RegisterErrors.map((error,i) => (
          <div className='bg-red-500 text-white p-2' key={i}> 
          {error}
          </div>
        ))
      }
        <form onSubmit={onSubmit}>
            <input  type="text" {...register('username', {required:true})} placeholder='username'
             className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-5'/>
            { 
              errors.username && <p className='text-red-500'>Username is required</p>
            }
            <input  type="email" {...register('email', {required:true})} placeholder='email'
              className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-5'/>    

            { 
              errors.email && <p className='text-red-500'>Email is required</p>
            }          
        
            <input  type="password" {...register('password', {required:true})} placeholder='password'
              className='w-full bg-zinc-600 text-white px-4 rounded-md my-2 py-5'/>
                  { 
              errors.password && <p className='text-red-500'>Password is required</p>
            }
            <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded ">Register</button>
        </form>   

    </div>
  )
}

export default RegisterPage