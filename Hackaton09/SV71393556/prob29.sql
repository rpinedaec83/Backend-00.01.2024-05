SELECT p.productId, p.productName, SUM(od.quantity) AS total_quantity
FROM Product p
JOIN OrderDetail od ON p.productId = od.productId
GROUP BY p.productId, p.productName
ORDER BY total_quantity DESC
LIMIT 5;
