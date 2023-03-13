import { MovieContext } from "../App"
import React from "react";
import {InfoAboutLeon} from "./InfoAboutLeon"


export const Movie = ()=> {
    const contextObject = React.useContext(MovieContext)
   

    return (
        <div>
        <h1> Leon The Professional </h1>
        <p>Movie name: {contextObject.name}</p>
        <p>Genre: {contextObject.genre}</p>
        <p>Rating: {contextObject.rating}</p>
        <p>Plot: <br/>{contextObject.plot}</p>
        <p>Release Date: {contextObject.releaseDate}</p>
        <InfoAboutLeon/>



        </div>
    )
}