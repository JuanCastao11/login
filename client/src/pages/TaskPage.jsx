import {useAuth} from '../context/authContext'

const TaskPage = () => {

  const {user} = useAuth()
  console.log(user);
   return (
    <div>
      <h1>tasks</h1>
    </div>
  )
}

export default TaskPage
