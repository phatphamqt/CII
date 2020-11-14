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
    console.log(arr)
    for(let li=0;li<arr.length;li++) {
      console.log(arr[li])
    return <h2>
        {arr[li].symbol} {arr[li].title}
    </h2>

    }
   
    
}