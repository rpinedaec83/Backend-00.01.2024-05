use northwind;
select * from orderdetail;
select * from salesorder;
select * from customer;
select * from supplier;
select * from employee;
select * from product;
select * from category;

update product
set unitsInStock =floor(1+rand()*100)
where productId!=74;


-- 1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customer where country = 'USA';
        
-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * from supplier
where city='Berlin';

-- 3.  Seleccionar los empleados con código 3,5 y 8
select * from employee
where employeeId in (3,5,8);

-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
SELECT * FROM product
WHERE unitsInStock>0 and supplierId IN (1,3,5);


-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM product
WHERE unitPrice BETWEEN 20 AND 90;


-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * 
FROM salesorder
WHERE orderDate BETWEEN '1997-01-01' AND '1997-07-15';

-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from salesorder
where employeeId in (1,3,4,8) and  YEAR(orderDate) =1997;

-- 8.  Mostrar las ordenes hechas en el año 1996
SELECT orderId
FROM SalesOrder
WHERE YEAR(orderDate) = 1996;

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
SELECT orderId
FROM SalesOrder
WHERE YEAR(orderDate) = 1997
  AND MONTH(orderDate) = 4;


-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT orderId
FROM SalesOrder
WHERE YEAR(orderDate) = 1998
  AND DAY(orderDate) = 1;


-- 11. Mostrar todos los clientes que no tienen fax
select * from customer
where fax is null;

-- 12. Mostrar todos los clientes que tienen fax
select * from customer
where fax is not null;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName AS Nombre_Producto,
p.unitprice AS Precio_Producto, 
p.unitsInStock AS Stock, 
c.categoryName AS Categoria
from product p
inner join category c on c.categoryId=p.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía
-- proveedora.
SELECT 
    p.productName AS Nombre_Producto,
    p.unitPrice AS Precio_Producto,
    p.supplierId AS Codigo_Proveedor,
    s.companyName AS Nombre_Compania_Proveedor
FROM 
    Product p
INNER JOIN 
    Supplier s ON p.supplierId = s.supplierId;


-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por
-- producto.
SELECT 
    so.orderId AS Numero_Orden,
    od.productId AS Codigo_Producto,
    od.unitPrice AS Precio,
    od.quantity AS Cantidad,
    (od.unitPrice * od.quantity) AS Total_Pagado
FROM 
    OrderDetail od
INNER JOIN 
    SalesOrder so ON od.orderId = so.orderId;


-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre
-- completo.
SELECT 
    so.orderId AS Numero_Orden,
    so.orderDate AS Fecha,
    od.productId AS Codigo_Producto,
    od.unitPrice AS Precio,
    so.employeeId AS Codigo_Empleado,
    CONCAT(e.firstname, ' ', e.lastname) AS Nombre_Completo_Empleado
FROM 
    OrderDetail od
INNER JOIN 
    SalesOrder so ON od.orderId = so.orderId
INNER JOIN 
    Employee e ON so.employeeId = e.employeeId;


-- 17. Mostrar los 10 productos con menor stock
select * from product
order by unitsInStock ASC
LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
select * from product
order by unitsInStock DESC
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
select * from product
order by unitPrice ASC
LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
select * from product
order by unitPrice DESC
LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
select * from product
order by unitPrice ASC
LIMIT 10;

-- 22. Mostrar los 10 productos más caros
select * from product
order by unitPrice DESC
LIMIT 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * from customer
order by companyName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,
-- ordenar por nombre de la compania
select * from customer
where companyName like 'B%' and country='UK';

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
select * from product
where categoryId in (1,3,5)
order by categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
	select * from product
    where unitPrice between 50 and 200;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
SELECT 
	c.companyName AS Nombre_Company,
    c.custId AS Id_Compania,
	so.orderDate AS Fecha,
    od.unitPrice AS Precio_Unitario,
    p.productName AS Nombre_Producto,
    so.orderId AS Orden
FROM 
	salesorder so
INNER JOIN 
	customer c ON so.custId=c.custId
INNER JOIN 
	orderdetail od ON so.orderID=od.orderId
INNER JOIN 
	product p ON od.productId=p.productId;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
