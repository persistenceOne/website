import React from "react";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../../assets/info.pdf";



export default function App() {
  return (
    <div className="App">
       <iframe title="stakedrop" src={samplePDF} width="100%" height="900px" >  </iframe>

     
    </div>
  );
}
