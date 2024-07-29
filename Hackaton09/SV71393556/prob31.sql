SELECT productId, productName, unitPrice
FROM Product
WHERE productName LIKE 'M%' AND unitPrice BETWEEN 28 AND 129;