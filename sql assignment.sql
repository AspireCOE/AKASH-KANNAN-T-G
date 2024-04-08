create schema aspire;
use aspire;
create table programmer(name varchar(8) not null,dob date not null,doj date not null,sex varchar(1) not null,prof1 varchar(8),prof2 varchar(8),salary int not null);

insert into programmer values("somdutt","1997-12-09","2024-7-13","m","pascal","basic",6200);
insert into programmer values("Akash","1996-02-13","2024-5-12","m","cobol","clipper",6200);
insert into programmer values("Nami","1955-04-11","1985-6-12","f","cobol","clipper",6200);
insert into programmer values("Santhosh","1999-10-12","2024-05-06","m","c++","python",100000);
insert into programmer values("Kannan","1998-09-14","2023-04-03","m","java","c++",60000);
insert into programmer values("Mary","1995-07-02","2023-06-01","f","pascal","python",750000);
insert into programmer values("Robin","1997-10-12","2020-03-15","f","ml","basic",75000);
insert into programmer values("Monica","2000-04-16","2026-01-07","f","basic","ml",200000);
insert into programmer values("Rachel","1998-05-08","2025-07-09","f","basic","python",85000);

create table software(name varchar(8) not null,title varchar(20) not null,dev_in varchar(8) not null,scost decimal(7,2),dcost INT(5),sold INT(3));

insert into software values("Akash","project1","pascal",432.34,5000,40);
insert into software values("Kannan","project2","basic",512.34,6000,30);
insert into software values("Mary","project3","pascal",452.34,5500,37);
insert into software values("Santhosh","E-commerce","java",2000,3000,10);
insert into software values("Nami","Fault Detection","ml",1000,2000,11);
insert into software values("somdutt","parachutes","basic",3000,4000,8);
insert into software values("Robin","CarCrush","c++",3000,4000,12);
insert into software values("Monica","Call Animation","pascal",2500,2700,4);
insert into software values("Rachel","friday","java",3500,5000,20);

create table studies(name varchar(8) not null,splace varchar(9) not null,course varchar(5) not null,ccost varchar(5) not null);

insert into studies values("somdutt","florida","ai",10000);
insert into studies values("Akash","Korea","it",20000);
insert into studies values("Nami","japan","da",5000);
insert into studies values("Santhosh","Canada","iot",30000);
insert into studies values("Kannan","america","csc",15000);
insert into studies values("Mary","Australia","mech",12000);
insert into studies values("Robin","New York","ece",14000);
insert into studies values("Monica","Delhi","cs",16000);
insert into studies values("Rachel","Russia","eee",13000);

/*Queries*/

select avg(scost+dcost) as Average from software where dev_in="pascal";

select name,date_format(from_days(datediff(now(),dob)),'%y') as age from programmer;

select p.name as Name,date_format(from_days(datediff(now(),dob)),'%y') as Age from programmer as p inner join studies as s on p.name=s.name where s.course="eee";

select title as Project,sold from software where sold=(select max(sold) from software);

select name as NAME, dob as DOB from programmer where month(dob)=1;

select course,ccost from studies where ccost=(select min(ccost) from studies);

select count(*) from studies where course="ece";

select sum(sold*scost+dcost) as Revenue from software where dev_in="c++";

select * from software where name="Akash";

select count(*) as Count from studies  where splace="japan";

select * from software where sold*scost+dcost >20000;

select ceil(dcost/scost) as copies from software;

select title as Project,scost as Price from software where scost=(select max(scost) from software where dev_in="basic");

select * from software where (scost*sold>=dcost);

select count(*) from software where dev_in = 'c++';

select count(*) from studies where splace = 'korea';

select count(*)
from studies
where ccost between '12000' and '15000';

select avg(ccost) as average_course_fee
from studies;

select *
from programmer
where prof1 = 'c++' or prof2 = 'c++';

select count(*)
from programmer
where prof1 in ('cobol', 'pascal') or prof2 in ('cobol', 'pascal');

select count(*)
from programmer
where prof1 not in ('pascal', 'c') and prof2 not in ('pascal', 'c');

select max(year(current_date) - year(dob)) as oldest_male_age
from programmer
where sex = 'm';

