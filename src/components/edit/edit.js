import './edit.css';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AxiosProvider, withAxios } from 'react-axios';
function Edit() {
    const bgC = localStorage.getItem("selectedTheme");
    const [content, setContent] = useState({});
    const handleForm = (e) =>{
        alert(content.text);
    }
    useEffect(() => {
        if (bgC != null) {
            document.body.style = 'background: ' + bgC;

        }
    })
    const saveEdit = ()=>{
        
    }
    return (
        <div className='writing-box'>
            <form onSubmit={handleForm}>

                <textarea className='editField' onChange={(e) =>
                    setContent({ ...content, text: e.target.value })} />
                <input type='submit' value="save" />
            </form>
        </div>
    )
}

export default Edit;