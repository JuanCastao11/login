import {createContext, useContext, useState} from 'react'

const TaskContext = createContext();

export const userTasks = () =>{
    const context = useContext(TaskContext)

    if(!context){
        throw new Error('useTasks must be used within a TasksProvider')
    }

    return context;
}

export function TasksProvider({children}){
    const [taks, setTasks] = useState([]);


    return(
        <TaskContext.Provider value={{
            taks
            
            }}>
            {children}
        </TaskContext.Provider>
    )
}