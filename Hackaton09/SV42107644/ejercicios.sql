-- 1.  Seleccionar los clientes que viven en el país de "usa"
SELECT * FROM Customer WHERE upper(country) = 'USA';

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM Supplier WHERE upper(city) = 'BERLIN';

-- 3.  Seleccionar los empleados con código 3,5 y 8
SELECT * FROM Employee WHERE employeeId IN (3, 5, 8);

-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1, 3 y 5
SELECT s.supplierId, s.companyName, p.*  
FROM Product p INNER JOIN Supplier s ON p.supplierId = s.supplierId 
WHERE p.unitsInStock > 0 
  AND s.supplierId IN (1, 3, 5);

-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM Product 
WHERE unitPrice >= 20 
  AND unitPrice <= 90 
ORDER BY unitPrice ASC;

-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
-- SELECT * FROM SalesOrder WHERE orderDate BETWEEN CAST('2008-01-01 00:00:00' AS DATETIME) AND CAST('2008-07-15 00:00:00' AS DATETIME) ORDER BY orderDate
SELECT * FROM SalesOrder 
WHERE orderDate BETWEEN cast('1997-01-01 00:00:00' AS DATETIME) 
					AND cast('1997-07-15 00:00:00' AS DATETIME) 
ORDER BY orderDate ASC;

-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
SELECT * FROM SalesOrder 
WHERE year(orderDate) = 1997 
  AND employeeId IN (1, 3, 4, 8) 
ORDER BY employeeId ASC, 
         orderDate ASC;

-- 8.  Mostrar las ordenes hechas en el año 1996
SELECT * FROM SalesOrder 
WHERE year(orderDate) = 1996 
ORDER BY orderDate ASC, 
		orderId ASC;

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
SELECT * FROM SalesOrder
WHERE year(orderDate) = 1997 
  AND month(orderDate) = 4 
ORDER BY orderDate ASC;

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * FROM SalesOrder 
WHERE year(orderDate) = 1998 
  AND day(orderDate) = 1
ORDER BY orderDate ASC;

-- 11. Mostrar todos los clientes que no tienen fax
SELECT * FROM Customer 
WHERE fax = '' 
   OR fax IS NULL;

-- 12. Mostrar todos los clientes que tienen fax
SELECT * FROM Customer 
WHERE fax != '' 
   OR fax IS NOT NULL;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
SELECT p.productName, p.unitPrice, p.unitsInStock, c.categoryName 
FROM Product p INNER JOIN Category c ON p.categoryId = c.categoryId 
ORDER BY p.productName ASC;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
SELECT p.productName, p.unitPrice, s.supplierId, s.companyName
FROM Product p INNER JOIN Supplier s ON p.supplierId = s.supplierId 
ORDER BY p.productName ASC;
           
-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
SELECT o.orderId, d.productId, d.quantity, d.unitPrice, d.discount, (d.unitPrice - d.unitPrice * d.discount) * d.quantity AS 'totalPaid'
FROM SalesOrder o INNER JOIN OrderDetail d ON o.orderId = d.orderId
ORDER BY o.orderId ASC, d.productId ASC;
           
-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
SELECT o.orderId, o.orderDate, d.productId, d.unitPrice, o.employeeId, concat(e.firstname,' ', e.lastname) As 'employeeName'
FROM SalesOrder o INNER JOIN OrderDetail d ON o.orderId = d.orderId 
                  INNER JOIN Employee e ON o.employeeId = e.employeeId
ORDER BY o.orderId ASC;				

-- 17. Mostrar los 10 productos con menor stock
SELECT * FROM Product 
ORDER BY unitsInStock ASC 
LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
SELECT * FROM Product 
ORDER BY unitsInStock DESC 
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
SELECT * FROM Product 
ORDER BY unitPrice ASC 
LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
SELECT * FROM Product 
ORDER BY unitPrice DESC 
LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
SELECT * FROM Product 
ORDER BY unitPrice ASC 
LIMIT 10;

