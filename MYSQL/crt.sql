use crt
CREATE TABLE patient (
    pid INT,
    fname VARCHAR(40),
    lname VARCHAR(40),
    age INT,
    bg VARCHAR(40)
);
INSERT INTO patient VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');
select * from patient;
select pid,fname,lname,age,bg from patient;
select concat(fname,lname," bg is ",bg," AND He/She is from India")as patient_details from patient
CREATE TABLE employee (
    eid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    salary INT NULL,
    dept VARCHAR(20),
    doj 
INSERT INTO employee VALUES
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23'),
(2, 'sowmya', 'kumari', 23, 19000, 'db', '2010-11-13'),
(3, 'kishore', 'kumar', 27, 36000, 'android', '2011-10-16'),
(4, 'abimanyu', 'biswal', 22, NULL, 'android', '2010-02-20'),
(5, 'soni', 'kumar', 24, 21800, '.net', '2009-06-21'),
(6, 'anu', '_singh', 22, 12000, 'db', '2010-10-23'),
(7, '_dinesh', 'moh%anty', 23, 15000, '.net', '2009-08-26'),
(8, 'nishala', '_kumari', 22, 18000, 'db', '2008-07-19'),
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23');
select fname,lname,bg from patient order by bg desc ;
select fname,lname,pid from patient order by lname,fname desc;
select fname,age from patient order by concat('Hello'+fname+lname) desc; 
select * from patient order by age desc;
select distinct fname,age from patient;
select distinct age,bg from patient;
select distinct fname,age,bg from patient order by bg desc;
select fname,lname,age from patient limit 3;
select * from patient order by age desc limit 3;
select * from patient where age>40;
select * from patient where fname like 'm%';
select * from patient where lname like '%i';
select * from patient where lname like '%a_';
select * from patient where fname like '%r__';
select * from patient where fname like '%i%';
select max(age) from patient;
select min(age) from patient;
select avg(age) from patient;
select count(age) from patient;
select age from patient group by age;
select bg,count(*) from patient group by bg;
select dept from employee group by dept;
select max(age),bg from patient group by bg;
select lname,min(age) from patient group by bg,lname;
select max(age),bg from patient group by bg having max(age)>40;
select * from employee;
select * from employee where salary between(select max(salary) from employee where dept='.net')and(select MAX(salary) from employee where dept='.net');
select p1.* from patient p1 where 3=(select count(distinct(p2.pid)) from patient p2 where p2.age>p1.age);
CREATE TABLE appointment (
    aid INT,
    pid INT,
    doctor_name VARCHAR(40),
    app_date DATE
);
INSERT INTO appointment VALUES
(101, 1, 'Dr. Ravi', '2026-03-01'),
(102, 2, 'Dr. Priya', '2026-03-02'),
(103, 4, 'Dr. Arjun', '2026-03-03'),
(104, 10, 'Dr. Meena', '2026-03-04');
select p.pid, p.fname, p.age, a.doctor_name, a.app_date from patient p inner join appointment a on p.pid = a.pid;
select p.pid, p.fname, a.doctor_name from patient p left join appointment a on p.pid = a.pid;
select p.pid, p.fname, a.doctor_name from patient p right join appointment a on p.pid = a.pid;