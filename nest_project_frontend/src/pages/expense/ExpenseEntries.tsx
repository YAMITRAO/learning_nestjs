import React, { useState } from "react";
import { ExpenseEntriesProps_int } from "../../types/Expense";
import EntryCard from "./EntryCard";
import {
  categoryListArray,
  categoryListArrayIncome,
} from "../../helper/CtaegotyList";

const ExpenseEntries: React.FC<ExpenseEntriesProps_int> = ({
  expenseArray,
  incomeArray,
  onTypeSelection,
  callBack,
}) => {
  const [isExpense, setIsExpense] = useState(true);
  const [categoryList, setCategoryList] = useState([...categoryListArray]);
  console.log("expense array is", expenseArray);
  console.log("income array is", incomeArray);

  return (
    <div className="w-full h-full  mt-4 ">
      {/* entries container */}
      <div className="h-full w-full flex flex-col gap-1  ">
        {/* expense entry */}
        <div className="w-full h-fit text-center flex flex-col ">
          {/* title */}
          <div className="font-medium text-xl font-mono ">Entries</div>
          {/* filter selection */}
          <div className="w-fit flex gap-2 mb-1 ">
            {/* expense selection */}
            <div className="w-fit flex gap-1">
              <input
                type="radio"
                name="expenseType"
                value="expense"
                className="peer"
                checked={isExpense}
                onChange={() => {
                  setIsExpense(true);
                  // setting category list according to expense and that is used at the edit entry time
                  setCategoryList([...categoryListArray]);
                  // to chnage graph from expense component
                  onTypeSelection(true);
                }}
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
                onChange={() => {
                  setIsExpense(false);
                  // setting category list according to 'income' and that is used at the edit entry time
                  setCategoryList([...categoryListArrayIncome]);
                  onTypeSelection(false);
                }}
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
                <th className="border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(isExpense ? expenseArray : incomeArray).map((val, index) => {
                return (
                  <EntryCard
                    categoryListArr={categoryList}
                    val={val}
                    index={index}
                    key={val.expenseDesc + index}
                    callBack={callBack}
                  />
                );
              })}
              {/* map will be used for dynamic data */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseEntries;
