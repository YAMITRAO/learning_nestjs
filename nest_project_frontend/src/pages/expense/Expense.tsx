import { useEffect, useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseForm from "./ExpenseForm";
import axiosInt from "../../helper/ApiInstance";
import { ApiResponse } from "../../types/ApiTypes";
import { Category_type, SingleExpense } from "../../types/Expense";
import ExpenseEntries from "./ExpenseEntries";
import ExpensePiChart from "./ExpensePiChart";

const Expense = () => {
  const [expenseGetData, setExpenseGetData] = useState<SingleExpense[]>();
  const [incomeGetData, setIncomeGetData] = useState<SingleExpense[]>();
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [categoryStack, setCategotyStack] = useState({
    food: 0,
    education: 0,
    other: 0,
    beauty: 0,
    households: 0,
    fashion: 0,
  });
  const getExpenseData = async () => {
    try {
      let response = await axiosInt.get<ApiResponse<SingleExpense[]>>(
        "/expense",
        {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem("token")}`,
          },
        }
      );
      // console.log("Expense get response is", response.data.data);
      let expenseArray: SingleExpense[] = [];
      let incomeArray: SingleExpense[] = [];
      setTotalExpense(0);
      setTotalIncome(0);
      setCategotyStack({
        food: 0,
        education: 0,
        other: 0,
        beauty: 0,
        households: 0,
        fashion: 0,
      });

      response?.data?.data.map((val) => {
        if (val.expenseType === "expense") {
          setCategotyStack((prev) => {
            let category = val.expenseCategory as Category_type;
            return {
              ...prev,
              [val.expenseCategory]: prev[category] + +val.expenseAmount,
            };
          });
          expenseArray.push(val);
          setTotalExpense((prev) => prev + +val.expenseAmount);
        } else {
          incomeArray.push(val);
          setTotalIncome((prev) => prev + +val.expenseAmount);
        }
      });
      setExpenseGetData(expenseArray);
      setIncomeGetData(incomeArray);
    } catch (error) {}
  };
  console.log("Expense and income data ", expenseGetData, incomeGetData);
  console.log("Total expense and income is", totalExpense, totalIncome);
  console.log("expense stack is", categoryStack);
  useEffect(() => {
    getExpenseData();
  }, []);
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-2 box-border">
      {/* left part */}
      <div className="w-full md:w-fit h-auto flex flex-col items-center sm:flex-row  md:flex-col">
        {/* expense details */}
        <div className="max-w-[400px] h-auto">
          <ExpenseDetails
            categoryStack={categoryStack}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            expenseArray={expenseGetData}
          />
        </div>
        {/* expense form */}
        <div className="max-w-[400px] mt-4">
          <ExpenseForm callBack={() => getExpenseData()} />
        </div>
      </div>

      {/* right part */}
      <div className="w-full min-w-[400px] box-border h-full  flex">
        <ExpenseEntries
          incomeArray={incomeGetData ? incomeGetData : []}
          expenseArray={expenseGetData ? expenseGetData : []}
        />
      </div>
    </div>
  );
};

export default Expense;
