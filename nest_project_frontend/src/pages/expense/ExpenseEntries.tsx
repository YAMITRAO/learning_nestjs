import moment from "moment";
import React, { useState } from "react";
import { ExpenseEntriesProps_int } from "../../types/Expense";

const ExpenseEntries: React.FC<ExpenseEntriesProps_int> = ({
  expenseArray,
  incomeArray,
}) => {
  const [isExpense, setIsExpense] = useState(true);
  console.log("expense array is", expenseArray);
  console.log("income array is", incomeArray);
  return (
    <div className="w-full h-full ">
      {/* entries container */}
      <div className="h-full w-full flex flex-col gap-1 p-2 ">
        {/* expense entry */}
        <div className="w-full h-fit text-center flex flex-col ">
          {/* title */}
          <div className="font-medium text-xl font-mono my-2">Entries</div>
          {/* filter selection */}
          <div className="w-fit flex gap-2 py-2 ">
            {/* expense selection */}
            <div className="w-fit flex gap-1">
              <input
                type="radio"
                name="expenseType"
                value="expense"
                className="peer"
                checked={isExpense}
                onChange={() => setIsExpense(true)}
              />
              <label>Expense</label>
            </div>

            {/* income selection */}
            <div className="w-fit flex gap-1">
              <input
                type="radio"
                name="expenseType"
                value="income"
                className="peer"
                checked={!isExpense}
                onChange={() => setIsExpense(false)}
              />
              <label>Income</label>
            </div>
          </div>
          {/* table */}
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border">Sr</th>
                <th className="border">Date</th>
                <th className="border">Amount</th>
                <th className="border">Purpose</th>
                <th className="border">Category</th>
              </tr>
            </thead>
            <tbody>
              {(isExpense ? expenseArray : incomeArray).map((val, index) => {
                return (
                  <tr
                    key={val.expenseDesc + index}
                    className="odd:bg-slate-600 odd:text-slate-200 hover:bg-slate-300 hover:text-slate-900 even:bg-[#d4a373] even:text-slate-800"
                  >
                    <td className="border">{index + 1}</td>
                    <td className="border">
                      {moment(val.createdAt).format("do MMM  yy")}
                    </td>
                    <td className="border">{val.expenseAmount}</td>
                    <td className="border">{val.expenseDesc}</td>
                    <td className="border">{val.expenseCategory}</td>
                  </tr>
                );
              })}
              {/* map will be used for dynamic data */}

              <tr className="odd:bg-slate-600 odd:text-slate-200 hover:bg-slate-300 hover:text-slate-900 even:bg-[#d4a373] even:text-slate-800">
                <td className="border">2</td>
                <td className="border">
                  {moment(new Date()).format("do MMM  yy")}
                </td>
                <td className="border">500</td>
                <td className="border">Tea</td>
                <td className="border">food</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseEntries;
