import React, { useState } from 'react';
import axios from 'axios';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import "./Submit.css";

const Body = () => {
    const [image, setImage] = useState(null);
    const [filesName, setFileName] = useState("No selected File");
    const [file, setFile] = useState(null);

    const handleFileUpload = async () => {
      if (file) {
        const formData = new FormData();
        formData.append('pdfFile', file);
  
        try {
          const response = await axios.post('/upload-pdf', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.status === 200) {
            // File uploaded successfully
            console.log('File uploaded successfully');
            // You can handle success here (e.g., show a success message).
          }
        } catch (error) {
          // Handle the error
          console.error('Error uploading file:', error);
          // You can show an error message to the user.
        }
      } else {
        // No file selected
        console.log('No file selected');
        // You can show a message to select a file.
      }
    };
  return (
    <div>
        <h1 className='text' >Upload Your File here</h1>
        <main style={{paddingTop:"20"}} className='main'>
          <form className='formm'
          onClick={() => document.querySelector(".input-field").click() }>
            <input type="file" accept='.pdf' className="input-field" hidden
            onChange={({ target:{files}}) => {
              files[0] && setFileName(files[0].name)
              if(files){
                setImage(URL.createObjectURL(files[0]))
              }

            }}/>
            {image ?
            <img src={image} width={150} height={150} alt={filesName}/>
          :
          <>
          <MdCloudUpload color='#1475cf' size={60}/>
          <p>Browse Files to Upload</p>
          </>
          }
          </form>
        </main>
        <div className='one'>
        <section className="uploaded-row">
            <AiFillFileImage color="#1475cf" />
            <span className="upload-content">
              {filesName} -
              <MdDelete
              onClick={()=>{
                setFileName("No selected File")
                setImage(null)
              }}/>
            </span>
            <input type="submit" value="Upload" className="button"  onClick={handleFileUpload}/>
          </section>
        </div>
    </div>
  )
}

export default Body;