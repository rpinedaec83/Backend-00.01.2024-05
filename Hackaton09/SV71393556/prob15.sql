select orderId,productId,unitPrice,quantity, (unitPrice*quantity) as totalPaid from orderdetail;
select * from salesorder;