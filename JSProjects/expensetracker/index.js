document.addEventListener('DOMContentLoaded', ()=>{
    const expenseform = document.getElementById('expense-form')
    const expensename = document.getElementById('expense-name')
    const expenseamount = document.getElementById('expense-amount')
    const list = document.getElementById('list')
    const total = document.getElementById('total-amount')

    let expenses = []
    let totalAmount = calculateTotal()

    expenseform.addEventListener('submit', (e)=>{
        e.preventDefault()
        const name = expensename.value.trim();
        const amount = parseInt(expenseamount.value);
        if(name !== "" && !isNaN(amount) && amount>0){
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount,
            }
            expenses.push(newExpense);

            expensename.value = ""
            expenseamount.value = ""
            updateTotal()
        }
    })

    function calculateTotal(){
        return expenses.reduce(
            (acculmulator, expense) => acculmulator + expense.amount, 0
        );
    }

    function updateTotal (){
        let totalAmount = calculateTotal()
        console.log(totalAmount)
        total.textContent = `${totalAmount}.00`
    }
})