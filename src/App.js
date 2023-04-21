import logo from './logo.svg';
import './App.css';
// 상단 css,img,other js import 부분으로 모든 js에 필요한 import는 js마다 각각 다 써줘야함
// 우선 필요한것 없음

function App() {    // function App() { <= App이 파일이름과 같아야함
  // function안 return 밖은 프로그램(script,변수등) 영역, 주석은 javascript와 같음
  // 필요한 함수 코드 작성
  // 아직 필요한 것 없음

  // return 안쪽이 화면에 보이는 element 배치 시키는 부분
  return (    
    // ============Root element는 꼭 1개로 열고 =================//
    <div className="App">  




      {/* ROOT element 내부에 필요한 element 자유자재 배치 가능  주석 마크도 달라짐 */}
      <header className="App-header"> 
      {/* 리액트의 className 속성이 html의 class와 같음 */}
        <img src="go.png" width={200}  /> {/* 리액트에서 element들 속성 줄때 html과는 조금씩 다르므로 react 문법 구글링해서 넣어주면 됨*/}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          내 천직은 뭘까? <code>1분!</code>개발자 적성 테스트!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          START
        </a>
      </header>




      
      {/*  */}
      
    </div>                  //  1개로 닫기
  );
}

export default App;     // <= App이 위 함수 이름 & 파일이름과 같아야함
