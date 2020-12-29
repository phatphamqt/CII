import React,{useState,useEffect} from 'react'


export function FetchAPI(){
    const [point,setPoint]= useState(0)
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(
          (result) => setItems(result.results)
        )
    }, [])

    function userAnswer(answers,ans){
        console.log(answers)
        console.log(ans)
        if(answers.correct_answer===ans){
            alert("Đúng rồi, bạn có 10 điểm")
            setPoint(point+10)
        } else {
            alert("Sai rồi, được 0 điểm")

        }
    }

    console.log(items)
    return<div id="item">
        <h3>Tổng điểm: {point} </h3>
        {items.map(item=>(
            <div className="items">
            <div className="title">
                <p>{item.category}</p>
                <p>{item.type}</p>
                <p>{item.difficulty}</p>
                <p>{item.question}</p>
            </div>
            <div className="answer">
                <button onClick={()=>{userAnswer(item,item.correct_answer)}}>{item.correct_answer}</button>
                {item.incorrect_answers.map(incorect=>(
                    <button onClick={()=>{userAnswer(item,incorect)}}>{incorect}</button>
                ))}
            </div>
            </div>
        ))}
    </div>
}