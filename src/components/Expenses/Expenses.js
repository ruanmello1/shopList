import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>         
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>   
                {props.expenses.map((expense) => {
                    return (
                        <ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}        
                        />
                    );                
                })}            
            </Card>
        </div>
    )
}

export default Expenses;