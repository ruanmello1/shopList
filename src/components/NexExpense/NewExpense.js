import './NewExpense.css';
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setShowForm(false);
    };
    
    const startShowingForm = () => {
        setShowForm(true);
    }

    const stopShowingForm = () => {
        setShowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={startShowingForm}>Add New Expense</button>}           
            {showForm && <ExpenseForm stopForm={stopShowingForm} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
};

export default NewExpense;