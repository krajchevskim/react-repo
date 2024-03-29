import { useDispatch, useSelector } from "react-redux";
import {
  depositBalance,
  depositBalanceAsync,
} from "../redux/actions/balanceActions";

export const Salary = () => {
  const monthlySallary = 2000;
  const currentBalance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Salary</h1>
      <button onClick={() => dispatch(depositBalance(monthlySallary))}>
        Add my monthly sallary
      </button>
      <button onClick={() => dispatch(depositBalance(currentBalance))}>
        Double my balance
      </button>
      <button onClick={() => dispatch(depositBalanceAsync(monthlySallary))}>
        Add my monthly sallary after some time
      </button>
    </div>
  );
};