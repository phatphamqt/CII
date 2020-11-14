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
    for(let li=0;li<arr.length,li++;) {
    return <h2>
        {emojiList[li].symbol} {emojiList[li].title}
    </h2>

    }
   
    
}