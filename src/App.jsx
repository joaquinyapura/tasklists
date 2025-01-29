import { useEffect, useState } from "react";
import { TaskCreator } from "./Components/TaskCreator";

function App() {
  const [tasksList, setTasksList] = useState([]);

  function CreateTask(taskName) {
    if (!tasksList.find((tarea) => tarea.name === taskName)) {
      setTasksList([...tasksList, { name: taskName, done: false }]);
    }
  }

  useEffect(() => {
    const valores = JSON.parse(localStorage.getItem("tasklist"));

    setTasksList(valores);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasksList));
  }, [tasksList]);

  function handleDelete(e) {
    const objetoEliminado = e.target.id;
    const updatedTasks = tasksList.filter(
      (task) => task.name !== objetoEliminado
    );
    setTasksList(updatedTasks);
  }

  return (
    <div className=" w-full h-screen bg-slate-800 text-white">
      <div className="w-full justify-center flex p-20">
        <h1 className="text-6xl font-bold">TaskLists</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-20 space-x-3">
        <TaskCreator CreateTask={CreateTask} handleDelete={handleDelete} />

        {tasksList.map((task) => (
          <div
            key={task.name}
            className="font-bold p-2 bg-slate-500 rounded-xl w-1/3 flex justify-between mt-2"
          >
            <p>{task.name}</p>
            <button onClick={handleDelete}>
              <img src="x.svg" className="w-5" id={task.name} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
