import React from "react";

const Robot = ({ list, handleDelete }) => {
  return (
    <ul className="flex flex-wrap gap-4 justify-center text-center">
      {list.map((robot) => (
        <li key={robot}>
          <img
            src={robot}
            alt={robot}
            key={robot}
            className="shadow-md bg-white rounded-lg mb-2"
            onClick={() => handleDelete(robot)}
          />
          <span className="text-lg">{robot.split("/")[3]}</span>
        </li>
      ))}
    </ul>
  );
};

export default Robot;
