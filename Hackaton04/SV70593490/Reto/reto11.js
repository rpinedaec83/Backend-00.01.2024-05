function getBudgets(arr) {
    let totalBudget = 0;
    
    for (let i = 0; i < arr.length; i++) {
        totalBudget += arr[i].budget;
    }
    
    return totalBudget;
}