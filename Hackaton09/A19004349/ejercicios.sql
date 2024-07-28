-- 1- Seleccionar los clientes que viven en el país de "usa"
        Select * from Customer where country = 'USA';
        
 -- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
           Select * from Customer where city = 'Berlin';
           
-- 3.  Seleccionar los empleados con código 3,5 y 8
	Select * from employee where employeeId in (3,5,8);
-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
	select * from product where supplierId in (1,3,5) and unitsInStock > 0 ;
    
-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
	select * from product where unitPrice >= 20 and unitPrice <=90;
-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
 select * from salesorder where orderdate between '1997-01-01' AND '1997-07-15';
 
-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
 select * from salesorder where YEAR(orderdate) =1997 and employeeId in (1,3,4,8);
 
-- 8.  Mostrar las ordenes hechas en el año 1996
 select * from salesorder where YEAR(orderdate) =1996;

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
 select * from salesorder where YEAR(orderdate) =1997 and MONTH(orderdate) = 4;
 
-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
 
 select * from salesorder where YEAR(orderdate) =1998 and DAY(ordedate) = 1;

-- 11. Mostrar todos los clientes que no tienen fax
 select * from customer where fax is null;

-- 12. Mostrar todos los clientes que tienen fax
 select * from customer where fax is not null;
 
-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName,p.unitPrice,p.unitsInStock,c.categoryName from product p JOIN category c on p.categoryId=c.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.

select p.productName,p.unitPrice,s.supplierId,s.companyName from product p JOIN supplier s on p.supplierId = s.supplierId;


-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.

select od.orderId,p.productId,od.quantity,(od.quantity * p.unitPrice) as 'Total' from product p
 JOIN orderdetail od on od.productId = p.productId;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.

select od.orderId,od.orderDate,p.productId,p.unitPrice,od.employeeId,  CONCAT(e.firstname, ' ', e.lastname) AS 'Nombre completo'
from product p
  JOIN orderdetail ord on ord.productId = p.productId
 JOIN salesorder od on od.orderId = ord.orderId
 JOIN employee e on e.employeeId = od.employeeId;

-- 17. Mostrar los 10 productos con menor stock
select * from product order by unitsInStock limit 10;

-- 18. Mostrar los 10 productos con mayor stock
select * from product order by unitsInStock desc limit 10;

-- 19. Mostrar los 10 productos con menor precio
select * from product order by unitprice limit 10;

-- 20. Mostrar los 10 productos con mayor precio
select * from product order by unitprice desc limit 10;

-- 21. Mostrar los 10 productos más baratos

select * from product order by unitprice limit 10;

-- 22. Mostrar los 10 productos más caros

select * from product order by unitprice desc limit 10;

-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania

select * from customer order by companyName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania

select * from customer Where companyName like 'B%' and Country ='UK';

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria

select p.* from product p JOIN category c on c.categoryId = p.categoryId
where c.categoryId in (1,3,5) order by c.CategoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200

select * from product where unitPrice between 50 and 200;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden

select c.custId,c.companyName,so.orderDate,p.unitPrice,p.productName from product p 
JOIN orderdetail od on od.productId = p.productId
JOIN salesorder so on so.orderId = od.orderId
JOIN customer c on c.custId = so.custId;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.

select c.categoryName, count(p.productId) from product p join category c on c.categoryId = p.categoryId group by c.categoryId;

-- 29. Seleccionar los 5 productos mas vendidos
select p.productId,p.productName,count(od.orderDetailId) 
from orderdetail od 
join product p on p.productId = od.productId
group by p.productId 
order by count(od.orderDetailId) desc
limit 5
;

-- 30. Seleccionar los jefes de los empleados
select * from employee where title = 'Sales Manager';

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from product where productName like 'M%' and unitPrice between 28 and 129;

-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
select * from customer where country in ('USA','France','UK');

-- 33. Obtener todos los productos descontinuados o con stock cero.
select * from product where discontinued = 0 or COALESCE(unitsInStock,0)=0 ;

-- 34. Obtener todas las ordenes hechas por el empleado King Robert
select * from salesorder so JOIN employee e on e.employeeId = so.employeeId
where e.firstname = 'King' and e.lastname ='Robert';

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select * from salesorder so 
join customer c on c.custId = so.custId
where c.companyName = 'Que delicia';

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select * from salesorder so JOIN employee e on e.employeeId = so.employeeId
where 
(e.firstname = 'King' and e.lastname ='Robert') OR
(e.firstname = 'Davolio' and e.lastname ='Nancy') OR
(e.firstname = 'Fuller' and e.lastname ='Andrew') 
;

-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select p.productId,P.productName,P.unitPrice,P.unitsInStock from orderdetail od join product p on p.productId = od.productId 
Where od.orderId=10257;

-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select p.productId,P.productName,P.unitPrice,P.unitsInStock 
from orderdetail od 
join product p on p.productId = od.productId 
join salesorder so on so.orderId = od.orderId
Where YEAR(so.orderDate) > 1997 ;

-- 39. Calcular los 15 productos mas caros
select * from product order by unitPrice desc limit 15;

-- 40. Calcular los 5 productos mas baratos
select * from product order by unitPrice  limit 5;

-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.

select c.categoryName,P.productName,P.unitPrice,p.unitsInStock from category c LEFT JOIN product p on p.categoryId = c.categoryId;

-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra    P

select c.categoryName,P.productName,P.unitPrice,p.unitsInStock 
from category c
LEFT JOIN product p on p.categoryId = c.categoryId
Where p.productName not like 'P%';
;

-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.

select c.categoryName, sum(p.unitsInStock) from category c join product p on p.categoryId = c.categoryId group by c.categoryId;


-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794

select c.contactName ,s.contactName, concat(e.firstname,e.lastname) as 'nombre empleado',p.productName
from orderdetail od 
join product p on p.productId = od.productId 
join salesorder so on so.orderId = od.orderId
join customer c on c.custId = so.custId
join employee e on e.employeeId = so.employeeId
join supplier s on s.supplierId = p.supplierId
Where od.orderId=10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.

select c.contactName,count(so.orderId) from salesorder so 
JOIN customer c on c.custId = so.custId group by c.custId
order by c.custId;

-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.

SELECT YEAR(OrderDate) AS Year, MONTH(OrderDate) AS Month, COUNT(1) AS OrderCount
FROM  salesorder GROUP BY YEAR(OrderDate), MONTH(OrderDate) ORDER BY Year, Month;

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

select c.companyName,od.orderId,so.orderDate,p.productId, od.quantity,s.companyName, s.city
from orderdetail od 
join product p on p.productId = od.productId 
join salesorder so on so.orderId = od.orderId
join customer c on c.custId = so.custId
join employee e on e.employeeId = so.employeeId
join supplier s on s.supplierId = p.supplierId;


-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
select c.companyName,c.contactName,od.orderId,so.orderDate,p.productId,od.quantity,p.productName,s.companyName
from orderdetail od 
join product p on p.productId = od.productId 
join salesorder so on so.orderId = od.orderId
join customer c on c.custId = so.custId
join employee e on e.employeeId = so.employeeId
join supplier s on s.supplierId = p.supplierId
where s.CompanyName BETWEEN 'A' AND 'G%' 
and od.quantity between 23 and 187
;


