import {useState,useEffect} from 'react';
import {projectStorage,projectFireStore, timestamp} from '../firebase/config';

//used for handling file uploads.
//return a useful values about the upload

const useStorage = (file) =>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);

    //the URL we get back from storage, after the image has been fully uploaded.
    //the db will contain all the image URLs.
    const [url,setUrl] = useState(null);

    //the following will fire every time the dependencies change. in this case, 
    //file is the only dependency.
    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection('images');
        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },
        //when the image is fully uploaded.
        //what is the point of it, if we arent overwriting the original url state?
        async () =>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url:url,createdAt:createdAt});
            setUrl(url);
        });


    },[file]);

    return {progress,url,error};
}

export default useStorage;
