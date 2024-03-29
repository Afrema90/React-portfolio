import React from "react";
import Project from "./Project";
import filmfinder from "../images/Screenshot 2023-02-17 at 10.08.33 PM.png"
import grims from "../images/grims.png"
import weatherdashboard from "../images/weatherdashboard.png"
import workdayscheduler from "../images/workdayscheduler.png"
import jetsettr from "../images/jetsettr.png"
import mernchallengebooksearchengine from "../images/mernchallengebooksearchengine.png"
const Projectlist = [
    {
        id: 1,
        name: "Film Finder",
        language: "JavaScript,Html,Css,Bootsrap",
        description: "A way to find and save your favorite movies for later use or watch trailers.",
        image:filmfinder,
        url: "https://mikewebprint.github.io/movie-wishlist/"
    },
    {
        id: 2,
        name: "GRIMS",
        language: "JavaScript,Html,Css,Bootsrap,MySQL, Express, Handlebars, and Node.js.",
        description: "G.R.I.M.S is a web-based inventory management system that allows users to create, edit, and delete products. This application is designed to be used by a small business owner who wants to keep track of their inventory. The user can view products organized by different departments, select a product to either edit its information or delete it from the inventory, and add new products. The application utilizies a cloud image hosting solution called Cloudinary. We integrated Cloudinary to allow users to upload images of their products directly from the application because we felt that this would be a more user-friendly solution than having users manually enter a URL for their product images.",
        image:grims,
        url: "https://grims-inventory.herokuapp.com/login" 
    },
    {
        id: 3,
        name: "Weather Dashboard",
        language:"javascript,html,css,bootstrap,openweather,api",
        description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It will use the OpenWeather API to retrieve weather data for cities. It will also feature a search history so that users can access their past search terms.",
        image: weatherdashboard,
        url: "https://afrema90.github.io/Server-Side-APIs-Challenge-Weather-Dashboard/"
    },
    {
        id: 4,
        name: "Work Day Scheduler",
        language:"javascript,html,css,bootstrap,jquery",
        description: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
        image: workdayscheduler,
        url: "https://afrema90.github.io/Third-Party-APIs-Challenge-Work-Day-Scheduler/"
    },
    {
        id: 5,
        name: "JETSETTER",
        language:"javascript,html,css,bootstrap,mysql,express,handlebars,node.js,Heroku,MERN Stack",
        description: "Jetsetter is a web-based application that allowss to be able to share information about traveling to interat with others about their vacation and travles.",
        image: jetsettr,
        url: "https://jetsetter-travel.herokuapp.com/"
    },
    {
        id: 6,
        name: "MERN-Challenge-Book-Search-Engine",
        language:"javascript,html,css,react,graphql,apollo,express,MongoDB,node.js,Heroku,MERN Stack,RESTful API.",
        description: "A MERN stack application that allows users to search for books using the Google Books API, save them to a list, and delete them from the list. The application utilizes GraphQL API and Apollo Server to query and mutate data, and it uses MongoDB and the Mongoose ODM for the database.",
        image: mernchallengebooksearchengine,
        url: "https:// https://agile-retreat-31900.herokuapp.com/",
    },
   

];

function Portfolio() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="row">
                {Projectlist.map((project) => (
                    <Project
                        key={project.id}
                        name={project.name}
                        language={project.language}
                        description={project.description}
                        image={project.image}
                        className="imgSize"
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;