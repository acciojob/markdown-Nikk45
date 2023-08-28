// import { marked } from "marked";
import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const App=()=>{


    const [markdown, setMarkDown] = useState('')


    // useEffect(() => {
    //     document.getElementById("output").innerHTML = <ReactMarkdown></ReactMarkdown>;
    //   }, [markdown]);    
    
    const handleMarkDown=(e)=>{
        setMarkDown(e.target.value)
    }

    return(
        <div className="app">
            <div className="markdown">
                <textarea value={markdown} onChange={handleMarkDown} 
                placeholder="Write something...">                    
                </textarea>
            </div>
            <div className="preview">
                <div id="output">
                <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}


export default App