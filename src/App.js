import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Glory from './Glory/GloryMain';
import GloryPage from './Glory/GloryPage';
import GloryResult from './Glory/GloryResult';

import { Link } from 'react-router-dom';
// import Result from './Result';
// import Page from './Page';
// import Share from './Share.js';
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
      <div className='ly-main-q'>
        <h1 className='txt-mtitle'>😃 요즘 핫한 킬링타임 퀴이즈 😃</h1>
        <div className='main-question'>
        <Link to="/Glory">
          <div className='link-question txt-or'>
            <div className='link-img'></div>
            [더글로리] 정주행 테스트
            <p>✅ 당신의 관찰력 검사 ㄱㄱ ✅</p>
          </div>
        </Link>
        <Link to="/Glory"> 
          <div className='link-question txt-bl'>
            <div className='link-img'></div>
            [나는 SOLO] Hot!한 16기에서 일어난 일
            <p>✅ 나쏠 16기 얼마나 아세요? ✅</p>
            </div>
        </Link>
        <Link to="/Glory">
          <div className='link-question txt-min'>
          <div className='link-img'></div>
            [무한도전] 무도 빠라구요?
            <p>✅ 이거 모르면 무도키즈 아님ㅋ ✅</p>
          </div>
        </Link>
        </div>

      </div>  
      <Routes>
          <Route path='/Glory' element={<Glory/>}/>   
          <Route path='/GloryPage' element={<GloryPage/>}/>   
          <Route path='/GloryResult' element={<GloryResult/>}/>                        
      </Routes> 
    </div>      
    
    </BrowserRouter>
  );
}

export default App;     // <= App이 위 함수 이름 & 파일이름과 같아야함
