select * from Supplier;
select * from product;


SELECT CompanyName
FROM Supplier
WHERE EXISTS (SELECT ProductName FROM Product WHERE Product.SupplierID = Supplier.supplierID AND unitprice < 20);


SELECT ProductName
FROM Product
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetail
  WHERE Quantity = 10);
  
  
INSERT INTO ProductBCK SELECT * FROM Product;


SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetail;

update Product set unitsonorder = 5 where productId in (1,3,5,7,9);


SELECT ProductName, UnitPrice * (ifnull(UnitsInStock,0) + IFNULL(UnitsOnOrder, 0))
FROM Product;