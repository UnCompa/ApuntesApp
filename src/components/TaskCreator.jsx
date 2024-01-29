/* eslint-disable react/prop-types */
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import useStore from './../store/store'

export const TaskCreator = () => {

    const addTask = useStore((state) => state.addTask);

    const [newcontent, setNewcontent] = useState('')
    const [newtitle, setNewtitle] = useState('')

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
      };

    const handleSumbit = (e)=>{
        e.preventDefault()

        const NewTarea = {
            id: uuidv4(),
            title: newtitle || 'Titulo',
            content: newcontent || 'Contenido',
            date: `Creado el ${formatDate(new Date())}`
        }
        localStorage.setItem('tasks', NewTarea)
        addTask(NewTarea)
        setNewtitle('')
        setNewcontent('')
    }
  return (
    <div className="bg-zinc-300 p-2 w-96">
        <h2 className="text-xl">Crea tu tarea</h2>
        <form className="flex flex-col" onSubmit={e => handleSumbit(e)}>
            <input type="text" placeholder="Ingrese el titulo" onChange={e => setNewtitle(e.target.value)}/>
            <input type="text" placeholder="Ingrese su tarea" onChange={e => setNewcontent(e.target.value)}/>
            <button className="bg-green-500 px-4 py-2 my-2 rounded">Agregar tarea</button>
        </form>
    </div>
  )
}