select avg(year(current_date) - year(dob)) as average_female_age
from programmer
where sex = 'female';

select name, 
       timestampdiff(year, doj, curdate()) as experience_in_years
from programmer
order by experience_in_years desc;

select name, dob
from programmer
where month(dob) = month(curdate());

select count(*)
from programmer
where sex = 'female';

select distinct prof1 as language
from programmer
where sex = 'male'
union
select distinct prof2
from programmer
where sex = 'male';

select avg(salary) as average_salary
from programmer;

select count(*)
from programmer
where salary between 60000 and 80000;

select *
from programmer
where prof1 not in ('clipper', 'cobol', 'pascal')
  and prof2 not in ('clipper', 'cobol', 'pascal');

select count(*)
from programmer
where sex = 'female'
and (prof1 = 'c++' or prof2 = 'c++')
and timestampdiff(year, dob, curdate()) > 24;

select *
from programmer
where timestampdiff(year, doj, curdate()) < 1;

select *
from programmer
where timestampdiff(year, doj, curdate()) = 2;

select name, (dcost - (scost * sold)) as amount_to_be_recovered
from software
where dcost > (scost * sold);

select *
from software
where sold = 0;

select scost
from software
where name = 'Mary';

select distinct splace
from studies;

select count(distinct course) as number_of_courses
from studies;

select name
from programmer
where length(name) - length(replace(name, 'a', '')) = 2;

select name
from programmer
where length(name) <= 5;

select count(*)
from programmer
where sex = 'female'
and (prof1 = 'cobol' or prof2 = 'cobol')
and timestampdiff(year, doj, curdate()) > 2;

select min(length(name)) as shortest_name_length
from programmer;

select avg(dcost) as average_development_cost
from software
where dev_in = 'cobol';

select name, sex, dob, doj
from programmer
where day(last_day(dob)) = day(dob);

select sum(salary) as total_salary_paid
from programmer
where sex = 'male' and (prof1 != 'cobol' and prof2 != 'cobol');

select title, scost, dcost, (scost - dcost) as cost_difference
from software
order by cost_difference desc;

select name, dob, doj
from programmer
where month(dob) = month(doj);

select dev_in as language, count(dev_in) as number_of_packages
from software
group by dev_in;

select name, count(name) as number_of_packages
from software
group by name;

select dev_in as language, 
    max(scost) as costliest_package, 
    max(sold) as highest_selling
from software
group by dev_in;

select dev_in as language, 
    max(scost) as costliest_package, 
    max(sold) as highest_selling
from software
group by dev_in;

select year(dob) as birth_year, count(*) as number_of_people_born
from programmer
group by year(dob);

select year(doj) as join_year, count(*) as number_of_people_joined
from programmer
group by year(doj);

select month(doj) as join_month, count(*) as number_of_people_joined
from programmer
group by month(doj);

select prof1 as language, count(*) as count_prof1
from programmer
group by prof1;

select prof2 as language, count(*) as count_prof2
from programmer
group by prof2;

select floor(salary / 1000) as salary_group, count(*) as number_of_people
from programmer
group by salary_group;

select splace as institute, count(*) as number_of_people
from studies
group by splace;

select course, count(*) as number_of_people
from studies
group by course;

select dev_in as language, sum(dcost) as total_development_cost
from software
group by language;

select dev_in as language, sum(scost) as total_selling_cost
from software
group by language;

select name, sum(dcost) as total_development_cost
from software
group by name;

select name, sum(scost * sold) as total_sales_value
from software
group by name;

select name, count(*) as number_of_packages_developed
from software
group by name;

select name, dev_in as language, sum(scost * sold) as total_sales_cost
from software
group by name, language;

select 
    name, 
    max(scost) as costliest_package, 
    min(scost) as cheapest_package
from software
group by name;

select 
    dev_in as language, 
    avg(dcost) as average_development_cost,
    avg(scost) as average_cost,
    avg(sold) as average_selling_cost,
    avg(scost / sold) as average_price_per_copy
from software
group by language;

select 
    splace as institute_name, 
    count(distinct course) as number_of_courses,
    avg(ccost) as average_cost_per_course
