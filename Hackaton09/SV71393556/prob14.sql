select p.productName, p.unitPrice,s.supplierId, s.companyName from product p
inner join supplier s
on s.supplierId=p.supplierId;