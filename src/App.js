import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Result from './Result';
import Page from './Page';
import Share from './Share.js';
// 상단 css,img,other js import 부분으로 모든 js에 필요한 import는 js마다 각각 다 써줘야함

function App() {    // function App() { <= App이 파일이름과 같아야함
  // function안 return 밖은 프로그램(script,변수등) 영역, 주석은 javascript와 같음
  // 필요한 함수 코드 작성
  // 아직 필요한 것 없음

  // return 안쪽이 화면에 보이는 element 배치 시키는 부분
  return (    
    // ============Root element는 꼭 1개로 열고 =================//
    <BrowserRouter>
    <div className="App">  


    <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Page' element={<Page/>}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/Share' element={<Share/>}/>
        <Route path='/' element={<Main/>}/>       
    </Routes> 
  

    </div>      
    </BrowserRouter>
  );
}

export default App;     // <= App이 위 함수 이름 & 파일이름과 같아야함