from studies
group by institute_name;

select 
    splace as institute_name, 
    count(*) as number_of_students
from studies
group by institute_name;

select name, sex
from programmer;

select s.name as programmer_name, p.name as package_name
from programmer s
join software p on s.name = p.name;

select dev_in as language, count(*) as number_of_packages
from software
group by language;

select dev_in as language, count(*) as number_of_packages
from software
where dcost < 4000
group by language;

select dev_in as language, avg(scost - dcost) as average_difference
from software
group by language;

select 
    name,
    sum(scost) as total_selling_cost,
    sum(dcost) as total_development_cost,
    sum(scost) - sum(dcost) as amount_to_be_recovered
from software
group by name
having sum(scost) > sum(dcost);

select 
    max(salary) as highest_salary,
    min(salary) as lowest_salary,
    avg(salary) as average_salary
from programmer
where salary > 2000;

select name
from programmer
where prof1 = 'c++'
order by salary desc
limit 1;

select name
from programmer
where sex = 'female' and prof1 = 'cobol'
order by salary desc
limit 1;

select prof1 as language, name
from programmer
group by language
having max(salary);

select name
from programmer
order by doj
limit 1;

select name
from programmer
order by doj desc
limit 1;

select prof1 as language
from programmer
group by language
having count(*) = 1;

select name
from programmer
where prof1 = 'dbase'
order by dob
limit 1;

select splace as institute_name, count(*) as number_of_students
from studies
group by institute_name
order by number_of_students desc
limit 1;

select name
from programmer
where prof1 = 'dbase'
order by dob
limit 1;

select name
from programmer
where sex = 'female' and salary > 3000
and prof1 not in ('c', 'c++', 'oracle', 'dbase')
and prof2 not in ('c', 'c++', 'oracle', 'dbase');

select course
from studies
order by ccost desc
limit 1;

select course
from studies
group by course
order by count(*) desc
limit 1;

select splace as institute_name, course
from studies
group by institute_name, course
having avg(ccost) < (select avg(ccost) from studies);

select splace as institute_name
from studies
group by institute_name
having max(ccost) = (select max(ccost) from studies);

select course
from studies
group by course
having count(*) < (select avg(count(*)) from studies group by course);

select splace as institute_name
from studies
where course in (
    select course
    from studies
    group by course
    having count(*) < (select avg(count(*)) from studies group by course)
);

select course
from studies
group by course
having abs(avg(ccost) - (select avg(ccost) from studies)) <= 1000;

select name
from software
order by dcost desc
limit 1;

select name
from software
order by scost asc
limit 1;

select name
from software
order by sold asc
limit 1;

select dev_in as language
from software
order by (scost * sold) desc
limit 1;

select sold
from software
order by (scost - dcost) asc
limit 1;

select name
from software
where dev_in = 'pascal'
order by scost desc
limit 1;

select dev_in as language
from software
group by language
order by count(*) desc
limit 1;

select name
from software
group by name
order by count(*) desc
limit 1;

select name
from software
order by scost desc
limit 1;

select name
from software
group by name
having sum(sold) < (select avg(sold) from software);

select p.name
from programmer p
join (
    select max(salary) as max_salary_male
    from programmer
    where sex = 'male'
) as max_salary_male
on p.sex = 'female' and p.salary > max_salary_male;

select prof1 as language
from programmer
group by language
order by count(*) desc
limit 1;

select name
from software
group by name
having sum(scost) > (2 * sum(dcost));

select p.name as programmer_name, s.language, min(s.scost) as cheapest_package_cost
from programmer p
join software s on p.name = s.name
group by p.name, s.language;

select name
from programmer
where sex = 'male' and dob = (select min(dob) from programmer where sex = 'male' and year(dob) = 1965);

select name, max(dev_in) as highest_selling_language, min(dev_in) as lowest_selling_language
from software
group by name;

select name
from programmer
where sex = 'female' and year(doj) = 1992
order by dob asc
limit 1;


select year(dob) as birth_year
from programmer
group by birth_year
order by count(*) desc
limit 1;

select month(doj) as join_month
from programmer
group by join_month
order by count(*) desc
limit 1;

