# Final Year Applied Project and Dissertation 
### Author - Mark Reilly 
### ID - G00357230

## Description

This respository contains all code and dissertation materials for my final year project which is a Full Stack Weather Application. Follow the compilation manual, read about the features and watch the video of the application in use below.

Designed using ReactJS and Django.

## Features

- The application allows the user to search their city to get current weather data and 5-day forecasts.
- The application has implemented React Leaflet to allow for a map that can display weather data of the area clicked on.

## Compilation

Prerequisites
- Node.js [Download](https://nodejs.org/en/download/)
- Python 3.8
- Pip3/Pip

### Ubuntu 20.4
- Setup a virtual environment follow this [guide](https://gist.github.com/frfahim/73c0fad6350332cef7a653bcd762f08d).
- In the /AppliedProject directory run `pip3 install -r requirements.txt`
- Using the Makefile provided run `make run`
- This will run both the Django and React Server
- Once both are running correctly you should be directed to http://localhost:3000/
### Windows Anaconda Prompt
- Setup a virtual environment using this [guide](https://www.geeksforgeeks.org/set-up-virtual-environment-for-python-using-anaconda/).
- In the /AppliedProject directory run `pip install -r requirements.txt`
- Run Django Server `cd backend\django_app` in this directory run `python manage.py runserver`
- Run React Server `cd frontend\frontend` in this directory run `npm start`
- Once both are running correctly you should be directed to http://localhost:3000/

## Video

Click on the [Youtube](https://youtu.be/TENtP42GQh8) link to view the application in action.




