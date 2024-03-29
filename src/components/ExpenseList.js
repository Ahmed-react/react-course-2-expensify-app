import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
      {
        props.expenses.length === 0 ? (
          <p>No Expenses</p>
        ) : (
          props.expenses.map((expense) => {           // IN line 9 and 10, expense variable name can be anything
            return <ExpenseListItem key={expense.id} {...expense} />    // like exp, e etc.
          })
        )
      }           
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)    
    };
}

export default connect(mapStateToProps)(ExpenseList);