SELECT 
	c.categoryName AS Nombre_Categoria,
    COUNT(p.productId) AS Numero_Productos
FROM 
	product p
INNER JOIN 
	category c ON p.categoryId=c.categoryId
group by
	c.categoryName;


-- 29. Seleccionar los 5 productos mas vendidos
SELECT 
	p.productId AS Codigo_Producto,
    p.productName AS Nombre_Producto,
    SUM(od.quantity) AS Cantidad_Vendida
FROM 
	orderdetail od
INNER JOIN 
	product p ON od.productId=p.productId
GROUP BY 
    p.productId, p.productName
ORDER BY
	Cantidad_Vendida DESC
LIMIT 5;


-- 30. Seleccionar los jefes de los empleados
SELECT 
	e1.employeeId AS Empleado_ID,
    e1.firstname AS Nombre_Empleado,
    e1.lastname AS Apellido_Empleado,
    e2.employeeId AS Jefe_ID,
    e2.firstname AS Nombre_Jefe,
    e2.lastname AS Apellido_Jefe
FROM 
	employee e1
INNER JOIN 
	employee e2 ON e1.mgrId=e2.employeeId;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * from product 
WHERE productName LIKE 'M%'AND UnitPrice BETWEEN 28 AND 129;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
select * from customer
where country IN ('USA', 'France', 'UK');


-- 33. Obtener todos los productos descontinuados o con stock cero.
SELECT 
    productId AS Codigo_Producto,
    productName AS Nombre_Producto,
    unitPrice AS Precio,
    IFNULL(unitsInStock, 0) AS Stock,
    discontinued AS Descontinuado
FROM 
    Product
WHERE 
    discontinued = 1
   OR IFNULL(unitsInStock, 0) = 0;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert
SELECT 
	so.orderId AS Ordenes
FROM 
	salesorder so
INNER JOIN 
	employee e ON so.employeeId=e.employeeId
WHERE 
	 e.firstname='Robert' AND e.lastname='King';


-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT 
	so.orderId AS Ordenes
FROM 
	salesorder so
INNER JOIN 
	customer c ON so.custId=c.custId
WHERE 
	c.companyName='Que delicia';

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
SELECT 
    so.orderId AS Codigo_Orden,
    so.orderDate AS Fecha_Orden,
    so.requiredDate AS Fecha_Requerida,
    so.shippedDate AS Fecha_Envio,
    e.firstname AS Nombre_Empleado,
    e.lastname AS Apellido_Empleado
FROM 
    SalesOrder so
INNER JOIN 
    Employee e ON so.employeeId = e.employeeId
WHERE 
    CONCAT(e.lastname, ' ', e.firstname) IN ('King Robert', 'Davolio Nancy', 'Fuller Andrew');


-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
SELECT 
    p.productId AS Codigo_Producto,
    p.productName AS Nombre_Producto,
    p.unitPrice AS Precio,
    IFNULL(p.unitsInStock, 0) AS Stock,
    so.orderId AS Orden
FROM 
    SalesOrder so
INNER JOIN 
    OrderDetail od ON so.orderId = od.orderId
INNER JOIN 
    Product p ON od.productId = p.productId
WHERE 
    so.orderId=10257;
    
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
SELECT 
    p.productId AS Codigo_Producto,
    p.productName AS Nombre_Producto,
    p.unitPrice AS Precio,
    IFNULL(p.unitsInStock, 0) AS Stock,
    so.orderDate AS Fecha
FROM 
    SalesOrder so
INNER JOIN 
    OrderDetail od ON so.orderId = od.orderId
INNER JOIN 
    Product p ON od.productId = p.productId
WHERE 
    so.orderDate >= '1997-01-01';


-- 39. Calcular los 15 productos mas caros
SELECT 
    productId AS Codigo_Producto,
    productName AS Nombre_Producto,
    unitPrice AS Precio
FROM 
    Product
ORDER BY 
    unitPrice DESC
LIMIT 15;

-- 40. Calcular los 5 productos mas baratos
SELECT 
    productId AS Codigo_Producto,
    productName AS Nombre_Producto,
    unitPrice AS Precio
FROM 
    Product
