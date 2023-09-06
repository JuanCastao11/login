import {useForm} from 'react-hook-form'

const TaskFormPage = () => {

  const { register, handleSubmit } = useForm();


 // const onSubmit = handleSubmit((data) = {
  //  console.log(data)
 // })
  return (
    <>
     <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md "> 
     <form action="">
      <input type="text" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md" 
      placeholder="Title"/>
      <textarea rows="3" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md"></textarea>
      <button>
        SAVE
      </button>
     </form>
     </div>
    </>
  )
}

export default TaskFormPage
