SELECT p.productId, p.productName, p.unitPrice, p.unitsInStock
FROM OrderDetail od
JOIN Product p ON od.productId = p.productId
WHERE od.orderId = 10257;