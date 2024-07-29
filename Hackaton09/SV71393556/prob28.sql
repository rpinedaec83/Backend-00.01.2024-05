SELECT 
    c.categoryName AS CategoryName,
    COUNT(p.productId) AS NumberOfProducts
FROM 
    Category c
LEFT JOIN 
    Product p ON c.categoryId = p.categoryId
GROUP BY 
    c.categoryName;