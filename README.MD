# Introduction 
This project is a Tea Event application that allows user to order packets and have them delivered
to their home. There are some users who will want to be premium members.
They will be able to sign in and be able to access the page where they can view events and invite up to 3 guests. 


# Tech Stack
This project is built using the following technologies:
- Frontend: React.js, HTML, CSS
- Backend: Spring Boot, Java
- Database: MySQL
- Authentication: JWT (JSON Web Tokens)

# Future Features

For the features going forward in this project, I will be implementing a the table of Tea Products and make 
that its own api call. Instead of using a public api, it will be calling locally from this database. Another feature 
that will be implemented is a more user friendly eventCard for the premium users. It will have an ongoing list of the
max number of people who can go and an ongoing number of how many people can attend. Once a person signs up, the number 
of seats left will decrease. This will inform the user that their request went through in addition to their email 
confirmation that I will also be implementing.

# Setup Instructions
1. Clone the repository: `git clone
2. Navigate to the project directory: `TheTeaHouseApi`
3. Install backend dependencies: `mvn install` (inside the backend directory)
4. Open up mySQL and create a new database for the application using script "TheTeaHouse SQL Schema"
5. Set up the MySQL database and configure the connection settings in the backend application properties file
6. Clone the front end repository: `git clone
7. Install frontend dependencies: `npm install` (inside the frontend directory)
8. Begin the api: `mvn spring-boot:run` (inside the backend directory)
9. Begin the frontend: `npm start` (inside the frontend directory)

# Image for ERD Reference and Wireframes can be found here:

https://docs.google.com/document/d/1VGe-i8IaT-QCIL7GR4I1wDAMCaouFzSWfUHnShy6BFo/edit?tab=t.0
