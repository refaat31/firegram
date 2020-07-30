import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file,setFile,msg,setMsg}) =>{
    const {url,progress} = useStorage(file);
    console.log(progress,url);

    useEffect(()=>{
        if(url) {
            setFile(null);
            setMsg('Uploaded');
            setTimeout(()=>{setMsg(null)},3000)
        }
    },[url,setFile,setMsg]);
    return(
        <motion.div className="progress-bar" 
            initial = {{width:0}}
            animate = {{width:progress+'%'}}
        ></motion.div>
       // style={{width:progress + '%'}}
    )
}

export default ProgressBar;