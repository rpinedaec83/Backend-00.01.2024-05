SELECT DISTINCT p.productId, p.productName, p.unitPrice, p.unitsInStock
FROM SalesOrder so
JOIN OrderDetail od ON so.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
WHERE so.orderDate BETWEEN '1997-01-01' AND CURDATE();
