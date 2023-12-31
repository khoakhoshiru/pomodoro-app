import React from "react";

const Task = props => {
  return (
    <div className="bg-slate-400 flex justify-between">
      {" "}
      <p className="bg-slate-400 px-4 py-2 rounded text-start mt-1 w-screen ">
        {props.taskName}
      </p>
      <button
        //khi truyen vao tham so phai dung ()=>{}
        onClick={() => props.deleteTask(props.id)}
        className="inline-flex text-end  items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Delete
      </button>
    </div>
  );
};

export default Task;
