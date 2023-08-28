import React, { useState } from "react";

const App=()=>{


    const [markdown, setMarkDown] = useState('')

    const handleMarkDown=(e)=>{
        setMarkDown(e.target.value)
    }

    return(
        <div>
            <div className="markdown">
                <textarea value={markdown} onChange={handleMarkDown} 
                placeholder="Write something...">                    
                </textarea>
            </div>
            <div className="preview">
                <div id="output">{markdown}</div>
            </div>
        </div>
    )
}


export default App