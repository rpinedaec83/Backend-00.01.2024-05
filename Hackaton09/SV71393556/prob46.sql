SELECT 
    YEAR(so.orderDate) AS orderYear,
    MONTH(so.orderDate) AS orderMonth,
    COUNT(so.orderId) AS numberOfOrders
FROM SalesOrder so
GROUP BY YEAR(so.orderDate), MONTH(so.orderDate)
ORDER BY orderYear, orderMonth;
