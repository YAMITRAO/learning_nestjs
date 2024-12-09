import { useState } from "react";

const ExpenseForm = () => {
  const [categoryList] = useState([
    "Select",
    "Select1",
    "Select2",
    "Select3",
    "Select4",
  ]);
  return (
    <div className="w-fit p-2">
      {/* Form container */}
      <div className="dark:bg-slate-100 dark:text-slate-700 w-[400px] p-4 rounded">
        <form className="w-full">
          {/* top to select income or expense */}
          <div className="flex gap-4 justify-center">
            {/* expense selection */}
            <div className="flex gap-1">
              <input
                type="radio"
                name="expenseType"
                value=""
                className="peer"
              />
              <label className="text-slate-500 font-medium  peer-focus:text-slate-600 text-center ">
                Expense
              </label>
            </div>

            {/* income selection */}
            <div className="flex gap-1">
              <input
                type="radio"
                name="expenseType"
                value=""
                className="peer"
              />
              <label className="text-slate-500 font-medium  peer-focus:text-slate-600 text-center ">
                Income
              </label>
            </div>
          </div>

          {/* expense entries */}
          <div className="w-full">
            {/* amount */}
            <div className="flex flex-row-reverse items-center gap-2 p-1 mt-2">
              <input
                type="number"
                name="expenseAmount"
                className="w-full py-1 border-b-slate-500  border-b bg-transparent outline-none peer focus:border-b-slate-600"
              />
              <label className="w-[25%] text-slate-500  peer-focus:text-slate-600 text-center ">
                Amount
              </label>
            </div>
            {/* date */}
            <div className="flex flex-row-reverse items-center gap-2 p-1 mt-2">
              <input
                type="date"
                name="expenseDate"
                className="w-full py-1 border-b-slate-500  border-b bg-transparent outline-none peer focus:border-b-slate-600 placeholder:font-medium px-1"
              />
              <label className="w-[25%] text-slate-500   peer-focus:text-slate-600 text-center">
                Date
              </label>
            </div>
            {/* category */}
            <div className="flex flex-row-reverse items-center gap-2 p-1 mt-2">
              <select
                className="w-full  py-1 border-b-slate-500  border-b bg-transparent outline-none peer focus:border-b-slate-600"
                name="expenseCategory"
              >
                {categoryList?.map((val) => {
                  return <option>{val}</option>;
                })}
              </select>
              <label className="w-[25%] text-slate-500 peer-focus:text-slate-600 text-center px-1">
                Category
              </label>
            </div>

            {/* description */}
            <div className="flex flex-row-reverse items-center gap-2 p-1 mt-2">
              <input
                type="text"
                name="expenseDesc"
                className="w-full py-1 border-b-slate-500  border-b bg-transparent outline-none peer focus:border-b-slate-600 placeholder:font-medium px-1"
              />
              <label className="w-[25%] text-slate-500   peer-focus:text-slate-600 text-center">
                Description
              </label>
            </div>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="p-1 w-full bg-green-700 hover:bg-green-800 transition-all mt-2 rounded text-center border-none text-slate-100 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
