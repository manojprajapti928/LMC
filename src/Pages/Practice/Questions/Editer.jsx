import React from 'react';

import "./Editer.css"

export default function Editer({SelectQuestion}) {
   
    return (
        <div>
            <h1>Editor Page</h1>
            <center>
                <h3>
                    Q.{SelectQuestion.Question}
                </h3>
         
                <hr />
                <textarea id='textarea' placeholder='Write Your Code Here'></textarea>
            
           
            
            <button>Submit</button>
            </center>
        </div>
    );
}
