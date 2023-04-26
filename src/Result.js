import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Result() {   
  return (    

      <div className='ly-contents'>

        <div className='box-contents type-result'>

          <dl>
            <dt><em>80</em>점</dt>
            <dd>꽤 잘 아시네요?</dd>
          </dl>

          <div className='wrap-share'>
            <a className='btn-share' href='#'>문제 공유하기</a>
            <a className='btn-share' href='#'>결과 공유하기</a>
          </div>
          <Link to='/Main'>
            <button className='btn-basic'>다시하기</button>
          </Link>          

        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default Result;     // <= App이 위 함수 이름 & 파일이름과 같아야함
