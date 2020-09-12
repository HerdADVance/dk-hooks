import React, { useState } from 'react';

const ImportProgress = ({ handleImportSubmitClick, handleImportCancelClick }) => {

    const [copyPasta, setCopyPasta] = useState('')

    function handleTextAreaChange(event){
        setCopyPasta(event.target.value);
    }

    return(

        <div className="import-wrap overlay">
            <textarea 
                placeholder="Copy and paste the contents of the previously saved CSV file then hit Import Progress"
                onChange={handleTextAreaChange}
            >
            </textarea>
            <div className="import-buttons">
                <button onClick={() => handleImportSubmitClick(copyPasta)}>Import Progress</button>
                <button onClick={handleImportCancelClick}>Cancel</button>
            </div>
        </div>

    )
}

export default ImportProgress