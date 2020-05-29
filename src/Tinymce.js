import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Editor } from "@tinymce/tinymce-react";

function App() {
  const [value, setValue] = useState("");
  const [fileName, setfFleName] = useState("");
  const tinymce = useRef(null);

  useEffect(() => {
    console.log(value);
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor
          ref={tinymce}
          initialValue=""
          apiKey="dywlea7dienjou13w1cyqpyrkfsdw0v39ln6oe9msfu2enu0"
          init={{
            selector: "textarea",
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link charmap print preview anchor image imagetools",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor forecolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | image | help",
            image_description: false, // 이미지 설명 비활성화
            images_upload_handler: function (blobInfo, success, failure) {
              var xhr, formData;

              xhr = new XMLHttpRequest();
              xhr.withCredentials = false;
              xhr.open("POST", "/api/files");

              xhr.onload = function () {
                var json;

                if (xhr.status != 200) {
                  failure("HTTP Error: " + xhr.status);
                  return;
                }

                json = JSON.parse(xhr.responseText);

                if (!json || typeof json.location != "string") {
                  failure("Invalid JSON: " + xhr.responseText);
                  return;
                }

                success(json.location);
              };

              formData = new FormData();
              formData.append("file", blobInfo.blob(), blobInfo.filename());

              xhr.send(formData);
            },
          }}
          onEditorChange={setValue}
        />
      </header>
    </div>
  );
}

export default App;
