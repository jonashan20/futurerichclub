import React from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import questions from './question.json';
import { useState} from 'react';

function Page() {   

  const [count, setCount] = useState(0);  //질문 진행 count  
  const navigate  = useNavigate();

  const handleBack = () =>  {   
      if (!!questions.all[count-1]){
        setCount(count-1)
      } else {
        navigate('/Main');     
      } 
	}

  const handleNext = () =>  {   
      if (!!questions.all[count+1]){
        setCount(count+1)
      } else {
        navigate('/Result');     
      }
	}


  return (    
      
      <div className='ly-contents'>

        <div className='box-contents'>


          {/* 현재 Question 렌더링 */}        
          <div><dl><dt>{questions.all[count].num}</dt><dd>{questions.all[count].question}</dd></dl></div>   
          
          {/* 현재 카운트 질문에 대한 Choices 렌더링 */}        
          { questions.all[count].choices.map((item) => {                                                
              return <ul className='list-anwser'> <li><span>{item.num}</span>{item.desc}</li></ul>             
          })}
        

          {/* 주관식 처리는 추후  */}
          {/* <div className='wrap-form'>
            <input className='input-basic' type='text' placeholder='4글자'></input>
            <p>( * 4글자 )</p>
          </div> */}

     
          <div className='wrap-btn'>
            {/* <Link to='/Result'> */}
            <button className='btn-question' onClick={handleNext}>다음으로</button>
            {/* </Link> */}
            {/* <Link to='/Main'>
            <button className='btn-back'>다시하기</button>
             </Link>   */}

            { count < 1 ? null: <button className='btn-back' onClick={handleBack}>이전으로</button> }
          </div>
         
        </div>
     
        <div className='bg-main'>
        </div>
                
      </div>
      

  );
}

export default Page;  
