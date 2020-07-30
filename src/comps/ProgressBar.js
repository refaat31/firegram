import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file,setFile,msg,setMsg}) =>{
    const {url,progress} = useStorage(file);
    console.log(progress,url);

    useEffect(()=>{
        if(url) {
            setFile(null);
            setMsg('Uploaded');
            setTimeout(()=>{setMsg(null)},3000);
        }
    },[url,setFile,setMsg]);
    return(
        <div className="progress-bar" style={{width:progress + '%'}}></div>
        
    )
}

export default ProgressBar;