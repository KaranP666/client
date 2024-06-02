// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getPDF } from '../../../redux/api';


// const Body = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const user = JSON.parse(localStorage.getItem('user'));
//     const username = user?.result?.username;
    
    
//     const pdfData = useSelector((state) => state.pdfData);
    
//     useEffect(() => {
//         // Fetch the PDF data when the component mounts.
//         if (username) {
//             dispatch(getPDF(username));
//             console.log(username);
//         } else {
//             navigate('/login');
//         }
//     }, [dispatch, navigate, username]);
    
//     useEffect(() => {
//         // Log pdfData whenever it changes.
//         console.log("pdfData:", pdfData);
//     }, [pdfData]);
    
//     return (
//         <div>
//             {pdfData ? (
//                 <iframe
//                     src={URL.createObjectURL(pdfData)}
//                     title="Student PDF"
//                     width="100%"
//                     height="600px"
//                 />
//             ) : (
//                 <p>Loading PDF...</p>
//             )}
//         </div>
//     );
// };

// export default Body

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate();
    const [pdfData, setPdfData] = useState(null);
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const username = user?.result?.username;
        if (username) {
            const fetchPDF = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/student/pdf/${username}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch PDF');
                    }
                    const blob = await response.blob();
                    setPdfData(blob);
                } catch (error) {
                    console.error('Error fetching PDF:', error);
                    navigate('/login');
                }
            };
            fetchPDF();
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div>
            {pdfData ? (
                <iframe className='aspect-square rounded-md'
                    src={URL.createObjectURL(pdfData)}
                    title="Student PDF"
                    width="100%"
                    height="500px"
                />
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
        </div>
        </div>
    );
};

export default Body;