export interface ExpenseDataToApi_int {
  expenseType: string;
  expenseAmount: string;
  expenseDate: string;
  expenseCategory: string;
  expenseDesc: string;
}

// get all expense data

export interface SingleExpense {
  _id: string;
  createdBy: string;
  expenseType: string;
  expenseAmount: string;
  expenseDate: string;
  expenseCategory: string;
  expenseDesc: string;
  createdAt?: string;
  updatedAt?: string;
}

// category stack
export type Category_type = "food" | "fashion" | "other";

// expense details props
export interface ExpenseDetailsProps_int {
  totalExpense: number;
  totalIncome: number;
  categoryStack: {
    food: number;
    education: number;
    other: number;
    beauty: number;
    households: number;
    fashion: number;
  };
  incomeArray?: SingleExpense[];
  expenseArray?: SingleExpense[];
  callBack?: () => void;
}

// expesne form props
export interface ExpenseFormProps_int {
  callBack: () => void;
}

// expense entries props
export interface ExpenseEntriesProps_int {
  incomeArray: SingleExpense[];
  expenseArray: SingleExpense[];
}
