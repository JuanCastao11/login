

function LoginPage() {

 

  return (
    <div>
        
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

export default LoginPage