import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Page() {   
  return (    

      <div className='ly-contents'>

        <div className='box-contents'>

          <dl>
            <dt>01</dt>
            <dd>문동은이 사는 빌라 이름은?</dd>
          </dl>

          <div className='wrap-form'>
            <input className='input-basic' type='text' placeholder='4글자'></input>
            <p>( * 4글자 )</p>
          </div>
          <Link to='/Result'>
            <button className='btn-basic'>다음으로</button>
          </Link>
        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default Page;     // <= App이 위 함수 이름 & 파일이름과 같아야함
