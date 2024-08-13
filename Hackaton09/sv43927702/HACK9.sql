-- 1-Seleccionar los clientes que viven en el país de "usa"
use northwind;
select * from customer where Country='USA';
-- 2.Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * from supplier where city='Berlin';
-- 3- Seleccionar los empleados con código 3,5 y 8
select * from employee where EmployeeID=3 or EmployeeID=5 or EmployeeID=8;
-- 4 Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
select * from product where unitsInstock>0 and (supplierId=1 or supplierId=3 or supplierId=5);
-- 5 Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select * from product where unitPrice>=20 and unitPrice<=90;
-- 6 Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * from salesorder where OrderDate between '1997-01-01' and '1997-07-15';
-- 7 Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8 
select * from salesorder where  year(OrderDate)=1997 and (employeeid=1 or employeeid=3 or employeeid=4 or employeeid=8);
-- 8 Mostrar las ordenes hechas en el año 1996
select * from salesorder where  year(OrderDate)=1996;
-- 9 Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from salesorder where  year(OrderDate)=1997 and month(OrderDate)=4;
-- 10 Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from salesorder where  day(OrderDate)=1 and year(OrderDate)=1998;
-- 11 Mostrar todos los clientes que no tienen fax
select * from customer where isnull(fax);
-- 12 Mostrar todos los clientes que tienen fax
select * from customer where fax <>'';
-- 13 Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName,p.unitPrice,p.unitsInStock,c.categoryName from product p inner join category c
on (p.categoryId=c.categoryId);
-- 14 Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select p.productName,p.unitPrice,p.supplierId,c.companyName from product p inner join supplier c
on (p.supplierId=c.supplierId);
-- 15 Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select o.orderId,p.productId,od.unitprice,od.quantity,(od.unitprice*od.quantity) as total from salesorder o inner join orderdetail od
on (o.orderId=od.orderId) inner join product p 
on (od.productId=p.productId);
-- 16 Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select o.orderId,o.orderDate,p.productid,p.unitprice,e.employeeid,CONCAT(e.lastname,' ',e.firstname) as nombre from salesorder o
 inner join orderdetail od
on (o.orderId=od.orderId) inner join product p 
on (od.productId=p.productId) inner join employee e
on (o.employeeid=e.employeeid);

-- 17 Mostrar los 10 productos con menor stock
SELECT ProductID, ProductName, UnitsInStock from Product ORDER BY UnitsInStock asc
LIMIT 10;
-- 18 Mostrar los 10 productos con mayor stock
SELECT ProductID, ProductName, UnitsInStock from Product ORDER BY UnitsInStock desc
LIMIT 10;
-- 19 Mostrar los 10 productos con menor precio
SELECT ProductID, ProductName, unitprice from Product ORDER BY unitprice asc
LIMIT 10;
-- 20 Mostrar los 10 productos con mayor precio
SELECT ProductID, ProductName, unitprice from Product ORDER BY unitprice desc
LIMIT 10;
-- 21 Mostrar los 10 productos más baratos
SELECT ProductID, ProductName, unitprice from Product ORDER BY unitprice asc
LIMIT 10;
-- 22 Mostrar los 10 productos más caros
SELECT ProductID, ProductName, unitprice from Product ORDER BY unitprice desc
LIMIT 10;
-- 23 Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM Customer ORDER BY CompanyName;
-- 24Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM Customer WHERE CompanyName LIKE 'B%' AND Country = 'UK' ORDER BY CompanyName;
-- 25 Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
SELECT * FROM Product WHERE CategoryID IN (1, 3, 5) ORDER BY CategoryID;
-- 26 Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
SELECT * FROM Product WHERE UnitPrice BETWEEN 50 AND 200;
-- 27 Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
SELECT C.CompanyName,C.CUSTID, O.OrderDate,D.UnitPrice,P.ProductName FROM salesorder O
JOIN 
    orderdetail D ON O.OrderID = D.OrderID
JOIN 
    Product P ON D.ProductID = P.ProductID
JOIN 
    Customer C ON O.CUSTID = C.CUSTID;
    -- 28 Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
SELECT C.CategoryName,COUNT(P.ProductID) AS CANTIDAD_PRODUCTOS FROM Category C
JOIN 
    Product P ON C.CategoryID = P.CategoryID
GROUP BY C.CategoryName;
-- 29 Seleccionar los 5 productos mas vendidos

SELECT P.ProductID,P.ProductName,SUM(O.Quantity) AS TOTAL FROM orderdetail O
JOIN 
    Product P ON O.ProductID = P.ProductID
GROUP BY 
    P.ProductID,
    P.ProductName
ORDER BY 
    TOTAL DESC
LIMIT 5;
 -- 31  Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * FROM Product WHERE 
ProductName LIKE 'M%' AND UnitPrice BETWEEN 28 AND 129;
-- 32 Obtener todos los clientes del Pais de USA,Francia y UK
SELECT * FROM Customer WHERE Country IN ('USA', 'France', 'UK');
-- 33 Obtener todos los productos descontinuados o con stock cero.
SELECT * FROM Product WHERE Discontinued = 1 OR UnitsInStock = 0;
-- 34 Obtener todas las ordenes hechas por el empleado King Robert
SELECT * FROM salesorder O
JOIN 
    Employee E ON O.EmployeeID = E.EmployeeID
