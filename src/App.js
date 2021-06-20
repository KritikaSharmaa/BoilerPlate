import React, { useState } from "react";
const App = () => {
  const [value, Setvalue] = useState(0);
  function IncValue() {
    Setvalue(value + 1);
  }
  function DecValue() {
    Setvalue(value - 1);
  }
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-52  md:w-2/6 bg-gray-900 w-5/6 ">
          <div className="h-2/6 w-3/6 bg-gray-300 rounded  m-auto mt-5 flex items-center justify-center text-3xl">
            {value}
          </div>
          <div className="h-3/6 w-5/6 mx-auto flex justify-between items-center">
            <button
              className="h-10 w-20 rounded-sm bg-gray-300 text-3xl font-semibold flex items-center justify-center hover:text-gray-600 focus:outline-none"
              onClick={IncValue}
            >
              +
            </button>
            <button
              className="h-10 w-20 rounded-sm bg-gray-300 text-5xl font-semibold flex items-center justify-center hover:text-gray-600 focus:outline-none"
              onClick={DecValue}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
