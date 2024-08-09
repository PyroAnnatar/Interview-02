import Robot from "./app/components/Robot";
import "./styles.css";

import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (list.includes(`https://robohash.org/${input.trim()}`)) {
      window.alert("That robot is already in the list");
      setInput("");
      return;
    }
    if (input.trim() !== "") {
      setList((prev) => [...prev, `https://robohash.org/${input}`]);
      setInput("");
    }
  }

  function handleDelete(bot) {
    setList(list.filter((robot) => robot !== bot));
  }

  return (
    <div
      className={`${list.length > 0 ? "" : "grid place-items-center h-screen"}`}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex gap-1 justify-center mt-4`}
      >
        <input
          className="border-[1px] pl-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          value={input}
          name="input"
          id="input"
          placeholder="Generate Robot"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-2 py-1 bg-stone-200 hover:bg-stone-300 active:scale-x-110 active:scale-y-90 transition-transform duration-[5ms] shadow-md rounded font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 border-[1px] border-gray-400">
          Generate
        </button>
      </form>
      <div className={`${list.length > 0 ? "" : "hidden"}`}>
        {list.length > 0 && (
          <h1 className="text-2xl font-extrabold text-center my-4 ">
            Robot List
          </h1>
        )}
        <Robot list={list} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
export default App;
