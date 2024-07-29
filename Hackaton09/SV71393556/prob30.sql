SELECT e1.employeeId AS employeeId, 
       e1.firstname AS employeeFirstName, 
       e1.lastname AS employeeLastName, 
       e2.employeeId AS managerId, 
       e2.firstname AS managerFirstName, 
       e2.lastname AS managerLastName
FROM Employee e1
JOIN Employee e2 ON e1.mgrId = e2.employeeId
ORDER BY e1.employeeId;