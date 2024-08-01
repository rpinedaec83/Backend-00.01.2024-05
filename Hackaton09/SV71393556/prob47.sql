SELECT
    c.companyName AS customerCompanyName,
    so.orderId AS orderCode,
    so.orderDate AS orderDate,
    p.productId AS productCode,
    od.quantity AS quantityOrdered,
    p.productName AS productName,
    s.companyName AS supplierCompanyName,
    s.city AS supplierCity
FROM SalesOrder so
JOIN OrderDetail od ON so.orderId = od.orderId
JOIN Product p ON od.productId = p.productId
JOIN Customer c ON so.custId = c.custId
JOIN Supplier s ON p.supplierId = s.supplierId
ORDER BY so.orderId, p.productId;