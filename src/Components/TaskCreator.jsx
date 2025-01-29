import { useState, useEffect } from "react";

export const TaskCreator = ({ CreateTask }) => {
  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateTask(input);

    setInput("");
  };

  return (
    <form className="w-full flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a new task"
        className="outline-none bg-transparent border-b border-gray-300 text-sm w-1/5  "
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-slate-500 px-3 rounded-xl hover:transition-all hover:bg-blue-500 hover:duration-500 hover:ease-in-out">
        save task
      </button>
    </form>
  );
};
