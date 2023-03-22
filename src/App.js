import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [{
    title: 'Car Insurance', 
    amount: 294.67, 
    date: new Date(2021, 2, 28)
  }, {
    title: 'Car Insurance 2', 
    amount: 294.67, 
    date: new Date(2021, 2, 25)
  }]
  
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
