-- 1.  Seleccionar los clientes que viven en el país de "usa"
Select * from Customer where country = 'USA';

-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select*from supplier where city='Berlin';

-- 3.  Seleccionar los empleados con código 3,5 y 8
select*from employee
where employeeId in (3,5,8);

-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
select*from product
where unitsInStock>0 and supplierId in (1,3,5);

-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select*from product
where unitPrice between 20.00 and 90.00;

-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select*from salesorder
where orderDate between '1997-01-01' and '1997-07-15';

-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from salesorder
where employeeId in (1,3,4,8) and  YEAR(orderDate) =1997;

-- 8.  Mostrar las ordenes hechas en el año 1996
select * from salesorder
where   YEAR(orderDate) =1996;

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from salesorder
where   YEAR(orderDate) ='1997' and month(orderDate) ='04';

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from salesorder
where   YEAR(orderDate) ='1998' and day(orderDate) ='01';

-- 11. Mostrar todos los clientes que no tienen fax
select*from customer
where fax is null;

-- 12. Mostrar todos los clientes que tienen fax
select*from customer
where fax is not null;

-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select p.productName,p.unitsInStock, c.categoryName from product p
inner join category c
on c.categoryId=p.categoryId;

-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select  p.productName,p.unitPrice, s.supplierId,s.companyName from product p
inner join supplier s
on s.supplierId=p.categoryId;

-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select orderId,productId,unitPrice,quantity, (unitPrice*quantity) as totalPaid from orderdetail;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select s.orderID, s.orderDate, o.productId,o.unitPrice,e.employeeId, concat(e.lastname,' ',e.firstname) as nombre from salesorder s
inner join orderdetail o 
on s.orderID=o.orderId
inner join employee e on
s.employeeId=e.employeeID;

-- 17. Mostrar los 10 productos con menor stock
select * from product
order by unitsInStock ASC
LIMIT 10;

-- 18. Mostrar los 10 productos con mayor stock
select * from product
order by unitsInStock desc
LIMIT 10;

-- 19. Mostrar los 10 productos con menor precio
select * from product
order by unitPrice asc
LIMIT 10;

-- 20. Mostrar los 10 productos con mayor precio
select * from product
order by unitPrice desc
LIMIT 10;

-- 21. Mostrar los 10 productos más baratos
select * from product
order by unitPrice asc
LIMIT 10;

-- 22. Mostrar los 10 productos más caros
select * from product
order by unitPrice asc
LIMIT 10;


-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
select*from customer
order by companyName;

-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select  * from customer
where companyName like 'B%' and country = 'UK'
order by companyName ASC;

-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5 ,ordenar por categoria
select*from product
where categoryId in (1,3,5)
order by categoryId;

-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select*from product
where unitPrice between 50.00 and 200.00;

-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select cu.custId,cu.companyName,so.orderDate,od.unitPrice from
salesorder so
inner join customer cu
on so.custId= cu.custId
inner join orderdetail od
on so.orderId= od.orderId;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select c.categoryName, count(p.productId) as productCount from category as c
left join product p 
on p.categoryId = c.categoryId;

-- 29. Seleccionar los 5 productos mas vendidos
SELECT 
    p.productName, 
    SUM(od.quantity) AS totalSold
FROM 
    orderDetail od
JOIN 
    product p ON od.productId = p.productId
GROUP BY 
    p.productId, p.productName
ORDER BY 
    totalSold DESC
LIMIT 5;

-- 30. Seleccionar los jefes de los empleados
select e1.employeeId, e1.firstname
from employee e1
left join employee e2 on e1.mgrId = e2.employeeId;

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select*from product
where productName like 'M%' and unitPrice between '28.00' and '129.00';
-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
select*from customer
where country in ('UK','USA','France');

-- 33. Obtener todos los productos descontinuados o con stock cero.
select*from product
where unitsInStock=0 or discontinued=0;
-- 34. Obtener todas las ordenes hechas por el empleado King Robert
select*from salesorder
where employeeId in (
select employeeId from employee where lastname='King' and firstname='Robert' );
-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select*from salesorder 
where custId in (select custId from customer
where companyName = 'Delicia');

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select * from salesOrder
where employeeId in(
select	employeeId from employee
where (lastname='King' and firstname='Russell') or
		(lastname='Davolio' and firstname='Nancy') or
        (lastname='Fuller' and firstname='Andrew')
);
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select p.productId,p.productName,p.unitPrice,p.unitsInStock from orderdetail o
inner join product p on
p.productId=o.productId
where o.orderId=10257;
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.

select p.productId,p.productName,p.unitPrice,p.unitsInStock from orderdetail o
inner join product p on
p.productId=o.productId
inner join salesorder s on
s.orderId=o.orderId
where year(s.orderDate)>=1997;
-- 39. Calcular los 15 productos mas caros
select productName,unitPrice from product
order by unitPrice desc
limit 15;
-- 40. Calcular los 5 productos mas baratos
select productName,unitPrice from product
order by unitPrice asc
limit 15;
-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select c.categoryName,p.productName,p.unitPrice,p.unitsInStock from category c
inner join product p on
c.categoryId=p.categoryId;
-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select c.categoryName,p.productName from category c
inner join product p on
c.categoryId=p.categoryId
where p.productName not like 'P%';
-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select c.categoryId,c.categoryName,sum(p.unitsInStock) as stock_por_categoria from product p
inner join category c on  c.categoryId=p.categoryId
group by c.categoryId,c.categoryName;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794

select c.companyName, s.companyName, concat(e.lastname,' ',e.firstname) Nombre, p.productName from salesorder ss
inner join  customer c on ss.custId=c.custId
inner join  employee e on e.employeeId=ss.employeeId
inner join orderdetail o on o.orderId=ss.orderId
inner join product p on p.productId=o.productId
inner join supplier s on s.supplierId=p.supplierId
where ss.orderId='10794';


-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select c.custId, c.companyName, year(s.orderDate) as fecha , count(s.orderId) from customer c
inner join salesorder s on s.custId=c.custId
group by  c.custId,c.companyName,year(s.orderDate)
order by c.custId, year(s.orderDate);

-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select year(orderDate) as anio, month(orderDate) as mes , count(orderId) as cantidad_orden from salesorder
group by anio,mes
order by anio,mes ;
-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join

select c.companyName,ss.orderId, ss.orderDate,p.productId,o.quantity, p.productName,s.companyName,s.city from customer c
inner join salesorder ss on c.custId=ss.custId
inner join orderdetail o on o.orderId=ss.orderId
inner join product p on p.productId=o.productId
inner join supplier s on s.supplierId=p.supplierId;

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.

select c.companyName,c.contactName,o.orderId,ss.orderDate,p.productId,o.quantity,p.productName,s.companyName from customer c
inner join salesorder ss on c.custId=ss.custId
inner join orderdetail o on o.orderId=ss.orderId
inner join product p on p.productId=o.productId
inner join supplier s on s.supplierId=p.supplierId
WHERE s.companyName BETWEEN 'A' AND 'G'
AND o.quantity BETWEEN 23 AND 187;
