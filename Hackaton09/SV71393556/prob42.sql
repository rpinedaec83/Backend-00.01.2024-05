SELECT c.categoryName, p.productName
FROM Category c
JOIN Product p ON c.categoryId = p.categoryId
WHERE p.productName NOT LIKE 'P%'
ORDER BY c.categoryName, p.productName;
