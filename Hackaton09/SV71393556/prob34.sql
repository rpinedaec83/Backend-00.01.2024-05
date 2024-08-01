SELECT so.orderId, so.orderDate, so.requiredDate, so.shippedDate, so.shipName, so.shipAddress, so.shipCity, so.shipRegion, so.shipPostalCode, so.shipCountry
FROM SalesOrder so
JOIN Employee e ON so.employeeId = e.employeeId
WHERE e.firstname = 'Robert' AND e.lastname = 'King';
