-- 1.  Seleccionar los clientes que viven en el país de "usa"
Select * 
	from 
    Customer 
    where country = 'USA';
--  2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * 
	from 
    supplier  
    where city = 'Berlin';
-- 3.  Seleccionar los empleados con código 3,5 y 8
select * 
	from 
	employee 
	where employeeId  In(5,3,8);
-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
select
	productName,
    unitsInStock
	from
    product
    where unitsInStock > 0 and supplierId in (1,3,5) ;
-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select * 
	from 
	product 
	where unitPrice >= 20 and unitPrice <= 90; 
-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * 
	from 
    salesorder 
	where orderDate between '1997-01-01' and '1997-07-15';
-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * 
	from 
	salesorder
	where year(orderdate) = 1997 and employeeId In(1,3,4,8);
-- 8.  Mostrar las ordenes hechas en el año 1996
select * 
	from 
    salesorder
	where year(orderdate) = 1997;
-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * 
	from 
    salesorder
	where year(orderdate) = 2008 and month(orderdate) = 4;
-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * 
	from 
    salesorder
	where day(orderdate) = 1 and year(orderdate) = 2006;
-- 11. Mostrar todos los clientes que no tienen fax
select * 
	from 
    customer
	WHERE fax is null;
-- 12. Mostrar todos los clientes que tienen fax
select * 	
	from 
    customer
	WHERE fax is not null;
-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select 
	product.productName,
	product.unitPrice,
    product.unitsInStock,
    category.categoryName
from
	product
inner join
	category on product.categoryId = category.categoryId;
-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select 
	product.productName as Nombre_del_producto,
	product.unitPrice as Precio,
    product.supplierId as Codigo_Producto,
    supplier.companyName as Nombre_compañia
from
	product
inner join
 supplier on product.supplierId = supplier.supplierId;
-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select 
	orderId,
    productId,
    unitPrice,
    quantity, 
    (unitPrice*quantity) as totalPaid 
    from 
    orderdetail;
 -- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
 SELECT 
	salesorder.orderId,
    salesorder.orderDate,
    orderdetail.productId,
    orderdetail.unitPrice,
	salesorder.employeeId,
    concat(employee.firstname, ' ',employee.lastname) as nombre_completo
	from
    salesorder
    inner join
    employee on salesorder.employeeId = employee.employeeId
    inner join
    orderdetail on salesorder.orderId = orderdetail.orderId;
 -- 17. Mostrar los 10 productos con menor stock
 select
	productName,
    unitsInStock
	from
    product
    order by unitsInStock asc
    limit 10;
 -- 18. Mostrar los 10 productos con mayor stock
select
	productName,
    unitsInStock
	from
    product
    order by unitsInStock desc
    limit 10;
-- 19. Mostrar los 10 productos con menor precio
select 
	product.productName,
    product.unitPrice
from
	product
order by unitPrice asc
limit 10;
-- 20. Mostrar los 10 productos con mayor precio
select
	product.productName,
    product.unitPrice
from
	product
order by unitPrice desc
limit 10;
-- 21. Mostrar los 10 productos más baratos
select 
	product.productName,
    product.unitPrice
from
	product
order by unitPrice asc
limit 10;
-- 22. Mostrar los 10 productos más caros
select 
	product.productName,
    product.unitPrice
from
	product
order by unitPrice desc
limit 10;
-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * 
	from 
    customer
	order by companyName;
-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * 
	from 
    customer
	where companyName like 'Customer B%'
	order by customer.companyName;
-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
select * 
	from 
    product
	where categoryId in (1,3,5)
	order by categoryId;
-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select
	product.productName,
    product.unitPrice
    from
    product
    where unitPrice between 50 and 200;
-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select 
	salesorder.orderId, 
    customer.companyName,
    customer.custId,
    salesorder.orderDate,
    product.productName,
    orderdetail.unitPrice
	from 
    salesorder
    inner join
    customer on salesorder.custId = customer.custId
    inner join
    orderdetail on salesorder.orderId = orderdetail.orderId
    inner join
    product on orderdetail.productId = product.productId
    order by salesorder.orderId asc;
-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select
	category.categoryName,
    count(product.productId) as Total_de_Productos
    from
    product
    inner join
    category on product.categoryId = category.categoryId
    group by category.categoryName;
-- 29. Seleccionar los 5 productos mas vendidos
select distinct
	orderdetail.orderId,
	count(orderdetail.productId) as ventas
    from
	orderdetail
    group by orderdetail.orderId
    order by ventas desc
    limit 5;
-- \\\30. Seleccionar los jefes de los empleados
 select * from employee;
-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
 select
	productName,
    unitPrice
    from
    product
    where unitPrice>28 and unitPrice<129 and productName like 'Product A%';
-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
 select
	companyName,
    country
    from
    customer
    where country in('UK', 'USA', 'Francia');
-- 33. Obtener todos los productos descontinuados o con stock cero.
select
	productName,
    unitsInStock
    from
    product
    where discontinued = 1 or unitsInStock = 0;
