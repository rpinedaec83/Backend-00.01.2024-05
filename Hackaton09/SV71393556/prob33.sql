SELECT productId, productName, unitPrice, unitsInStock, discontinued
FROM Product
where discontinued = 1 or unitsInStock = 0;