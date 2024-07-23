SELECT * FROM Customer;
SELECT companyName, City FROM Customer;
select distinct city from Customer;

SELECT Count(*) AS DistinctCountries
FROM  Customer;
SELECT * FROM Customer
WHERE Country='Mexico';


SELECT * FROM Customer
WHERE Country in ('Mexico','UK', 'France');

select * from product;
select * from product order by unitPrice;
select * from product order by unitPrice desc;


SELECT * FROM Product
ORDER BY ProductName, unitprice ;


SELECT * FROM Customer
ORDER BY Country, CompanyName;

SELECT * FROM Customer
WHERE NOT Country = 'Spain';
SELECT * FROM Customer
WHERE Country = 'Germany'
AND City = 'Berlin'
and PostalCode < 12000;


select * from Customer where region is not null;


SELECT min(Unitprice) FROM Product;
SELECT max(Unitprice) FROM Product;
SELECT avg(Unitprice) FROM Product;
SELECT sum(Unitprice) FROM Product;

SELECT * FROM Customer
WHERE city LIKE '%L%';
select count(*) FROM Product;


SELECT * FROM Customer
WHERE city LIKE '%L%';

SELECT * FROM Customer
WHERE city LIKE 'L%';

SELECT * FROM Customer
WHERE city LIKE '%g';

Select * from Customer
 WHERE contactname LIKE 'A%' OR contactname LIKE 'B%';
 
 SELECT * FROM Customer
WHERE City LIKE '_ondon';

SELECT * FROM Customer
WHERE contactname LIKE '[B]%';

SELECT * FROM Customer
WHERE contactname LIKE '[a-f]%';


SELECT * FROM Customer
WHERE custid not IN (
SELECT custid FROM SalesOrder);

SELECT * FROM Product
WHERE unitPrice BETWEEN 10 AND 20;

SELECT * FROM Product
WHERE unitPrice >= 10 AND  unitPrice <= 20;


SELECT * FROM SalesOrder
where orderdate not between '2006-07-01' and '2006-08-31';

SELECT COUNT(custid), Country
FROM Customer
GROUP BY Country
having COUNT(custid) > 5;