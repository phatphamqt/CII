import React from 'react'
import { emojiList } from '../resources/emojiList'

export function Emoji (st){
    let arr=  emojiList.filter(emoji => {
        if (emoji.title.toLowerCase().includes(st.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(st)) {
          return true;
        }
        return false;
      })
    // console.log(arr)
    // console.log(arr.length)
    let elist = ""
    for(let li=0;li<arr.length;li++) {
        elist += `${arr[li].symbol} ${arr[li].title}`
    }  
    return <h2>
      {elist}   
    </h2>
    
}
   
    
