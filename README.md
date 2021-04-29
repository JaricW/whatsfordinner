# Project Name
>What's for Dinner is a website designed to suggest dinner options to you based on a selection of preferences.
>The website currently has 14 different dinner options, with 4 different preferences to choose from.
>All dinner choices come with a link to an external recipe website.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Website](#website)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
A lot of people (myself included!) don't like to eat the same thing for dinner everyday, but struggle to think up new meal ideas on the go.
What's For Dinner has been created to solve that problem and provides the user to a variety of dinner options.


## Technologies
What's for Dinner is built with:
HTML5
Tailwind CSS
React.js
Hosted on netlify

## Website
View the full website here - https://dinnerpicker.netlify.app/

## Code Examples
    <>
      <div className="absolute h-5/6 w-10/12 flex flex-col justify-around items-center text-center bg-turqouise rounded-2xl"
  >
        <h2 className="text-2xl p-4 text-lightYellow text-shadow-sm">{dinnerTonight.name}</h2>
        <img
         className="w-5/6 sm:w-3/6"
          src={dinnerTonight.img}
          alt={dinnerTonight.imgDescription}
        />
        <p className="italic text-lightYellow p-2 text-lg">{dinnerTonight.intro}</p>
        <p>
          <a href={dinnerTonight.link} target="_blank"
          className="underline text-blue-800"
          >
            Find a recipe here
          </a>
        </p>

        <button className="flex items-center justify-center border-solid border-current border-2 rounded-2xl p-2 text-center
          text-lightOrange bg-lightYellow  shadow-2xl
          hover:text-lightYellow hover:bg-lightOrange
          focus:text-lightYellow focus:bg-lightOrange focus:outline-none" onClick={goBack}>
          Not Tonight!
        </button>
      </div>
    </>

## Features
Current features:
* 14 unique meals
* 4 different preference filters

To-do list:
* Increase to 50 different meals
* Add an option to create a weeks meal plan of dinners

## Status
The initial phase of the project is working and completed.
The next phase is currently being planned out, and will add a week meal plan option to the website.

## Inspiration
The project has been inspired by the idea of weekly meal preparation, and aims to cut down on the time spent looking for new meals so that the user can just cook them.

## Contact
Created by Jaric Woodhead, feel free to contact me via email jaric_woodhead@msn.com.