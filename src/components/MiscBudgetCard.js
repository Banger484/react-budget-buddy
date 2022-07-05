import { MISC_BUDGET_ID, useBudgets } from '../contexts/BudgetContext'
import BudgetCard from './BudgetCard'


export default function MiscBudgetCard(props) {
    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(MISC_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
    
    if (amount === 0 ) return null

  return (
    <BudgetCard gray amount={amount} name="Miscellaneous" {...props} />
  )
}
