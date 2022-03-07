import { useState } from "react";
export function Count(){
    const [book, setBook]=useState(0);
    const [pen, setPen]=useState(0);
    const [notebook, setNotebook]=useState(0);
    const [inkpen, setInkpen]=useState(0);
    
    const bookChange=(value)=>{
        setBook((b)=>{
            if(b<0){
                return 0;
            }
            return b+value
        })
    }
    const penChange=(value)=>{
        setPen((b)=>{
            if(b<0){
                return 0;
            }
            return b+value
        })
    }
    const notebookChange=(value)=>{
        setNotebook((b)=>{
            if(b<0){
                return 0;
            }
            return b+value
        })
    }
    const inkpenChange=(value)=>{
        setInkpen((b)=>{
            if(b<0){
                return 0;
            }
            return b+value
        })
    }
    
    return (
        <div>
            <span>Book:{book}</span><br></br>
            <button onClick={()=> bookChange(1)}>+</button>
            <button onClick={()=> bookChange(-1)}>-</button><br></br>
            <span>Pens:{pen}</span><br></br>
            <button onClick={()=> penChange(1)}>+</button>
            <button onClick={()=> penChange(-1)}>-</button><br></br>
            <span>Notebooks:{notebook}</span><br></br>
            <button onClick={()=> notebookChange(1)}>+</button>
            <button onClick={()=> notebookChange(-1)}>-</button><br></br>
            <span>InkPens:{inkpen}</span><br></br>
            <button onClick={()=> inkpenChange(1)}>+</button>
            <button onClick={()=> inkpenChange(-1)}>-</button><br></br>
            <span>{book+pen+notebook+inkpen}</span>
        </div>
    )
}