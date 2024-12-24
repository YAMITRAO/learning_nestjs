import { useEffect, useState } from "react";
import { ExpenseDetailsProps_int } from "../../types/Expense";
import ExpensePiChart from "./ExpensePiChart";

const ExpenseDetails: React.FC<ExpenseDetailsProps_int> = ({
  totalIncome,
  totalExpense,
  categoryStack,
}) => {
  const [modifiedcategoryList, setModifiedcategoryList] = useState<any>();
  console.log("Category stack is ", categoryStack);

  useEffect(() => {
    console.log(Object.entries(categoryStack));
    let nameValueArr: any[] = [];
    Object.entries(categoryStack).map((val) => {
      let data = { name: val[0], value: val[1] };
      nameValueArr.push(data);
    });
    console.log("nameValueArr is", nameValueArr);
    setModifiedcategoryList(nameValueArr);
  }, [categoryStack]);

  return (
    <div className=" w-[400px] h-auto  flex flex-col gap-2 ">
      {modifiedcategoryList?.length > 0 && (
        <div className="w-full h-[300px]">
          {/* title graph visible only when values are avialable */}
          {modifiedcategoryList?.length > 0 && (
            <div className="w-full text-center text-lg font-mono text-slate-400 bg-gradient-to-r  from-[#dde1e2] to-[#2bacc3] bg-clip-text text-transparent mb-2">
              Category Graph
            </div>
          )}
          {/* pi graph */}
          <ExpensePiChart data={modifiedcategoryList} />
        </div>
      )}

      {/* details container */}
      {false && (
        <div className="w-full  h-full my-auto  mx-auto flex gap-2 justify-center text-lg font-medium border">
          {/* total Imcome */}
          <div className="w-full flex flex-col gap items-center bg-green-700 p-1 py-3 rounded ">
            <span>Total Income</span>
            <span>&#8377; {totalIncome}</span>
          </div>
          {/* total expense */}
          <div className="w-full flex flex-col gap items-center bg-yellow-700 p-1 py-3 rounded ">
            <span>Total Expense</span>
            <span>&#8377; {totalExpense}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseDetails;
