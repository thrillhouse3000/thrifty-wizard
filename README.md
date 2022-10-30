# Thrifty_Wizard

This project was created with React, Node.js, PostgreSQL and Scrapy.

## Frontend

### Dev

Install dependencies in project directory:

### `npm install`

Served on localhost:3000

API functionality found in the src/API directory

In the project directory, you can run:

### `npm start`

Ensure API server is running first!

### Production

Configure backend connection in .env file

-OR-

As determined by your deployment procedures

## Backend

### Dev

Install dependencies in project directory:

### `npm install`

Served on localhost:3001

Route structures found in /routes

SQL Query models found in /models

In the project directory, you can run:

### `npm run dev`

### Production

Variables for config.js pulled from .env

Set connection variables in /backend/.env

Add .env to your .gitignore

## Scrapy

### Scrapy Repo available upon request

cd into scrapy_watchfrog

Create venv:

### `python3 -m venv venv`

Activate venv:

### `source venv/bin/activate`

Install Dependencies:

### `pip3 install -r requirements.txt`

cd into scrapy_watchfrog/scrapy_watchfrog

Ensure venv is active

Run spiders:

### `scrapy crawl`

This will run the available spiders concurrently

Data is scraped to CSV files in scrapy_watchfrog/data

Upsert Data:

Define your database connection variables in /.env

Ensure venv is active

Run upsert file:

### `python3 upsert.py`

## Using the App

### Deal Lists

The homepage shows Deal Lists of prices for games from different stores

The data can be filtered with the select menu at the top of the page

Clicking an image in a Deal List will take you to the game page for that game

### Search

The search field located in the navbar will autocomplete suggestions as you type

The fuzzy matching is a work in progress, try to be as accurate as you can

Selecting a game from the dropdown will take you to the game page

### Game Page

Here you can see the prices available from the different vendors

Click `view in store` to make a purchase from the vendor

Similar games will appear at the bottom of the page






