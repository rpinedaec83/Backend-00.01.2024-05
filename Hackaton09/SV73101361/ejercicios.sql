-- 1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customer where country = 'USA';
-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
Select * from Supplier where city ='BERLIN';
-- 3. Seleccionar los empleados con código 3,5 y 8
Select * from Employee where employeeId IN (3,5,8);
-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
Select * from Product where supplierId in (1,3,5) and unitsInStock > 0;
-- 5. Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
Select * from Product where unitPrice between 20 and 90;
-- 6. Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
Select * from Salesorder where orderDate between '1997-01-01' AND '1997-07-15';
-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
Select * from Salesorder where YEAR(orderDate) = 1997 AND employeeId IN (1,3,4,8);
-- 8. Mostrar las ordenes hechas en el año 1996
Select * from Salesorder where YEAR(orderDate) = 1996;
--9. Mostrar las ordenes hechas en el año 1997 ,del mes de abril
Select * from Salesorder where YEAR(orderDate) = 1997 and MONTH(orderDate) = 4;
--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
Select * from Salesorder where YEAR(orderDate) = 1998 and DAY(orderDate) = 1;
--11. Mostrar todos los clientes que no tienen fax
Select * from Customer where fax is null or fax = '';
--12. Mostrar todos los clientes que tienen fax
Select * from Customer where fax is NOT null AND Fax <> '';
--13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
Select p.productName, p.unitPrice, p.unitsInStock, c.categoryName from Product p INNER JOIN category c on p.categoryId = c.categoryId; 
--14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
Select p.productName, p.unitPrice, p.supplierId, s.companyName from Product p INNER JOIN supplier s on p.supplierId = s.supplierId;
--15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
Select orderId, productId, unitPrice, quantity, unitPrice*quantity as TOTAL_PAY from orderdetail;
--16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
Select s.orderId, s.orderDate, o.productId, o.unitPrice, s.employeeId, CONCAT(e.firstname,' ',e.lastname) AS COMPLETE_NAME from salesorder s INNER JOIN orderdetail o  on s.orderId = o.orderId INNER JOIN Employee e on e.employeeId = s.employeeId;
--17. Mostrar los 10 productos con menor stock
Select * from product ORDER BY UnitsInStock ASC LIMIT 10; 
--18. Mostrar los 10 productos con mayor stock
Select * from product ORDER BY UnitsInStock DESC LIMIT 10; 
--19. Mostrar los 10 productos con menor precio
Select * from product Order by unitPrice ASC LIMIT 10;
--20. Mostrar los 10 productos con mayor precio
Select * from product Order by unitPrice DESC LIMIT 10;
--21. Mostrar los 10 productos más baratos
Select * from product Order by unitPrice ASC LIMIT 10;
--22. Mostrar los 10 productos más caros
Select * from product Order by unitPrice DESC LIMIT 10;
--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
Select * from customer order by companyName;
--24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * from customer where companyName LIKE 'B%' AND country = 'UK' order by companyName;
--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria
select p.*, c.categoryName from product p INNER JOIN Category c on p.categoryId = c.categoryId where p.categoryId IN (1,3,5) ORDER BY c. categoryName;
--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from product where unitPrice between 50 and 200;
--27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select c.companyName, c.custId, s.orderDate, o.unitPrice, p.productName from customer c INNER JOIN salesorder s ON c.custId = s.custId INNER JOIN orderdetail o on o.orderId = s.orderId INNER JOIN product p on o.productId = p.productId;
--28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select categoryName, count(p.productId) from category c left join product p on c.categoryId = p.categoryId group by c.CategoryName;
--29. Seleccionar los 5 productos mas vendidos
select p.productName, sum(o.quantity) as TotalQuantity from product p INNER JOIN orderdetail o ON p.ProductId = o.ProductId GROUP BY p.ProductName Order by TotalQuantity DESC LIMIT 5;
--30. Seleccionar los jefes de los empleados
select e1.employeeId, e1.firstname from employee e1 left join employee e2 on e1.mgrId = e2.employeeId;
--31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from product where productName = 'M%' AND unitPrice BETWEEN 28 and 129;
--32. Obtener todos los clientes del Pais de USA,Francia y UK
Select * from customer where country in ('USA', 'France','UK');
--33. Obtener todos los productos descontinuados o con stock cero.
Select * from product where unitsInStock is NULL or unitsInStock = 0 or Discontinued = 1;
--34. Obtener todas las ordenes hechas por el empleado King Robert
Select * from salesOrder where employeeId = (SELECT employeeId from employee WHERE lastname = 'King' and firstname ='Russell');
--35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select c.CompanyName, s.* from salesOrder s INNER JOIN customer c on s.custId = c.custId where c.CompanyName = 'Que delicia';
--36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select * from salesOrder where employeeId in( select employeeId from employee
where (lastname='King' and firstname='Russell') or
		(lastname='Cameron' and firstname='Maria') or
        (lastname='Fuller' and firstname='Andrew')
);
--37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
Select o.orderId, p.productId, p.productName, o.unitPrice, p.unitsInStock from Product p INNER JOIN orderDetail o where o.orderId = 10257;
--38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
Select o.orderId, p.productId, p.productName, o.unitPrice, p.unitsInStock, s.orderDate from Product p INNER JOIN orderDetail o on p.productId = o.productId
INNER JOIN salesorder s on o.orderId = s.orderId Where YEAR(s.orderDate) >= 1997;
--39. Calcular los 15 productos mas caros
SELECT * FROM Product ORDER BY UnitPrice DESC LIMIT 15;
--40. Calcular los 5 productos mas baratos
SELECT * FROM Product ORDER BY UnitPrice ASC LIMIT 5;
--41.  Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
Select c.categoryName, p.productName, p.unitprice, p.unitsInStock FROM product p INNER JOIN category c ON p.categoryId = c.categoryId ORDER BY c.CategoryName, p.ProductName;
--42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
Select c.categoryName, p.productName FROM product p INNER JOIN category c ON p.categoryId = c.categoryId WHERE p.productName NOT LIKE 'P%' ORDER BY c.CategoryName, p.ProductName;
--43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
Select c.categoryName, SUM(p.unitsInStock) AS TOTAL_STOCK FROM product p INNER JOIN category c ON p.categoryId = c.categoryId GROUP BY c.categoryName;
--44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
SELECT cu.CompanyName AS Client_Name, s.CompanyName AS Supplier_Name, CONCAT(e.FirstName, ' ', e.LastName) AS Employee_Name, p.ProductName , so.OrderId FROM OrderDetail od
INNER JOIN Product p ON od.ProductID = p.ProductID
INNER JOIN Salesorder so ON od.OrderID = so.OrderID
INNER JOIN Customer cu ON so.custID = cu.custID
INNER JOIN Employee e ON so.EmployeeID = e.EmployeeID
INNER JOIN Supplier s ON p.SupplierID = s.SupplierID
WHERE so.OrderID = 10794;
--45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT  c.CompanyName AS Cliente_Name, COUNT(s.OrderID) AS num_orders, YEAR(s.OrderDate) AS Year
FROM Customer c
INNER JOIN salesorder s ON s.CustID = c.CustID
GROUP BY c.CompanyName, s.CustID, YEAR(s.OrderDate)
ORDER BY s.CustID, Year;

