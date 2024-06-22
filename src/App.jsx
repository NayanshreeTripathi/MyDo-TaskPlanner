import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <Navbar />
      <div className="container w-[155vw] h-[155vh] overflow-y-scroll md:overflow-y-scroll px-10  mx-6  flex flex-col  md:mx-96 md:max-w-screen-md md:my-5  md:rounded-xl md:p-5 bg-white border-violet-800 border-2 md:h-[88vh] md:hover:shadow-2xl">
        <div className="addTdo ">
          <h2 className=' my-5 md:my-2 text-2xl md:text-lg font-bold text-pink-600 hover:font-medium cursor-pointer'>Add TODO</h2>
          <input onChange={handleChange} value={todo} className='border-2 border-violet-800 rounded-md w-[100vw] md:w-3/4' type="text" />
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-orange-100 disabled:bg-orange-100 p-1 px-3 rounded-md text-violet-800 hover:font-bold hover:bg-orange-50 mx-5'>Save</button>
        </div>

        <div className="toggle-finished md:my-4 my-6 ">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} className='appearance-none mx-4 rounded-sm  bg-white border-pink-600 text-pink-600 focus:ring-0 ' />
          <label className='mx-2 text-xl text-violet-800'>Show Completed DO's</label>
        </div>

        <h2 className=' text-2xl md:text-lg font-bold text-pink-600 md:hover:font-medium cursor-pointer'>My TODO</h2>
        <div className="todos">
          {todos.length === 0 && <div className='text-pink-600 font-serif mx-40 my-40  md:my-11 md:mx-64'>Add DO'S to plan the day</div>}
          {todos.map(item => (
            (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-between my-10 w-[130vw] md:w-3/4 md:my-4 bg-orange-50 rounded-lg py-2">
                <div className={item.isCompleted ? "line-through" : ""}>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" className=' appearance-none mx-6 rounded-sm bg-white border-pink-600 text-violet-800  focus:ring-0 '  checked={item.isCompleted} />
                  <span />
                  {item.todo}
                </div>
                <div className="buttons flex h-full">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-orange-100 p-1 px-3 rounded-md text-violet-800 hover:font-bold hover:bg-orange-50 mx-1'>Edit</button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-orange-100 p-1 px-3 rounded-md text-violet-800 hover:font-bold hover:bg-orange-50 mx-1'>Delete</button>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
