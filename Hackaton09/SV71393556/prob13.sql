select p.productName, p.unitPrice,p.unitsInStock, c.categoryName from product p
inner join category c
on c.categoryId=p.categoryId;