import React, { useState } from 'react'

import {MdCloudUpload, MdDelete } from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import "./Submit.css"

const Body = () => {
    const [image, setImage] = useState(null);
    const [filesName, setFileName] = useState("No selected File");
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
            <input type="submit" value="Upload" className="button" />
          </section>
        </div>
        
    </div>
  )
}

// export default Submit

// import React, { useState } from 'react';
// import { MdCloudUpload, MdDelete } from 'react-icons/md';
// import { AiFillFileImage } from 'react-icons/ai';

// const Submit = () => {
//   const [image, setImage] = useState(null);
//   const [filesName, setFileName] = useState('No selected File');

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-gray-700 mb-8">Upload Your File Here</h1>
//       <main className="flex items-center justify-center space-x-4">
//         <form
//           className="flex flex-col items-center justify-center border-2 border-dashed border-yellow-500 p-40 rounded cursor-pointer"
//           onClick={() => document.querySelector('.input-field').click()}
//         >
//           <input
//             type="file"
//             accept=".pdf"
//             className="input-field hidden"
//             onChange={({ target: { files } }) => {
//               files[0] && setFileName(files[0].name);
//               if (files) {
//                 setImage(URL.createObjectURL(files[0]));
//               }
//             }}
//           />
//           {image ? (
//             <img src={image} width={150} height={150} alt={filesName} className="mb-4" />
//           ) : (
//             <>
//               <MdCloudUpload color="#1475cf" size={60} />
//               <p className="text-blue-600">Browse Files to Upload</p>
//             </>
//           )}
//         </form>
//       </main>
//       <div className="w-1/3 mt-8">
//         <section className="uploaded-row bg-blue-100 border border-blue-300 rounded p-4 flex justify-between items-center">
//           <AiFillFileImage color="#1475cf" size={24} />
//           <span className="flex items-center">
//             {filesName} -{' '}
//             <MdDelete
//               onClick={() => {
//                 setFileName('No selected File');
//                 setImage(null);
//               }}
//             />
//           </span>
//           <input type="submit" value="Upload" className="button" />
//         </section>
//       </div>
//     </div>
//   );
// };

export default Body;