-- 22. Mostrar los 10 productos más caros
SELECT * FROM Product 
ORDER BY unitPrice DESC 
LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM Customer 
ORDER BY companyName ASC;

-- 24. Seleccionar todos los campos de clientes, cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM Customer 
WHERE left(companyName, 1) = 'B' 
  AND upper(country) = 'UK' 
ORDER BY companyName ASC;

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
SELECT * FROM Product 
WHERE categoryId IN (1 ,3 ,5) 
ORDER BY categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
SELECT * FROM Product 
WHERE unitPrice BETWEEN 50 AND 200 
ORDER BY unitPrice;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
SELECT c.companyName, o.custId, o.orderDate, d.unitPrice, d.productId, p.productName
FROM SalesOrder o INNER JOIN OrderDetail d ON o.orderId = d.orderId	
                  INNER JOIN Customer c ON o.custId = c.custId
                  INNER JOIN Product p ON d.productId = p.productId;
                         
-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
SELECT c.categoryName, count(*) 
FROM Product p INNER JOIN Category c ON p.categoryID = c.categoryID
GROUP BY c.categoryName;
           
-- 29. Seleccionar los 5 productos mas vendidos
SELECT p.productId, p.productName, count(d.quantity) AS quantity
FROM Product p INNER JOIN OrderDetail d ON p.productId = d.productId
GROUP BY d.productID,  p.ProductName
ORDER BY quantity DESC
LIMIT 5;
           
-- 30. Seleccionar los jefes de los empleados
SELECT * FROM Employee 
WHERE title = 'Sales Manager' 
   OR title = 'Vice President, Sales';

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * FROM Product 
-- WHERE left(SUBSTR(productName, 9, 6), 1) = 'M'
WHERE left(productName, 1) = 'M' 
  AND unitPrice BETWEEN 28 AND 129 
ORDER BY unitPrice;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
SELECT * FROM Customer
WHERE upper(country) IN ('USA','FRANCE','UK') 
ORDER BY country;

-- 33. Obtener todos los productos descontinuados o con stock cero.
SELECT * FROM Product 
WHERE discontinued = 1 
   OR unitsInStock = 0;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert
SELECT e.lastname, e.firstname, o.*
FROM SalesOrder o INNER JOIN Employee e ON o.employeeId = e.employeeId
WHERE upper(e.lastname) = 'KING' 
  AND upper(e.firstname) = 'ROBERT' 
ORDER BY orderId;

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT c.companyName, o.*
FROM SalesOrder o INNER JOIN Customer c ON o.custId = c.custId
WHERE upper(c.companyName) = 'QUE DELICIA';

-- 36. Obtener todas las ordenes hechas por el empleado King: Robert, Davolio Nancy y Fuller Andrew
SELECT e.lastname, e.firstname, o.*
FROM SalesOrder O INNER JOIN Employee e ON o.employeeId = e.employeeId
WHERE (upper(e.lastname) ='KING' AND upper(e.firstname) ='ROBERT') 
   OR (upper(e.lastname) ='DAVOLIO' AND upper(e.firstname) ='NANCY') 
   OR (upper(e.lastname) ='FULLER' AND upper(e.firstname) ='ANDREW')
ORDER BY e.lastname, e.firstname;
           
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden: 10257
SELECT d.productId, p.productName, p.unitPrice, p.unitsInStock
FROM OrderDetail d INNER JOIN Product p ON d.productId = p.productId 
WHERE d.orderId = '10257';
           
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
SELECT o.OrderId, o.orderDate, d.productId, p.productName, p.unitPrice, p.unitsInStock		   
FROM SalesOrder o INNER JOIN OrderDetail d ON o.orderId = d.orderId
              INNER JOIN Product p ON d.productId = p.productId 
WHERE year(o.orderDate) >= 1997
ORDER BY o.orderDate ASC;

