CREATE VIEW `Brazil Customers` AS
SELECT CompanyName, ContactName
FROM Customer
WHERE Country = 'Brazil';

select * from `Brazil Customers`;

alter VIEW `Brazil Customers` AS
SELECT CompanyName, ContactName
FROM Customer
WHERE Country in ( 'Brazil','Mexico');

alter VIEW `Brazil Customers` AS
SELECT *
FROM Customer
WHERE Country in ( 'Brazil','Mexico');


select * from `Brazil Customers` where region is not null;

-- mysqldump -u [username] –p[password] [database_name] > [dump_file.sql]
-- mysql -u [username] –p[password] [database_name] < [dump_file.sql]