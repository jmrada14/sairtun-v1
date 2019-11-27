---
title: "Ground-up"
date: "2019-10-23"
draft: false
path: "/blog/finalproject-groundup"
---

# Ground-Up: a full stack application that attempts to take the politics out of government.

## Partners: Sanjeev Chadeesingh and Juan Rada

## Technologies Used: MERN Stack

## The Problem the Application is Attempting to Solve:
Sanjeev and Juan wanted to design an application that solved two problems:
1. Get a Spotlight on the Importance of Local Elections
1. Remove the Subjectivity Now Inherent in Modern Government

## Process:
We first had to find data. We wanted to know who each congressman and congresswoman was, from both chambers of congress (the House of Representatives and the Senate.) Thankfully, ProPublica has a data-store, and from it we were able to access all current members of congress, alongside all bills voted upon during the current (116th) Congress. We decided to focus on any bills passed that affected the environment. We had to use govtrack.us for the version of data we preferred for bills that were passed. This information was in CSV format, and we used an open source data translator to transform the information from CSV to JSON format (csvjson.com.) 

After successfully transforming all data into JSON format, we set up our Mongo database with the following collections:
1. **Bills:** *20 bills passed during the 116th Congress that impacted the environment.* 
1. **Members:** *All 538 members of congress.*
1. **Users:** *Any and all members that wish to join the **Ground-Up** application. We provide authentication and protection through PassportJS.*

Upon completion of the database, we had the information we needed to pull in order to serve the front-end of the application. Our plan was to allow our users to simply view the data affecting their community. We put all the congress members into card formats in which their: names, party affiliations, states of representation and twitter handles are available. We wanted to update the common phrase: "send a letter to your congressman," and decided that adding the twitter handles of each congress member to their respective cards would be our 2019 version of giving people access to their elected officials. We decided to display the bills in a table format, and put the information of each member onto the table, with their vote on each bill available. 

The combination of cards with necessary information about each member of congress, and a table displaying how these congress members voted on environment-centric bills felt like the most objective manner in which we could educate people about how their local politicians vote. We added additional information on our **Learn More/About Us** page, highlighting the shift in demographics in this country, primarily, that the voting electorate is becoming increasingly younger. These younger voters are voting in higher numbers, and not using conventional media for their information about politics. Ground-Up is an application made for these younger voters.


#Check the app [here](https://ground-up-1.herokuapp.com/)
