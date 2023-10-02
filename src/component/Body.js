import React from "react";
import { playGame } from "../feature/random";

function Body() {
  return (
    <div>
      <h1 className="text-center font-bold text-pink-800 text-lg"> Tài xĩu </h1>
      <div className="text-center flex flex-row justify-around w-fit border-black m-auto pt-2">
        <div
          id="dice1"
          className="ml-2 border-2 border-solid border-black text-center p-2 w-10 h-10"
        >
          3
        </div>
        <div
          id="dice2"
          className=" ml-2 border-2 text-center border-black p-2 w-10 h-10"
        >
          3
        </div>
        <div
          id="dice3"
          className=" ml-2 border-2 border-solid border-black text-center p-2 w-10 h-10"
        >
          3
        </div>
      </div>
      {/* inra kee qua */}
      <div>
        <h2 id="tinh"></h2>
      </div>
      {/* dat cuoc  */}
      <div className=""></div>
      <label
        for="small"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Chọn cược
      </label>
      <select
        id="chonCuoc"
        class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>chọn cược</option>
        <option value="xiu">Xĩu</option>
        <option value="tai">Tài</option>
      </select>
      <button
        onClick={playGame}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Button
      </button>
      <div id="ketQ"></div>
    </div>
  );
}

export default Body;
