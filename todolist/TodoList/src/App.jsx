import { useState } from 'react'


function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      Text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {id: 2,text: "Ir para a academia", categry: "Pessoal", isCmpleted: false},
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  return (
    <div className='app'>
      <h1>Lsita de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=>(
          <div className='todo'>
            <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
    
      </div>
    </div>
          <button>Completar</button>
          <button>X</button>
          </div>
          </div>
        ))}
         </div>
          </div>
  )


}

export default App