WHERE 
    E.FirstName = 'Robert' 
    AND E.LastName = 'King';
-- 35 Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT * FROM salesorder O
JOIN 
    Customer C ON O.CustID = C.CustID
WHERE 
    C.CompanyName = 'Que Delícia';
-- 36 Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
SELECT * FROM salesorder O
JOIN 
    Employee E ON O.EmployeeID = E.EmployeeID
WHERE 
    (E.FirstName = 'Robert' AND E.LastName = 'King')
    OR (E.FirstName = 'Nancy' AND E.LastName = 'Davolio')
    OR (E.FirstName = 'Andrew' AND E.LastName = 'Fuller');
-- 37 Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
SELECT P.ProductID,P.ProductName,D.UnitPrice,P.UnitsInStock FROM orderdetail D
JOIN 
    Product P ON D.ProductID = P.ProductID
WHERE 
    D.OrderID = 10257;
-- 38 Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
SELECT P.ProductID,P.ProductName,D.UnitPrice,P.UnitsInStock FROM orderdetail D
JOIN 
    Product P ON D.ProductID = P.ProductID
JOIN 
    salesorder O ON D.OrderID = O.OrderID
WHERE 
    O.OrderDate >= '1997-01-01';
-- 39  Calcular los 15 productos mas caros
SELECT ProductName, UnitPrice FROM Product ORDER BY UnitPrice DESC LIMIT 15;
-- 40 Calcular los 5 productos mas baratos
SELECT ProductName, UnitPrice FROM Product ORDER BY UnitPrice asc LIMIT 5;
-- 41 Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
SELECT c.CategoryName, p.ProductName, p.UnitPrice, p.UnitsInStock
FROM Category c
JOIN Product p ON c.CategoryID = p.CategoryID
ORDER BY c.CategoryName, p.ProductName;
-- 42 Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra p
SELECT c.CategoryName, p.ProductName FROM Category c
JOIN Product p ON c.CategoryID = p.CategoryID
WHERE p.ProductName NOT LIKE 'P%'
ORDER BY c.CategoryName, p.ProductName;
-- 43 Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
SELECT c.CategoryName, SUM(p.UnitsInStock) AS TotalStock FROM Category c
JOIN Product p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName ORDER BY c.CategoryName;
-- 44 Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
SELECT o.OrderID,c.companyName,s.companyName AS SupplierName,e.FirstName + ' ' + e.LastName AS EmployeeName,p.ProductName FROM salesorder o
JOIN Customer c ON o.custId = c.custId
JOIN Employee e ON o.EmployeeID = e.EmployeeID
JOIN orderdetail od ON o.OrderID = od.OrderID
JOIN Product p ON od.ProductID = p.ProductID
JOIN Supplier s ON p.SupplierID = s.SupplierID
WHERE o.OrderID = 10794
ORDER BY p.ProductName;
-- 45 Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT c.CustID, YEAR(o.OrderDate) AS ordenano, COUNT(o.OrderID) AS cantidad FROM  salesorder o
JOIN 
    Customer c ON o.CustID = c.CustID
GROUP BY 
    c.CustID, YEAR(o.OrderDate)
ORDER BY 
    c.CustID, YEAR(o.OrderDate);
-- 46 Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT YEAR(o.OrderDate) AS Ordenaño,MONTH(o.OrderDate) AS ordenMes,COUNT(o.OrderID) AS Cantidad FROM salesorder o
GROUP BY 
    YEAR(o.OrderDate), MONTH(o.OrderDate)
ORDER BY 
    YEAR(o.OrderDate), MONTH(o.OrderDate);
-- 47  Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
SELECT c.CompanyName AS CustomerCompanyName,o.OrderID,o.OrderDate,p.ProductID,od.Quantity,p.ProductName,s.CompanyName AS compañia,s.City AS ciudad FROM salesorder   o
JOIN 
    Customer c ON o.CustID = c.CustID
JOIN 
    orderdetail od ON o.OrderID = od.OrderID
JOIN 
    Product p ON od.ProductID = p.ProductID
JOIN 
    Supplier s ON p.SupplierID = s.SupplierID
ORDER BY c.CompanyName, o.OrderID;
-- 48 ..
SELECT c.CompanyName AS CustomerCompanyName,c.ContactName AS CustomerContactName,o.OrderID,o.OrderDate,p.ProductID,od.Quantity,p.ProductName,s.CompanyName AS SupplierCompanyName
FROM 
    salesorder o
JOIN 
    Customer c ON o.CustID = c.CustID
JOIN 
   orderdetail  od ON o.OrderID = od.OrderID
JOIN 
    Product p ON od.ProductID = p.ProductID
JOIN 
    Supplier s ON p.SupplierID = s.SupplierID
WHERE 
    s.CompanyName BETWEEN 'A' AND 'G' 
    AND od.Quantity BETWEEN 23 AND 187
ORDER BY 
    c.CompanyName, o.OrderID;