ORDER BY 
    unitPrice ASC
LIMIT 5;


-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select c.categoryName AS Nombre_Categoria,
	   p.productName AS Nombre_Producto,
       IFNULL(p.unitPrice, 0) AS Precio,
       IFNULL(p.unitsInStock, 0) AS Stock
FROM
	product p
INNER JOIN 
	category c ON p.categoryId=c.categoryId;



-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre 
-- no comience con la letra P
select c.categoryName AS Nombre_Categoria,
	   p.productName AS Nombre_Producto
FROM
	product p
INNER JOIN 
	category c ON p.categoryId=c.categoryId
WHERE p.productName NOT LIKE 'P%';

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
SELECT 
    c.categoryName AS Nombre_Categoria,
    SUM(IFNULL(p.unitsInStock, 0)) AS Stock_Por_Categoria
FROM 
    Product p
INNER JOIN 
    Category c ON p.categoryId = c.categoryId
GROUP BY 
    c.categoryName;

       
-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select c.contactName AS Nombre_Cliente,
	   s.contactName AS Nombre_Proovedor,
	   e.firstname AS Nombre_Empleado,
       p.productName AS Nombre_Producto,
       so.orderID AS Orden
FROM
	salesorder so
INNER JOIN
	Customer c ON so.custId=c.custId
INNER JOIN
	Employee e ON so.employeeId=e.employeeId
INNER JOIN 
	orderDetail od ON so.orderId=od.orderId
INNER JOIN 
	Product p ON od.productId=p.productId
INNER JOIN 
	Supplier s ON p.supplierId=s.supplierId
where so.OrderId=10794;
	
	
       
       
       
-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT 
    c.custId AS Codigo_Cliente,
    YEAR(so.orderDate) AS Año,
    COUNT(so.orderId) AS Numero_De_Ordenes
FROM 
    SalesOrder so
INNER JOIN 
    Customer c ON so.custId = c.custId
GROUP BY 
    c.custId,
    YEAR(so.orderDate)
ORDER BY 
    Codigo_Cliente,
    Año;


-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT 
    YEAR(orderDate) AS Año,
    MONTH(orderDate) AS Mes,
    COUNT(orderId) AS Numero_De_Ordenes
FROM 
    SalesOrder
GROUP BY 
    YEAR(orderDate),
    MONTH(orderDate)
ORDER BY 
    Año,
    Mes;

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden 
-- de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía
-- proveedora y la ciudad del proveedor ,usar Join
SELECT 
    c.companyName AS Nombre_Compania_Cliente,
    so.orderId AS Codigo_Orden_Compra,
    so.orderDate AS Fecha_Orden_Compra,
    od.productId AS Codigo_Producto,
    od.quantity AS Cantidad_Pedida,
    p.productName AS Nombre_Producto,
    s.companyName AS Nombre_Compania_Proveedor,
    s.city AS Ciudad_Proovedor
FROM 
    SalesOrder so
INNER JOIN 
    Customer c ON so.custId = c.custId
INNER JOIN 
    OrderDetail od ON so.orderId = od.orderId
INNER JOIN 
    Product p ON od.productId = p.productId
INNER JOIN 
    Supplier s ON p.supplierId = s.supplierId;

    

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra,
-- la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto
-- y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con 
-- la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187

SELECT 
    c.companyName AS Nombre_Compania_Cliente,
    c.contactName AS Nombre_Contacto,
    so.orderId AS Codigo_Orden_Compra,
    so.orderDate AS Fecha_Orden_Compra,
    od.productId AS Codigo_ProductoquantityPerUnit,
    od.quantity AS Cantidad_Pedida,
    p.productName AS Nombre_Producto,
    s.companyName AS Nombre_Compania_Proveedor
FROM 
    SalesOrder so
INNER JOIN 
    Customer c ON so.custId = c.custId
INNER JOIN 
    OrderDetail od ON so.orderId = od.orderId
INNER JOIN 
    Product p ON od.productId = p.productId
INNER JOIN 
    Supplier s ON p.supplierId = s.supplierId
WHERE 
    s.companyName BETWEEN 'A' AND 'G'
    AND od.quantity BETWEEN 23 AND 187;
    





