SELECT 
    c.custId AS customerId,
    YEAR(so.orderDate) AS orderYear,
    COUNT(so.orderId) AS numberOfOrders
FROM SalesOrder so
JOIN Customer c ON so.custId = c.custId
GROUP BY c.custId, YEAR(so.orderDate)
ORDER BY c.custId, orderYear;
