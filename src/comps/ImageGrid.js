import React from 'react';
import useFirestore from '../hooks/useFirestore';
function ImageGrid() {

    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div>
            <h1>Images</h1>
        </div>
    )
}

export default ImageGrid;