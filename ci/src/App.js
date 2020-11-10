import React from 'react'


function App() {
  const str = "i am healthy"
  const newstr = str.toUpperCase() 
  const vowel = ["U","E","O","A","I"]
  let arr = newstr.split("")
  for(let i=0;i<vowel.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j]==vowel[i] || arr[j]==" " ){
        arr.splice(j,1)
      }
    }  
  }
  let sigil = []
  for(let k=0;k<arr.length;k++){  
    if(sigil.indexOf(arr[k])==-1){
      sigil.push(arr[k])
    } else {
      let index = sigil.indexOf(arr[k])
      sigil.splice(index,1)
      sigil.push(arr[k])
    }
  }
console.log(sigil)
//2

  return (
    <div>
    1.  {sigil.join("")}
    </div>
  );
}

export default App;