--46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT COUNT(orderId) as num_orders, YEAR(OrderDate) as year, MONTH(OrderDate) as month  from salesorder s
GROUP BY YEAR(OrderDate), MONTH(OrderDate);
ORDER BY YEAR(OrderDate), MONTH(OrderDate);

--47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

SELECT c.CompanyName AS CustomerName, so.OrderID, so.OrderDate,  p.ProductID,  o.Quantity, p.ProductName, s.CompanyName AS SupplierName, s.City AS SupplierCity
FROM Customer c
INNER JOIN SalesOrder so ON so.CustID = c.CustID
INNER JOIN OrderDetail o ON o.OrderID = so.OrderID
INNER JOIN Product p ON p.ProductID = o.ProductID
INNER JOIN Supplier s ON s.SupplierID = p.SupplierID;

--48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

SELECT 
    c.CompanyName AS CustomerName, c.ContactName AS ContactName, so.OrderID, so.OrderDate,  od.ProductID, od.Quantity, p.ProductName, s.CompanyName AS SupplierName
FROM Customer c
INNER JOIN salesOrder so ON so.CustID = c.CustID
INNER JOIN OrderDetail od ON so.OrderID = od.OrderID
INNER JOIN Product p ON od.ProductID = p.ProductID
INNER JOIN Supplier s ON p.SupplierID = s.SupplierID
WHERE s.CompanyName BETWEEN 'A' AND 'G%' 
  AND od.Quantity BETWEEN 23 AND 187
ORDER BY c.CompanyName, so.OrderID;

