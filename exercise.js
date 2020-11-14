//   //6 Magic Sigil
//   const str = "i am healthy"
//   const newstr = str.toUpperCase() 
//   const vowel = ["U","E","O","A","I"]
//   let arr = newstr.split("")
//   for(let i=0;i<vowel.length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(arr[j]==vowel[i] || arr[j]==" " ){
//         arr.splice(j,1)
//       }
//     }  
//   }
//   let sigil = []
//   for(let k=0;k<arr.length;k++){  
//     if(sigil.indexOf(arr[k])==-1){
//       sigil.push(arr[k])
//     } else {
//       let index = sigil.indexOf(arr[k])
//       sigil.splice(index,1)
//       sigil.push(arr[k])
//     }
//   }
// console.log(sigil)
// //8 magic square
//   let square = [[1,2,3],[4,5,6],[7,8,9]]
//   function magicSquare(array){  
//     if(array[0].length==array.length){
//       let fault = []
//       let squareSize = array.length
//       let horizontal = 0
//       let vertical = 0
//       let diagonal = 0
//       console.log(fault.length)
//       for(let loop2=0;loop2<squareSize;loop2++){
//         for(let loop1=0;loop1<squareSize;loop1++){
//           horizontal += (array[loop2])[loop1]
//           vertical += (array[loop1])[loop2]
//           diagonal += (array[loop1])[loop1]
//         }
//         console.log(horizontal)
//       console.log(vertical)
//       console.log(diagonal)
//       if(horizontal!=vertical || horizontal!=diagonal){
//         fault.push(1)
//       }
//       }
//       if(fault.length>0){console.log("false",fault.length)}
//       else{console.log("true")}

//     } else {
//       console.log("invalid square")
//     }
//   }
//   magicSquare(square)  


//9 fiscal code
//   let coding = {
//     name: "mickey",
//     surname: "mouse",
//     gender: "M",
//     dob: "16/1/1928"
//   }
//   console.log(coding.surname.length)

//   function fiscalCode(object){
//     let vow = ["u","e","o","a","i"]
//     let vowel = "";
//     let consonent = "";
//     let p1="",p2="",p3="",p4="";
    
//     const months = {
//       1:"A",
//       2:"B",
//       3:"C",
//       4:"D",
//       5:"E",
//       6:"H",
//       7:"L",
//       8:"M",
//       9:"P",
//       10:"R",
//       11:"S",
//       12:"T",
//     }
//     //p1
//     for(let sur =0;sur<object.surname.length;sur++){
//       if(vow.indexOf(object.surname[sur])==-1){
//         consonent += object.surname[sur]
//       } else {
//         vowel += object.surname[sur]
//       }
//     }  
//       if(consonent.length>=3){
//         p1 = consonent[0] + consonent[1] + consonent [2]
        
//       } if(consonent.length<3){
//         for(let count=0;count<consonent.length;count++){
//           p1 += consonent[count]
//         }
//         let left=3-p1.length
//         if(left<vowel.length){
//           for(let count1=0;count1<left;count1++){
//             p1 += vowel[count1]
//           }
//         }
//         if(left==vowel.length){
//           for(let count2=0;count2<left;count2++){
//             p1 += vowel[count2]
//           }
//         } if(left>vowel.length) {
//           for(let count3=0;count3<vowel.length;count3++){
//             p1 += vowel[count3]
//           }
//           p1 += "X"
//         } 
//       }
//       console.log(p1)
//       consonent = "";
//       vowel = ""; 
// //p2
// for(let nam =0;nam<object.name.length;nam++){
//   if(vow.indexOf(object.name[nam])==-1){
//     consonent += object.name[nam]
//   } else {
//     vowel += object.name[nam]
//   }
// }  
//   if(consonent.length>3){
//     p2 = consonent[0] + consonent[2] + consonent [3]
    
//   } if(consonent.length==3){
//     p2= consonent[0] + consonent[1] + consonent[2]

//   } if(consonent.length<3){
//     for(let cont=0;cont<consonent.length;cont++){
//       p2 += consonent[cont]
//     }
//     let lefto=3-p2.length
//     if(lefto<vowel.length){
//       for(let cont1=0;cont1<lefto;cont1++){
//         p2 += vowel[cont1]
//       }
//     }
//     if(lefto==vowel.length){
//       for(let cont2=0;cont2<lefto;cont2++){
//         p2 += vowel[cont2]
//       }
//     } if(lefto>vowel.length) {
//       for(let cont3=0;cont3<vowel.length;cont3++){
//         p2 += vowel[cont3]
//       }
//       p2 += "X"
//     } 
//   }
//   console.log(p2)
//   //p3
//   let dob = object.dob
//   console.log(dob)
//   let arrDob=dob.split("/")
//   console.log(arrDob)
//   let year = arrDob[2].split("")
//   console.log(year)
//   for(let come=2;come<=3;come++){
//     p3+=year[come]
//   }
//   let month = months[arrDob[1]]
//   p3 += month
//   console.log(p3)
//   //p4
//   if(object.gender=="F"){
//     p4 +=(40+Number(arrDob[0]))
//   } if(object.gender=="M"){
//     if(Number(arrDob[0])<10){
//       p4 += "0"+arrDob[0]
//     } else{
//       p4 += arrDob[0]
//     }
//   }
//   console.log(arrDob[0])
//   console.log(p4)
//   let fcode = p1+p2+p3+p4;
//   console.log(fcode)
//   }
//   fiscalCode(coding)

//10 Number of Boomerangs
// let boomerang = [3,7,3,2,1,5,1,2,2,-2,2]
// function countBoomerang(array){
//   console.log(array)
//   let booms =[]
//   for(let countback=(array.length-1);countback>1;countback--){
//     if(array[countback]==array[countback-2] && array[countback] != array[countback-1]){
//       let zoom = []
//       zoom.push(array[countback-2],array[countback-1],array[countback])
//       booms.push(zoom)
//     }
//   }
//   console.log(booms.length)
//   console.log(booms)
  
// }  
// countBoomerang(boomerang)