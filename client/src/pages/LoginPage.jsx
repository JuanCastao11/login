import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";


function LoginPage() {

  const {register,handleSubmit, formState:{ errors }} = useForm()
  const { signin, errors: signinErros} = useAuth();


  const onSubmit = handleSubmit (async (data) => {
    signin(data);
   })

 

  return (

    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 ma-10 max-w-md p-5 rounded-md">
        {
        signinErros.map((error,i) => (
          <div className='bg-red-500 text-white p-2' key={i}> 
          {error}
          </div>
        ))
      }
        
        <form onSubmit={onSubmit}>
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
            <div className="flex justify-center p-2">
            <button type="submit" className="bg-red-700 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded ">Login</button>
            </div>
        </form>    


    </div>
    </div>
  
  )
}

export default LoginPage