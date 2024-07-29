SELECT 
    c.companyName AS CompanyName,
    c.custId AS CustomerId,
    so.orderDate AS OrderDate,
    od.unitPrice AS UnitPrice,
    p.productName AS ProductName
FROM 
    SalesOrder so
JOIN 
    Customer c ON so.custId = c.custId
JOIN 
    OrderDetail od ON so.orderId = od.orderId
JOIN 
    Product p ON od.productId = p.productId;