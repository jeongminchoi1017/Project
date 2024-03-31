import React, { useState, useRef } from "react"
import {useDropzone} from 'react-dropzone'
import '../../../css/admin/admin.css'

export default function FileUpload() {
    const [values, setValues] = useState({})
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState('/default.png')
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    function onDrop(acceptedFiles) {
        const reader = new FileReader();
        const file = acceptedFiles

        if (file) {
            reader.readAsDataURL(file[0]);
            setImage(file[0]);
        }

        reader.onload = (e) => {
            setPreview(reader.result);
            document.getElementsByName("imageurl")[0].value = ''
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="FileUpload">
                <div className="img_contain">
                    <div className="img_wrap" {...getRootProps()}>
                        <img src={preview} alt="이미지" className="img_box" />
                        <input {...getInputProps()} multiple={false} name='imageurl'/>
                    </div>
                </div>
            </form>
        </>
    )
}