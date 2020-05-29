import React, { useEffect } from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [value, setValue] = React.useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3,4,5,6 ,false] }],
      ['bold', 'italic', 'underline','strike','blockquote'],
      // [{ 'size': ['small', false, 'large', 'huge'] }], 
      [{ 'color': [] }, { 'background': [] }],  
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike','blockquote',
    // 'size',
    'color','backgroud',
    'list', 'bullet', 'indent',
    'link', 'image',
  ]

  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    console.log(value)
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}
                    formats={formats}/>
        
        {/* <p>{value}</p> */}
      </header>
    </div>
  );
}

export default App;