-- 34. Obtener todas las ordenes hechas por el empleado King Robert
select
	salesorder.orderId,
    concat(employee.lastname, ' ',employee.firstname) as nombrefull
    from
    salesorder
    inner join
    employee on salesorder.employeeId = employee.employeeId
    where lastname = 'King' and firstname = 'Robert';
-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"

-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select distinct
	salesorder.orderId,
    concat(employee.lastname, ' ',employee.firstname) as nombrefull
    from
    salesorder
    inner join
    employee on salesorder.employeeId = employee.employeeId
    where (employee.lastname = 'King' AND employee.firstname = 'Russell')
    or (employee.lastname = 'Buck' AND employee.firstname = 'Sven')
    or (employee.lastname = 'Lew' AND employee.firstname = 'Judy')
    order by nombrefull;
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select
	orderdetail.orderId,
    orderdetail.productId,
    product.productName,
    product.unitPrice,
    product.unitsInStock
    from
    orderdetail
    inner join
    product on orderdetail.productId = product.productId
    where orderdetail.orderId = 10257;
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select
	orderdetail.orderId,
    orderdetail.productId,
    product.productName,
    product.unitPrice,
    product.unitsInStock,
    salesorder.orderDate
    from
    orderdetail
    inner join
    product on orderdetail.productId = product.productId
    inner join
    salesorder on orderdetail.orderId = salesorder.orderId 
    where salesorder.orderDate >= '1997-01-01' and salesorder.orderDate <= current_date;
-- 39. Calcular los 15 productos mas caros
select
	productName,
    unitPrice
    from
    product
    order by unitPrice desc
    limit 15;
-- 40. Calcular los 5 productos mas baratos
select
	productName,
    unitPrice
    from
    product
    order by unitPrice asc
    limit 5;
-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select distinct
	categoryName,
    product.productName,
    product.unitPrice,
    product.unitsInStock
    from
    category
    inner join
    product on category.categoryId = product.categoryId;
-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
select distinct
	categoryName,
    product.productName,
    product.unitPrice,
    product.unitsInStock
    from
    category
    inner join
    product on category.categoryId = product.categoryId
    where productName like 'Product P%';
-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select distinct
	category.categoryName,
    sum(product.unitsInStock) as total_stock
    from
    category
    inner join	
    product on category.categoryId = product.categoryId
    group by category.categoryName;
-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select
	salesorder.orderId,
    customer.companyName as cliente,
    supplier.companyName as proveedor,
    concat(employee.lastname,' ', employee.firstname) as empleado,
    product.productName as productos
    from
    salesorder
    inner join
    customer on salesorder.custId = customer.custId 
    inner join
    orderdetail on salesorder.orderId = orderdetail.orderId
    inner join
    product on orderdetail.productId = product.productId
    inner join
    supplier on product.supplierId = supplier.supplierId
    inner join
    employee on salesorder.employeeId = employee.employeeId
    where salesorder.orderId = 10974;
-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select
    year(salesorder.orderDate) as año,
	salesorder.custId,
    count(orderId) as Total_ordenes
    from
    salesorder
    group by custId, año
    order by año, custId;
-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select
    year(salesorder.orderDate) as año,
	month(salesorder.orderDate) as mes,
    count(orderId) as total_ordenes
    from
    salesorder
    group by mes, año
    order by año, mes;
-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, 
-- código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
select
	customer.companyName,
	salesorder.orderId,
	salesorder.orderDate,
    orderdetail.productId,
    orderdetail.quantity,
    product.productName,
    supplier.companyName,
    supplier.city
    from
    salesorder
    inner join
    customer on salesorder.custId = customer.custId
    inner join
    orderdetail on salesorder.orderId = orderdetail.orderId
    inner join
    product on orderdetail.productId = product.productId
    inner join
    supplier on product.supplierId = supplier.supplierId;
-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra, la fecha de la orden de compra, 
-- el código del producto,cantidad pedida del producto, nombre del producto y el nombre de la compañía proveedora, usas JOIN.Solamente las compañías 
-- proveedoras que comienzan con la letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
select
	customer.companyName,
    customer.contactName,
	salesorder.orderId,
    salesorder.orderDate,
    orderdetail.productId,
    orderdetail.quantity,
    product.productName,
    supplier.companyName
    from
    salesorder
    inner join
	customer on salesorder.custId = customer.custId
	inner join
    orderdetail on salesorder.orderId = orderdetail.orderId
    inner join
    product on orderdetail.productId = product.productId
	inner join
    supplier on product.supplierId = supplier.supplierId
    where	orderdetail.quantity>=23 and orderdetail.quantity<=187 
    AND supplier.companyName LIKE 'Supplier A%'
    OR supplier.companyName LIKE 'Supplier B%'
    OR supplier.companyName LIKE 'Supplier C%'
    OR supplier.companyName LIKE 'Supplier D%'
    OR supplier.companyName LIKE 'Supplier E%'
    OR supplier.companyName LIKE 'Supplier F%'
    OR supplier.companyName LIKE 'Supplier G%';