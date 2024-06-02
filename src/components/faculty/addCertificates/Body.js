import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "./Submit.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadPDF } from "../../../redux/actions/facultyActions";

const Body = () => {
  const [image, setImage] = useState(null);
  const [filesName, setFileName] = useState("No selected File");
  const [file, setFile] = useState(null);
  const uploading = useSelector((state) => state.uploading);
  const successAlert = useSelector((state) => state.successAlert);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (successAlert) {
      alert(successAlert);
    }
  }, [successAlert]);

  const dispatch = useDispatch();

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("pdfFile", file);

      const userDataString = localStorage.getItem("user");
      if (!userDataString) {
        console.error("No userData found in localStorage");
        return;
      }
      const userData = JSON.parse(userDataString);

      console.log("User Data:", userData);
      if (!userData || !userData.result || !userData.result.username) {
        console.error("Username is not provided in userData");
        return;
      }

      const username = userData.result.username;
      formData.append("username", username);

      console.log(formData);
      console.log(file);
      try {
        dispatch(uploadPDF(formData));
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div>
          <h1 className="text">Upload Your File here</h1>
          <main style={{ paddingTop: "20" }} className="main">
            <form
              className="formm"
              onClick={() => document.querySelector(".input-field").click()}
            >
              <input
                type="file"
                accept=".pdf"
                className="input-field"
                hidden
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                    setFile(files[0]);
                  }
                }}
              />
              {image ? (
                <img src={image} width={150} height={150} alt={filesName} />
              ) : (
                <>
                  <MdCloudUpload color="#1475cf" size={60} />
                  <p>Browse Files to Upload</p>
                </>
              )}
            </form>
          </main>
          <div className="one">
            <section className="uploaded-row">
              <AiFillFileImage color="#1475cf" />
              <span className="upload-content">
                {filesName} -
                <MdDelete
                  onClick={() => {
                    setFileName("No selected File");
                    setImage(null);
                  }}
                />
              </span>
              <input
                type="submit"
                value="Upload"
                className="button"
                onClick={handleFileUpload}
              />
            </section>
          </div>
          {uploading && <p>Uploading...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Body;
