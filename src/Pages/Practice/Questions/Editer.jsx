import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { Button } from '@mui/material';
import "./Editer.css";

export default function Editer({ SelectQuestion }) {
    const [res, setRes] = useState("");
    const [promt, setPromt] = useState("");

    useEffect(() => {
        async function GetAnswerFromAi() {
            const apiKey = "AIzaSyCr6JJjWqGjbSSBAO1qGURBQVB0AT-tcBI";
            const genAI = new GoogleGenerativeAI(apiKey);

            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
            });

            const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 64,
                maxOutputTokens: 8192,
                responseMimeType: "text/plain",
            };

            const chatSession = model.startChat({
                generationConfig,
                history: [],
            });

            const result = await chatSession.sendMessage("solve this " + promt);
            setRes(result.response.text());
        }

        if (promt) {
            GetAnswerFromAi();
        }
    }, [promt]);

    function onHandle(e) {
        e.preventDefault();
       
                
        setPromt(e.target[0].value);
        console.log(e.target[0].value);
        e.target[0].value = "";
    }

    return (
        <div>
            <h1>Editor Page</h1>
            <center>
                <h3>
                    {/* Q.{SelectQuestion.Question} */}
                </h3>
                <hr />
                <form onSubmit={(e) => onHandle(e)}>
                  
                     
                     <textarea 
                     id='textarea' 
                     placeholder='Write Your code'
                    //  required 
                     maxLength='1000'
                    //  value={res && <div className='response'> {res}</div>}
                     value={SelectQuestion.Question} 
                     
                     
                    
                    />
                     {res && <div className='response'> {res}</div>}
                     
                     <br />
                    {/* <button type='submit'>Submit</button> */}
                    <Button type='submit' variant="contained" color="secondary">Submit</Button>
                </form>
                
            </center>
        </div>
    );
}
