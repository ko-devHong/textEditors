import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Editor } from "@tinymce/tinymce-react";
import TextinputCompoent from "./TextinputCompoent";
import FileBase64 from "react-file-base64";
import axios from "axios";

function App() {
  const [idCardBase64, setIdCardBase64] = useState("");
  const [id2CardBase64, setId2CardBase64] = useState("");
  var htmlCode = `<h3><strong>놀이 소개</strong></h3><p><span style="font-size:14px"><span style="color:#e4b8b0"><strong>`;

  const handlePost = (code) => {
    axios
      .post("http://localhost:8080/api/htmlcdoe", {
        htmlcodes: code,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const testfunc = (e) => {
    htmlCode =
      htmlCode +
      e.target.title0.value +
      `</strong></span></span><br /><span style="font-size:12px"><strong>` +
      e.target.title0.value +
      `</strong></span></p><p> <span style="font-size:12px">` +
      e.target.text0.value +
      "</span></p><h3><strong>프로그램</strong></h3>" +
      `<h3> <span style="font-size:12px">` +
      e.target.title1.value +
      "</span> </h3> <h3>" +
      `<span style="font-size:14px"><span style="color:#e4b8b0"> <strong>One-day class</strong></span></span><br /> <span style=“font-size:12px">` +
      e.target.text1.value +
      "</span>" +
      "<img src={" +
      idCardBase64 +
      "} width={100} height={100} />";
    console.log(htmlCode);
    handlePost(htmlCode);
    // console.log(e.target.title0.value);
  };

  // Callback~
  const getFiles = (files) => {
    // console.log(files[0].base64);
    setIdCardBase64(files[0].base64);
    if (files.length > 1) {
      setId2CardBase64(files[1].base64);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={idCardBase64} width={100} height={100} />
        <img src={id2CardBase64} width={100} height={100} />
        {/* <input type="file" name="file" onChange={handleFileInput} />
         */}
        <FileBase64 multiple={true} onDone={getFiles} />
        <form className="Inputform" onSubmit={testfunc}>
          <TextinputCompoent num={2} />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
/*
<h3><strong>놀이 소개</strong></h3>
<p>
<span style=“font-size:14px”>
<span style=“color:#e4b8b0"> <strong>해피투씨유 스토리텔링 작곡 무엇이 특별한가요?</strong> </span>
  </span>
     <br />
     <span style=“font-size:12px">   <strong>내 마음이 소리로 들린다, 음악적 표상 활동을 경험하는 스토리텔링 작곡</strong> </span>
     </p>
      <p>
       <span style=“font-size:12px"> 예술적 재능을 발견한다. 미술과 음악의 통합 교육&nbsp; 스토리텔링 작곡은 그림을 통해 자유롭게 자신의 생각과 감정을 표현할 수 있는 기회를 제공합니다.
       더불어 아이의 생각과 감정이 나타난 그림을 작곡이라는 음악적 방법을 통해 다양한 소리로 더욱 풍부하게 표상하고 나아가 나만의 음악으로 완성해보는 예술 활동입니다.
        </span>
        </p>
        <h3> <strong>프로그램</strong> </h3>
         <h3> <span style=“font-size:12px"> 음악과 미술로 내 마음을 표현한다.&nbsp;창의 예술 스토리텔링 작곡 </span> </h3>
         <h3>
         <span style=“font-size:14px">
         <span style=“color:#e4b8b0"> <strong>One-day class</strong> </span>
         </span>
         <br />
         <span style=“font-size:12px">
         <strong>우리 아이가 좋아하는 컨텐츠를 선택하여 1회 체험하는 수업</strong>
          <br />
          주제: 우리 가족 이야기로 만드는 노래, 나의 이야기를 들어봐
          </span>
          </h3>
          <p>
           <span style=“font-size:14px">
           <span style=“color:#e4b8b0">
           <strong>Intensive class</strong>
           </span>
            </span>
             <br />
              <span style=“font-size:12px">
              <strong>아이가 좋아하는 컨텐츠를 보다 깊게 한달 동안 배워보는 프로그램</strong>
               </span>
                 <br />
                 <span style=“font-size:12px">
                  <strong>01작곡 이야기 </strong>
                   &nbsp; 미디 작곡을 이해하고 기초적인 작곡 기법 체험을 통해 작곡과 친숙해 져요.
                    </span>
                     <br />
                      <span style=“font-size:12px">
                      <strong>02 작곡으로 하는 자연 여행</strong>
                       자연 속 소리를 노래가 될 수 있어요. </span>
                       <br />
                        <span style=“font-size:12px">
                         <strong>03 작곡으로 하는 세계 여행</strong>
                         &nbsp; 세계 여러 나라의 이야기를 노래로 표현해요. .
                          </span>
                          <br />
                          <span style=“font-size:12px">
                          <strong>04 작곡으로 나누는 대화 </strong>
                          선생님의 노래와 나의 노래를 합쳐봐요. </span>
                          </p>
                          <h3>
                          <span style=“display:none">&nbsp;</span>
                           <span style=“font-size:14px">
                            <strong>교육가치</strong>
                            </span>
                            </h3>
                             <p>
                             <span style="font-size:12px">
                             내가 생각한 것을 그림으로 그린 후 음악으로 표상하는 활동을 통해 창의적으로  표현하는 과정을 경험할 수 있고 내면적인 감정을 에너지
                             있게 표출하는 경험을 제공하여 정서적 안정을 도모하며 다양한 스펙트럼의 예술을
                             복합적으로 경험하며 자연스럽게 음악적 감각 발달을 도모할 수 있습니다..
                             &nbsp;</span>
                             </p>
                             <h3>
                              <strong>
                              <span style=“font-size:14px">기대효과</span>
                              </strong>
                              </h3>
                               <ul>
                                <li>
                                <span style="font-size:12px">자신의 내면을 미술과 음악으로 표현함으로써 창의적 표현 능력 발달 </span>
                                 </li>
                                  <li>
                                  <span style="font-size:12px">
                                  작곡의 기본 원리를 이해하고 다양한 유형의 작곡 활동을 통한 음악적 감각 향상
                                  </span>
                                   </li>
                                   </ul>
                                    <h3>
                                    <span style=“font-size:14px"><strong>무엇이 필요할까요?</strong>
                                    </span>
                                     </h3>
                                     <p>
                                     <span style="font-size:12px">
                                     태블릿 PC(프로그램:garage band), 디지털 피아노, 이동 스피커, 노트북, 스케치북, 색연필
                                     <br />  (연령별 필요한 자료를 교사가 가지고 방문합니다.) <br />  .&nbsp;
                                      </span>
                                       </p>
*/
export default App;
