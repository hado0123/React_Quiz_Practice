import React, { useState } from 'react'

function Quiz03() {
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" />
         <input type="text" name="message" placeholder="메시지 입력 (최대 20자)" />
         <div>현재 입력한 글자 수: </div>
         <button>확인</button>
      </div>
   )
}

export default Quiz03
