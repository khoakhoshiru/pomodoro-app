import React, { useEffect, useState } from "react";
import Task from "./Task";

function TodoList() {
  // Tạo biến state cho danh sách công việc và trạng thái công việc mới
  const savedTodoList = JSON.parse(localStorage.getItem("todo") || "[]");

  const [todoList, setTodoList] = useState([savedTodoList]);
  const [newTask, setNewTask] = useState("");
  // Tải dữ liệu từ Local Storage khi ứng dụng khởi chạy
  useEffect(() => {
    // const savedTodoList = JSON.parse(localStorage.getItem("todo") || "[]");
    setTodoList(savedTodoList);
  }, []);

  // Lưu dữ liệu vào Local Storage khi danh sách công việc thay đổi
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  // Hàm xử lý khi người dùng thay đổi nội dung công việc mới
  const handleChange = event => {
    setNewTask(event.target.value);
  };

  // Hàm thêm công việc mới
  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList([...todoList, task]);
      setNewTask(""); // Xóa nội dung ô nhập sau khi thêm công việc
    }
  };

  // Hàm xóa công việc
  const deleteTask = id => {
    setTodoList(todoList.filter(task => task.id !== id));
  };

  return (
    <div className="flex justify-center">
      <div className="border p-3 bg-blue-800 border-black rounded-lg w-1/2 h-1/2 mt-10">
        <h1 className="border-b-black text-white text-2xl font-bold mb-4">
          Danh sách công việc
        </h1>
        <input
          onChange={handleChange}
          value={newTask}
          className="rounded w-full py-2 px-3 mb-2"
          placeholder="Thêm công việc mới..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Thêm công việc
        </button>
        <div className="border bg-gray-50 mt-4 listTask">
          {/* Hiển thị danh sách công việc */}
          {todoList.map(task => {
            return (
              <Task
                key={task.id}
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
                // Các lớp CSS tùy chỉnh cho mỗi công việc
                className="bg-blue-100 py-2 px-3 mb-1 rounded"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
