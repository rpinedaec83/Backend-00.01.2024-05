SELECT c.categoryName, SUM(p.unitsInStock) AS totalStock
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
GROUP BY c.categoryName
ORDER BY c.categoryName;
