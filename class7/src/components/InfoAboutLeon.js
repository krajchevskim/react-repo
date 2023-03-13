import { MovieContext } from "../App"
import React from "react";

export const InfoAboutLeon = ()=> {
   const infoContext = React.useContext(MovieContext)

    const {pictures} = React.useContext(MovieContext);

    return(
        <div>
           <p> <a href={infoContext.link}>Link to Trailer</a></p>
           
            {pictures.map((img, i)=>{
                return(
                    <img key={i} src={img} alt="img"></img>
                )
            })}

        </div>
    )

   
}