SELECT
    c.companyName AS customerName,
    s.companyName AS supplierName,
    e.firstname AS employeeFirstName,
    e.lastname AS employeeLastName,
    p.productName
FROM SalesOrder so
JOIN OrderDetail od ON so.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
JOIN Customer c ON so.custId = c.custId
JOIN Supplier s ON p.supplierId = s.supplierId
LEFT JOIN Employee e ON so.employeeId = e.employeeId
WHERE so.orderId = 10794;
