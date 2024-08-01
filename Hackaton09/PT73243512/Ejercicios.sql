-- 1. Seleccionar los clientes que viven en el país de "usa"
Select * from Customer where country = 'USA';
-- 2. Seleccionar los proveedores que viven en la ciudad de "BERLIN"
Select * from supplier where city = 'Berlin';
-- 3. Seleccionar los empleados con código 3,5 y 8
Select * from employee where employeeId in (3, 5, 8);
-- 4. Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
Select * from product where unitsInStock > 0  and supplierId in (1, 3, 5);
-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
Select * from product where unitPrice >= 20  and unitPrice <= 90 ;
-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
Select * from salesorder where orderDate between '01/01/1997' and '15/07/1997';
-- 7. Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
Select * from salesorder where year(orderDate) = 1997 and employeeId in (1, 3, 4, 8);
-- 8. Mostrar las ordenes hechas en el año 1996
Select * from salesorder where year(orderDate) = 1996;
-- 9. Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from salesorder where year(orderDate) = 1997 and month(orderDate) = 04;
-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from salesorder where year(orderDate) = 1998 and day(orderDate) = 01;
-- 11. Mostrar todos los clientes que no tienen fax
select * from Customer where fax is null or fax = '';
-- 12. Mostrar todos los clientes que tienen fax
select * from customer where fax is not null and fax <> '';
-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName, p.unitPrice, p.unitsInStock, c.categoryName from product p join category c on p.categoryId = c.categoryId;
-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select p.productName, p.unitPrice, p.supplierId, pr.companyName from product p join supplier pr on p.supplierId = pr.supplierId;
-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select orderId, productId, unitPrice, quantity, (unitPrice * quantity) as total_pagado from orderdetail;
-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select o.orderId, o.orderDate, o.productId, o.unitPrice, o.employeeId, e.fullname as employeeName from orderdetail o join employee e on o.employeeId = e.employeeId;
-- 17. Mostrar los 10 productos con menor stock
select productName, unitsInStock from product order by unitsInStock asc limit 10;
-- 18. Mostrar los 10 productos con mayor stock
select productName, unitsInStock from product order by unitsInStock desc limit 10;
-- 19. Mostrar los 10 productos con menor precio
select productId, productName, unitPrice from product order by unitPrice asc limit 10;
-- 20. Mostrar los 10 productos con mayor precio
select productId, productName, unitPrice from product order by unitPrice desc limit 10;
-- 21. Mostrar los 10 productos más baratos
select productId, productName, unitPrice from product order by unitPrice asc limit 10;
-- 22. Mostrar los 10 productos más caros
select productId, productName, unitPrice from product order by unitPrice desc limit 10;
-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compañia
select * from customer order by companyName asc;
-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compañia
select * from customer where companyName like 'B' and country = 'UK' order by companyName asc;
-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria
select * from product where categoryId in (1, 3, 5) order by categoryId asc;
-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from product where unitPrice between 50 and 200;
-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select c.companyName as companyName, c.custId as custId, o.orderDate, od.unitPrice, p.productName as product from orderdetail o join customer c on o.custId = c.custId join orderdetail od on o.orderId = od.orderId join product p on od.productId = p.productId;
-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select c.categoryName, count(p.productId) as quantity from category c left joint product p on c.categoryId = p.categoryId group by c.categoryId, c.categoryName;
-- 29. Seleccionar los 5 productos mas vendidos
select p.productName,SUM(od.quantity) as total_vendido from orderdetail od join product p on od.productId = p.productId group by p.productId, p.productName order by total_vendido desc limit 5;
-- 30. Seleccionar los jefes de los empleados
select e1.lastname as employee, e2.lastname as company from employee e1 left join employee e2 on e1.companyId = e2.employeeId;
-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from product where productName like 'M%'and unitPrice between 28 and 129;
-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
select * from customer where country in ('USA', 'Francia', 'UK');
-- 33. Obtener todos los productos descontinuados o con stock cero.
select productName, unitsInStock, descontinuado from product where descontinuado = 1 or unitsInStock = 0;
-- 34. Obtener todas las ordenes hechas por el empleado King Robert
select o.* from orderdetail o join employee e on o.employeeId = e.employeeId where e.lastname = 'King Robert';
-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select o.* from orderdetail o join customer c on o.custId = c.custId where c.companyName = 'Que delicia';
-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select o.* from orderdetail o join employee e on o.employeeId = e.employeeId where e.lastname in ('King Robert', 'Davolio Nancy', 'Fuller Andrew');
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select p.productId as codigo, p.productName as nombre, p.unitPrice, p.unitsInStockfrom orderdetail od join productos p on od.productId = p.productId where od.orderDetailId = 10257;
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select p.productId as codigo,p.productName as nombre,p.unitPrice,p.unitsInStockfrom from orderdetail od join productos p on od.productId = p.productId join orderdetail o on od.orderDetailId = o.orderDetailId where o.fecha_orden >= '1997-01-01' and o.fecha_orden <= CURDATE();
-- 39. Calcular los 15 productos mas caros
select productId as codigo, productName as nombre, unitPrice from product order by unitPrice desc limit 15;
-- 40. Calcular los 5 productos mas baratos
select productId as codigo, productName as nombre, unitPrice from product order by unitPrice asc limit 5;
-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select c.categoryName as category, p.productName as product, p.unitPrice, p.unitsInStock from category c join product p on c.categoryId = p.categoryId order by c.categoryName, p.productName;
-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select c.categoryName as category, p.productName as product, p.unitPrice, p.unitsInStock from category c join product p on c.categoryId = p.categoryId where p.productName not like 'P%'order by c.categoryName, p.productName;
-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select c.categoryName as category, SUM(p.unitsInStock) as stock_total from category c join productos p on c.categoryId = p.categoryId group by c.categoryName order by stock_total desc;
-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select c.contactName as contactName, pr.companyName as companyName, e.lastname as lastname, p.productName as productName
from ordenes o join clientes c on o.custId = c.custId join empleados e on o.employeeId = e.employeeId join ordenes_detalle od on o.orderDetailId = od.orderDetailId
join productos p on od.productId = p.productId join proveedores pr on p.supplierId = pr.supplierId where o.orderDetailId = 10794;
-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select c.custId as codigo_cliente, YEAR(o.orderDate) as año, count(o.orderDetailId) as num_ordenes from ordenes o join clientes c on o.custId = c.custId group by c.custId, year(o.orderDate) order by c.custId, año;
-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select year(o.orderDate) as año, month(o.orderDate) as mes, count(o.orderDetailId) as num_ordenes from ordenes o group by year(o.orderDate), month(o.orderDate) order by año, mes;
-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
select c.companyName as companyName, o.orderDetailId as orderDetailId, o.orderDate as orderDate,
    od.producto_id as codigo_producto, od.quantity as quantity, p.productName as productName,  pr.companyName as companyName,
    pr.city as city from orderdetail o join clientes c on o.custId = c.custId join ordenes_detalle od on o.orderDetailId = od.orderDetailId
join productos p on od.productId = p.productId join proveedores pr on p.supplierId = pr.supplierId;
-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187. 
select c.companyName as nombre_compania_cliente, c.nombre_contacto as nombre_contacto_cliente, o.orderDetailId as orderDetailId,
    o.orderDate as orderDate,od.productId as productId, od.quantity as quantity,  p.productName as productName,
    pr.companyName as companyName from orderdetail o join customer c on o.cliente_id = c.cliente_id join ordenes_detalle od on o.orden_id = od.orden_id
join productId p on od.productId = p.productId join supplierId pr on p.supplierId = pr.supplierId where pr.companyName like 'A%' or pr.companyName like 'B%' 
   or pr.companyName like 'C%' or pr.companyName like 'D%' or pr.companyName like 'E%' or pr.companyName like 'F%' 
   or pr.companyName like 'G%' and od.quantity between 23 and 187;