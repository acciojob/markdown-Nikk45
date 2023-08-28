import React, { useState } from "react";

const App=()=>{


    const [markdown, setMarkDown] = useState('')


    // useEffect(() => {
    //     document.getElementById("output").innerHTML = marked(markdownText);
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
                <h1 id="output">{markdown}</h1>
            </div>
        </div>
    )
}


export default App