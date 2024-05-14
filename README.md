# Install and Set Up Laravel with Docker Compose

Setting up Laravel in the local environment with Docker using the LEMP stack that includes: Nginx, MySQL, PHP, and phpMyAdmin.

## Why use Docker for Development

- [x] Consistent development environment for the entire team.
- [x] You don't need to install a bunch of language environments on your system.
- [x] You can use different versions of the same programming language.
- [x] Deployment is easy

## How to Install and Run the Project

1. Copy ```.env.example``` to ```.env```
2. Build the images with Docker Compose
3. Up your services with Docker compose
4. Execute inside APP service composer install command for run the Laravel App
5. Remember grant all priviliges to storage folder inside the APP servide

## How to use PostgreSQL as a database

1. Uncomment the PostgreSQL configuration inside the ```docker-compose.yml``` including: ```db``` and ```pgamdin```
2. Copy ```.env.example``` to ```.env```
3. Change ```DB_CONNECTION``` to ```pgsql```
4. Change ```DB_PORT``` to ```5432```
5. Open the ```pgAdmin``` on ```127.0.0.1:5050```
6. Inside of docker-compose.yml you cand find the user and password for access to pgAdmin

## How to run Laravel Commands with Docker Compose

1. ```cd src```
2. ```docker-compose exec app php artisan {your command}``` 
