select * from salesorder
where orderId in (1,3,4,8) and  YEAR(orderDate) =1997;