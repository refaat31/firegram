import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

function UploadForm() {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [msg,setMsg] = useState(null);
    const types = ['image/png','image/jpeg'];
    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setMsg('Uploading');
            setError('');
        }
        else{
            setFile(null);
            setMsg(null);
            setError('Please select an image file (png or jpeg) ');
        }
        console.log(file);
    }
    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} msg={msg} setMsg={setMsg}/>}

            </div>
            <h5>{msg}</h5>
        </form>
    )
}

export default UploadForm;