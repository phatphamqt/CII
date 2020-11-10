
import './App.css';

let str = "shopper";
let ned = "7";
let morseCode = "-.-. .... .- .-.. .-.. . -. --. .";
let wide = 10;
let height = 10;
let sign = "$" 
function App() {
  //TO NEAREST VOWEL
    

    function ToNearestVowel (str){
    
        let arr = str.split("");
        console.log(arr)
        
        let locate = []
        let vowel = ["u","e","o","a","i"]
    
        for(let s1=0;s1<vowel.length;s1++){
            for(let s2=0;s2<arr.length;s2++){
                if(arr[s2] == vowel[s1]){
                    arr[s2]=0
                    locate.push(s2)
                }
            }
        }
    
        locate.sort(function(a,b){
            return a-b
        })
        console.log(arr)
        console.log(locate)
        window.reach=[]
        const reach =window.reach
        for(let s3=0;s3<locate.length;s3++){ 
            if((locate[s3])!=locate[locate.length-1]){
                let mid = Math.round(((locate[s3+1]-1)-locate[s3])/2)
                reach.push(mid)
            }     
        }
        console.log(reach)
        if(locate[0]!=0){
            for(let s4=locate[0];s4>0;s4--){
                arr[s4-1] = arr[s4]+1
            }
            for(let s5=0;s5<reach.length;s5++){
                for(let s6=1;s6<=reach[s5];s6++){
                    arr[locate[s5]+s6]=arr[locate[s5]]+s6
                }
        
                for(let s7=reach[s5];s7>0;s7--){
                    arr[locate[s5+1]-s7]=arr[locate[s5+1]]+s7
                }
            }
            for(let s8=locate[locate.length-1];s8<arr.length;s8++){
                if(arr[s8]!=arr[arr.length-1]){
                    arr[s8+1] = arr[s8] + 1 
                } 
            }
            console.log(arr)
            } else {
                for(let s9=0;s9<reach.length;s9++){
                    for(let s10=1;s10<=reach[s9];s10++){
                        arr[locate[s9]+s10]=arr[locate[s9]]+s10
                    }
        
                    for(let s11=reach[s9];s11>0;s11--){
                        arr[locate[s9+1]-s11]=arr[locate[s9+1]]+s11
                    }
                }
                for(let s12=locate[locate.length-1];s12<arr.length;s12++){
                    if(arr[s12]!=arr[arr.length-1]){
                        arr[s12+1] = arr[s12] + 1 
                    } 
                }
                console.log(arr)
            } 
        return arr.join(",")
    }
    

// JUNCTION OR SELF
function junctionOrSelf(ned){
    let num =Number(ned)
    let juncnumber = window.juncnumber = []
    let ar =[]
    for(let j1=0;j1<num;j1++){
        let str=`${j1}`
        ar=str.split("")
        let sum=0
        for(let j2=0;j2<ar.length;j2++){
           sum += Number(ar[j2])
        }
        if((j1+sum)==num){
            console.log(j1)
            juncnumber.push(j1)
        }
    }
    if(juncnumber.length>0){
        console.log(juncnumber + '\n' 
       + num + " is a juncnumber")
       return (num + " is a juncnumber")
    } else {
        console.log(num + " is a selfnumber")
        return (num + " is a selfnumber")
    }
}


// MORSE CODE DECODED

function morseDecoded (){
    const morseToDots = {
        ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
        "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
        "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
        "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
        "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
        "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
        "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
        ".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
      }
      
      
      let morseCodearr= morseCode.split(" ")
      console.log(morseCodearr)
      let decoded=[]
      for(let m1=0;m1<morseCodearr.length;m1++){
          decoded.push(morseToDots[morseCodearr[m1]])
      }
      console.log(decoded.join(""))
      return decoded.join("")
}



// PICTURE FRAME


function dirtyFrame(a,b,c) {
    const frame = [a,b,c]
    let line1 = [""]
    let line2 = [""]
    for(let f1=0;f1<frame[0];f1++){
        line1[0] +=frame[2]
    }
    
    
    line2[0] += frame[2]
    for(let f2=0;f2<(frame[0]-2);f2++){
        line2[0] += " "
    }
    line2[0] += frame[2]
    
    
    // console.log(line1)
    // console.log(line2)
    
    let iKnowItsDirty = []
    
    iKnowItsDirty.push(line1)
    for(let f3=0;f3<frame[1]-2;f3++){
        iKnowItsDirty.push(line2)
    }
    iKnowItsDirty.push(line1)
    
    console.log(iKnowItsDirty)
    return iKnowItsDirty.join("")
}


  return (
    <div>
      1. TO NEAREST VOWEL <br></br>
        String: {str} <br></br>
        => {ToNearestVowel(str)} <br></br><br></br>
      2. JUNCTION OR SELF NUMBER<br></br>
        Number given: {ned}  <br></br>
        => {junctionOrSelf(ned)} <br></br>
      3.MORSE CODE DECODED <br></br>
        Code given: {morseCode} <br></br>
        => {morseDecoded()} <br></br> 
      4.PICTURE FRAME <br></br>
        Wide: {wide} Height: {height} Sign: {sign} <br></br>
        => {dirtyFrame(wide,height,sign)}
    </div>
  );
}

export default App;
