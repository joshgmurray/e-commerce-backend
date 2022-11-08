# E-Commerce Backend

## Description

For this challenge, I was tasked with building the backend for an e-commerce site, taking a working Express.js API and configuring it to use Sequelize to interact with a mySQL database.

## Table of Contents
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Demo](#demo)
- [Tests](#tests)

## Acceptance Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Installation

To install, first clone the repo to your local machine using 'git clone'.  Run the command 'npm install' to use the application, then be sure to install all necessary dependencies.

## Demo

You can find a walk through demo here: (https://watch.screencastify.com/v/fsL2fyRkzE63gofldGos)

## Tests

If you would like to run tests on the application, first run 'npm install jest' into the command line and then 'npm run test'.