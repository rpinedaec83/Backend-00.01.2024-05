/*
Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
*/
select * from product 
where unitsInStock > 0 and supplierId in (3,5,1);