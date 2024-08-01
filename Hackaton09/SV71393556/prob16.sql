select od.orderId,s.orderDate,od.unitPrice,od.quantity, e.lastname, e.firstname
FROM 
    SalesOrder s
JOIN 
    OrderDetail od ON s.orderId = od.orderId
JOIN 
    Employee e ON s.employeeId = e.employeeId;