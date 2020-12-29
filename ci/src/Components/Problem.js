
import React from 'react'

export function Problem(){
    let A1 = [1, 2, "a","b"];
    let A2 = [1, 3, "b"];
    let testcase = [
        {
            name: "Chelsea",
            point: 75,
            GD: 39,
        }, {
            name: "Manchester United",
            point: 60,
            GD: 29,
        }, {
            name: "Liverpool",
            point: 60,
            GD: 69,
        }, {
            name: "Arsenal",
            point: 99,
            GD: 45,
        }, 
    ]
    function problem1(a1,a2){
        console.log(a1,a2)
        let trung=[]
        let koTrung=[]
        for(let d=0;d<a1.length;d++){
            for(let i=0;i<a2.length;i++){
                if(a1[d]===a2[i]){
                    trung.push(a1[d])
                }
            }
        }
        console.log(trung)
        for(let n=0;n<a1.length;n++){
            if(trung.indexOf(a1[n])===-1){
                koTrung.push(a1[n])
            }
        }
        for(let n=0;n<a2.length;n++){
            if(trung.indexOf(a2[n])===-1){
                koTrung.push(a2[n])
            }
        }
        console.log(koTrung)
    }
    function problem2(tc){
        console.log(tc)
        let points=[]
        let goaleds=[]
        let notsame=[]
        let same=[]
        let samePointTeam=[]
        for(let i=0;i<tc.length;i++){
            points.push(tc[i].point)
        }
        console.log(points,goaleds)
        for(let i=0;i<points.length;i++){
            if(notsame.indexOf(points[i])===-1){
                notsame.push(points[i])
            } else if(notsame.indexOf(points[i])!==-1){
                console.log(points[i])
                same.push(points[i])
            }
        }

        let descenpoints=points.sort(function(a, b){return b-a});
        console.log(descenpoints)
        for(let a=0;a<tc.length;a++){
            console.log(descenpoints.indexOf(tc[a].point))
            tc[a].rank=(descenpoints.indexOf(tc[a].point)+1)
        }

    }

    return <div>
        <p>Problem Solving:</p>
        <button onClick={()=>{problem1(A1,A2)}}>problem1</button><br></br><br></br>
        <button onClick={()=>{problem2(testcase)}}>problem2</button>
    </div>
}