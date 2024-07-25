SELECT * FROM Customer;
SELECT companyName, City FROM Customer;
select distinct city from Customer;

SELECT Count(*) AS DistinctCountries
FROM  Customer;
SELECT * FROM Customer
WHERE Country='Mexico';


SELECT * FROM Customer
WHERE Country in ('Mexico','UK', 'France');

