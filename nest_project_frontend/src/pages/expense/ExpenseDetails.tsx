import { useState } from "react";
// import { MdOutlineDevicesOther } from "react-icons/md";
import { MdOutlineDevicesOther } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { CgGirl } from "react-icons/cg";
import { MdCastForEducation } from "react-icons/md";
import { Category_type, ExpenseDetailsProps_int } from "../../types/Expense";

const ExpenseDetails: React.FC<ExpenseDetailsProps_int> = ({
  totalIncome,
  totalExpense,
  categoryStack,
}) => {
  const [categoryList] = useState([
    { name: "other", icon: <MdOutlineDevicesOther />, stack: 80 },
    { name: "households", icon: <IoHome />, stack: 80 },
    { name: "food", icon: <IoFastFoodOutline />, stack: 60 },
    { name: "fashion", icon: <GiClothes />, stack: 100 },
    { name: "beauty", icon: <CgGirl />, stack: 67 },
    { name: "education", icon: <MdCastForEducation />, stack: 45 },
  ]);

  return (
    <div className="w-full h-auto p-2 flex flex-col gap-2">
      {/* graph container */}
      <div className="w-full h-auto  pt-4 px-2">
        <div className="w-full text-center text-lg font-mono text-slate-400 bg-gradient-to-r  from-[#bc4749] to-[#31572c] bg-clip-text text-transparent">
          Expense Graph
        </div>
        {/* height provider */}
        <div className="w-full max-h-[180px] flex items-end gap-1   ">
          {/* graph title */}
          {/* different graphs */}
          {categoryList.map((val) => {
            // console.log("test print is:-", categoryStack[val.name]);
            const category = val.name as Category_type;

            let stackValue = (categoryStack[category] * 100) / totalExpense;
            console.log("Total expense", stackValue);
            return (
              <div
                key={val.name}
                className="h-auto w-full flex flex-col gap-1 justify-end items-center "
                title={`${stackValue.toFixed(2)}% , ${categoryStack[category]}`}
              >
                {/* graph bar icon */}
                <div
                  className=" text-3xl text-[rgb(121,121,212)] text-ellipsis truncate overflow-hidden "
                  style={{
                    color:
                      stackValue >= 90
                        ? "#bc4749"
                        : stackValue < 90 && stackValue >= 80
                        ? "#ce7a7b"
                        : stackValue < 80 && stackValue >= 70
                        ? "#cc9202"
                        : stackValue < 70 && stackValue >= 60
                        ? "#bc6c25"
                        : stackValue < 60 && stackValue >= 50
                        ? "#4cc9f0"
                        : stackValue < 50 && stackValue >= 40
                        ? "#003566"
                        : stackValue < 40 && stackValue >= 30
                        ? "#"
                        : stackValue < 30 && stackValue >= 20
                        ? "#748c3c"
                        : stackValue < 20 && stackValue >= 10
                        ? "#6a994e"
                        : stackValue < 10 && stackValue >= 7
                        ? "#3d405b"
                        : stackValue < 7 && stackValue >= 4
                        ? "#06d6a0"
                        : stackValue < 4 && stackValue >= 1
                        ? "#582f0e"
                        : "",
                  }}
                >
                  {val.icon}
                </div>
                {/* graph bar */}
                <div
                  className={`w-full  text-sm font-mono font-medium  bg-[rgba(121,121,212)] flex justify-center items-center rounded-t text-ellipsis truncate`}
                  style={{
                    height: `${2 * stackValue}px`,
                    background:
                      stackValue >= 90
                        ? "#bc4749"
                        : stackValue < 90 && stackValue >= 80
                        ? "#ce7a7b"
                        : stackValue < 80 && stackValue >= 70
                        ? "#cc9202"
                        : stackValue < 70 && stackValue >= 60
                        ? "#bc6c25"
                        : stackValue < 60 && stackValue >= 50
                        ? "#4cc9f0"
                        : stackValue < 50 && stackValue >= 40
                        ? "#003566"
                        : stackValue < 40 && stackValue >= 30
                        ? "#"
                        : stackValue < 30 && stackValue >= 20
                        ? "#748c3c"
                        : stackValue < 20 && stackValue >= 10
                        ? "#6a994e"
                        : stackValue < 10 && stackValue >= 7
                        ? "#3d405b"
                        : stackValue < 7 && stackValue >= 4
                        ? "#06d6a0"
                        : stackValue < 4 && stackValue >= 1
                        ? "#582f0e"
                        : "",
                  }}
                >
                  {/* title vertical */}
                  <div className="h-fit w-fit flex  overflow-hidden text-ellipsis truncate  -rotate-90 ">
                    {val.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* details container */}
      <div className="w-full flex gap-2 justify-center text-lg font-medium">
        {/* total Imcome */}
        <div className="w-full flex flex-col gap items-center bg-green-700 p-1 rounded ">
          <span>Total Income</span>
          <span>&#8377; {totalIncome}</span>
        </div>
        {/* total expense */}
        <div className="w-full flex flex-col gap items-center bg-yellow-700 p-1 rounded ">
          <span>Total Expense</span>
          <span>&#8377; {totalExpense}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
