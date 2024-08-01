SELECT so.orderId, so.orderDate, so.requiredDate, so.shippedDate, so.shipName, so.shipAddress, so.shipCity, so.shipRegion, so.shipPostalCode, so.shipCountry
FROM SalesOrder so
JOIN Customer c ON so.custId = c.custId
WHERE c.companyName = 'Que delicia';