-- 39. Calcular los 15 productos mas caros
SELECT * FROM Product 
ORDER BY unitPrice DESC 
LIMIT 15;

-- 40. Calcular los 5 productos mas baratos
SELECT * FROM Product 
ORDER BY unitPrice ASC 
LIMIT 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
SELECT c.categoryName, p.productName, p.unitPrice, p.unitsInStock
FROM Product p INNER JOIN Category c ON p.categoryId = c.categoryId 
ORDER BY c.categoryName, p.productName;
           
-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra: P
SELECT b.categoryName, productName
FROM Product a INNER JOIN Category b ON a.categoryId = b.categoryId 
-- WHERE left(SUBSTR(productName, 9, 6), 1) = 'P'
WHERE left(productName, 1) <> 'P'
ORDER BY b.categoryName, productName;
           
-- 43. Calcular el stock de productos por cada categoria. Mostrar el nombre de la categoria y el stock por categoria.
SELECT c.categoryName, SUM(p.unitsInStock) AS 'stockCategory'
FROM Category c INNER JOIN Product p ON c.categoryId = p.categoryId 
GROUP BY c.categoryName;

-- 44. Obtener el Nombre del cliente, Nombre del Proveedor, Nombre del empleado y el nombre de los productos que estan en la orden 10794
SELECT c.companyName AS clientName,
       s.companyName AS supplierName,
       concat(e.firstname, ' ', e.LastName) As employeeName,
       p.productName
FROM SalesOrder o INNER JOIN OrderDetail d ON o.orderId = d.orderId
                  INNER JOIN Product p ON d.productId = p.productId 
                  INNER JOIN Customer c ON o.custId = c.custId
                  INNER JOIN Supplier s ON p.supplierId = s.supplierId
                  INNER JOIN Employee e ON o.employeeId = e.employeeId
WHERE o.orderId = '10794';
           
-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT c.custId, c.companyName, year(o.orderDate) AS yearOrderDate, count(*) AS quantityOrders 
FROM Customer c INNER JOIN SalesOrder o ON c.custId = o.custId
GROUP BY c.custId, c.companyName, yearOrderDate
ORDER BY c.custId, yearOrderDate;
           
-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT year(OrderDate) AS year,
	       month(OrderDate) AS month,
	       count(*) AS quantityOrders
FROM SalesOrder 
GROUP BY year, month
ORDER BY year, month;

-- 47. Seleccionar el nombre de la compañía del cliente, él código de la orden de compra, la fecha de la orden de compra, código del producto, 
--     cantidad pedida del producto, nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor, usar JOIN
SELECT c.companyName, o.orderId, o.orderDate, d.productId, d.quantity, p.productName, s.companyName, s.city 
FROM Customer c INNER JOIN SalesOrder o ON c.custId = o.custId
                 INNER JOIN OrderDetail d ON o.orderId = d.orderId
                 INNER JOIN Product p ON d.productId = p.productId
                 INNER JOIN Supplier s ON p.supplierId = s.supplierId;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, 
--     el código del producto, cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usar JOIN.
--     Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G, además la cantidad pedida del producto debe estar entre 23 y 187.
-- select SUBSTR(s.companyName,10,6), left(SUBSTR(s.companyName,10,6), 1), s.* from Supplier s
SELECT c.companyName, c.contactName, o.orderId, o.orderDate, d.productId, d.quantity, p.productName, s.companyName
FROM Customer c INNER JOIN SalesOrder o ON c.custId = o.custId
                INNER JOIN OrderDetail d ON o.orderId = d.orderId
                INNER JOIN Product p ON d.productId = p.productId
                INNER JOIN Supplier s ON p.supplierId = s.supplierId
WHERE (left(s.companyName, 1) BETWEEN 'A' And 'G') And (d.quantity BETWEEN 23 And 187)
ORDER BY s.companyName;