select prof1 as language
from programmer
group by language
order by count(*) desc
limit 1;

select name
from programmer
where sex = 'male'
and salary < (select avg(salary) from programmer where sex = 'female');

select *
from programmer
where salary in (
    select salary
    from programmer
    group by salary
    having count(*) > 1
);

select *
from software
where name in (
    select name
    from programmer
    where sex = 'male' and salary > 3000
);

select *
from software
where dev_in = 'pascal' and name in (
    select name
    from programmer
    where sex = 'female'
);

select *
from programmer
where year(doj) < 1990;

select *
from software
where dev_in = 'c' and name in (
    select name
    from programmer
    where sex = 'female' and splace = 'pragathi'
);

select p.name as programmer_name, s.splace as institute, count(*) as number_of_packages, sum(s.sold) as total_copies_sold, sum(s.sold * s.scost) as total_sales_value
from programmer p
join software s on p.name = s.name
group by p.name, s.splace;

select *
from software
where dev_in = 'dbase' and name in (
    select name
    from programmer
    where sex = 'male' and splace = (
        select splace
        from studies
        group by splace
        order by count(*) desc
        limit 1
    )
);

select *
from software
where name in (
    select name
    from programmer
    where (sex = 'male' and year(dob) < 1965) or (sex = 'female' and year(dob) > 1975)
);

select *
from software
where dev_in not in (
    select prof1
    from programmer
    union
    select prof2
    from programmer
);

select *
from software
where dev_in not in (
    select prof1
    from programmer
    union
    select prof2
    from programmer
);

select *
from software
where name in (
    select name
    from programmer
    where sex = 'male' and splace = 'sabhari'
);

select name
from programmer
where name not in (
    select distinct name
    from software
);

select sum(dcost) as total_cost
from software
where name in (
    select name
    from programmer
    where splace = 'apple'
);

select name
from programmer
group by doj
having count(*) > 1;

select name
from programmer
group by prof2
having count(*) > 1;

select splace as institute, sum(sold * scost) as total_sales_value
from software
group by institute;

select splace as institute
from studies
where name in (
    select name
    from software
    order by scost desc
    limit 1
);

select language
from (
    select prof1 as language from programmer
    union
    select prof2 from programmer
) as languages
where language not in (
    select dev_in
    from software
);

select p.name as programmer_name, p.salary, s.course
from programmer p
join software s on p.name = s.name
where s.sold = (
    select max(sold)
    from software
);

select p.name as programmer_name, s.ccost / p.salary as months_to_recover_cost
from programmer p
join studies s on p.name = s.name;

select *
from software
where name in (
    select name
    from programmer
    where year(curdate()) - year(doj) < 3
);

select avg(p.salary) as average_salary
from programmer p
join software s on p.name = s.name
group by p.name
having sum(s.sold * s.scost) > 50000;

select count(*)
from software
where name in (
    select name
    from studies
    where ccost = (
        select min(ccost)
        from studies
    )
);

select count(*)
from software
where name = (
    select name
    from software
    order by scost asc
    limit 1
);

select s.splace as institute
from studies s
join software sw on s.name = sw.name
where sw.name = (
    select name
    from software
    order by scost asc
    limit 1
);

select count(*)
from software
where name in (
    select name
    from programmer
    where sex = 'female' and salary > (
        select max(salary)
        from programmer
        where sex = 'male'
    )
);

select count(*)
from software
where name in (
    select name
    from programmer
    where splace = 'bdps'
    order by timestampdiff(year, doj, curdate()) desc
    limit 1
);

select s.name as programmer_name, st.splace as institute
from studies st
left join software s on st.name = s.name
union
select p.name as programmer_name, st.splace as institute
from programmer p
left join studies st on p.name = st.name
where p.name not in (
    select name
    from software
);

select prof1 as proficiency, count(*) as number_of_programmers, (
    select count(*)
    from software
    where dev_in = prof1
) as number_of_packages_developed
from programmer
group by prof1;

select name, count(*) as number_of_packages_developed
from software
group by name;

select p.*
from programmer p
join studies s on p.name = s.name
where s.splace = 's.s.i.l';
