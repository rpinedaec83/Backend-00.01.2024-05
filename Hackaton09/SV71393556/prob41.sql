SELECT c.categoryName, p.productName, p.unitPrice, p.unitsInStock
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
ORDER BY c.categoryName, p.productName;
