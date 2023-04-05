# Introduction

I designed a simiple UI that allows the user enter city in an input and gets their nearest weather station and implemented a line chart that shows the temperature variations of the cities.

Mock up design : I created a mock design for the frontend, in other to keep me aligned ![Mock up design](https://i.ibb.co/G26wY7Z/mock-design.png).

Historical data : Screenshot of the historical data used ![Historical data](https://i.ibb.co/fFmzZjD/Historical-Data.png).

# How to run this project successfully

1.  You must have google ** API KEY **. Follow this [link] (https://console.cloud.google.com) to create one.
2.  You must have open weather map API KEY. Follow this [link] (https://openweathermap.org/api) to create one.

# Process idea

Step1 HTML
Created a main div in which all the div are to be made.
Created a main section block.
Created a section, in which the user enters the city name, and then clicks a button to determine the temperature.

Step 2: Added CSS

Adjusted the background div and the background color.
Set the height and width of the container.
Set the properties of the “input” field.
Set the properties of the “submit” button.

Step 3 Javascript
Steps to ensure the code works!

Step 1 => Get city from user

Step 2 => Get the longitude and latitude of the city by using google maps api, geocorder.

Step 3 => Parse the longitude and latitude gotten in Step 2 to the external api that returns the nearest weather station from the city the user entered.

Step 4 => Used Harvesine formula to calculate the distance between the city user entered and the nearest weather station.

step 5 => Used local browser storage to save data gotten from the historical data.

step6 => added chart.js line chart, in other to implement a line graph, encoutered several difficuities.

# Tools/libraries

    1.Google Api Map & Key
    2.Chart.Js
    3.Open weather Map
    4.Haversine Formula
    5.Historical data

Conclusion - Implementation runs sucessfully.
