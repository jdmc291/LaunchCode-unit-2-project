drop table if exists attending;
drop table if exists customers;
drop table if exists events;
drop table if exists products;

#Creating Database Schema

create table customers (
 customer_id int primary key auto_increment,
 first_name varchar(50),
 last_name varchar(50),
 email varchar(50),
 password varchar(50),
 is_Premium boolean
);

create table events (
 event_id int primary key auto_increment,
 event_name varchar(50),
 picture varchar(100),
 description varchar (500),
 date_of_event datetime,
 seats_available int,
 seats_left int
);

create table attending(

customer_id int not null,
event_id int not null,
primary key (customer_id, event_id),
foreign key (customer_id) references customers,
foreign key(event_id) references events,
number_of_guests int,
additional_info varchar(50)

);

create table products(
product_id int,
product_name varchar(50),
product_description varchar(200),
product_image varchar(200)
);

#Inserting Data Into Tables
insert into customers (first_name, last_name, email, password, is_Premium)
values ('Joey', 'Smith', 'joeySmith@gmail.com','password', true),
('Melondy', 'Doe', 'melondydoe@gmail.com','password', false);

#Inserting Events Into Tables
insert into events (event_name,picture ,description, date_of_event, seats_available, seats_left)
values ('Rooftop Tea Party','https://pub-13ac24c1152d432cbaa7fb6a741ca63a.r2.dev/amazing-rooftop-terrace.jpg' ,'A time where you can drink tea', '2025-10-26 14:30:00', '60', '58'),
('TeaEasy','https://pub-13ac24c1152d432cbaa7fb6a741ca63a.r2.dev/SpeakEasy.png' ,'A night time tea house party. Make sure you say the magic word. "superhero"', '2026-3-16 21:00:00', '30', '30'),
('Tea by The Fire', 'https://pub-13ac24c1152d432cbaa7fb6a741ca63a.r2.dev/Bonfire.jpg','Join us for tea by the fire', '2026-9-16 13:00:00', '24', '24'); 

#Inserting Data into Attending Table
insert into attending (customer_id, event_id, number_of_guests,additional_info)
values ('1', '1', '2', 'gluten-free appetizers please');
