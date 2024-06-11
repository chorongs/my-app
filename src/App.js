import './App.css';
import Box from './component/Box';
import paper from './image/paper.jpg';
import rock from './image/rock.jpg';
import scissors from './image/scissors.jpg';
import { useState } from 'react';

// 내가 해야할 일들
// 1. 박스 2개 배치 (제목, 사진, 결과값)
// 2. 버튼
// 3. 버튼 클릭시 클릭 값 표시
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3 ,4 , 5 의 결과 값을 가지고 누가 이긴지 승패를 정함

const choice = {
  rock: {
    name: "Rock",
    img: rock,
  },
  scissors: {
    name: "Scissors",
    img: scissors,
  },
  paper: {
    name: "Paper",
    img: paper,
  }
};




function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")


  const play = (userChoice) => {
    setUserSelect(choice[userChoice])

    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  }

  const judgement = (user, computer) => {
    console.log("user",user, "computer", computer);


    // 가위 바위 보 로직
  if (user.name === computer.name) {
    return "tie"
  } else if(user.name === "Rock") 
    return computer.name=="Scissors" ? "win" : "lose"
    else if( user.name === "Scissors") 
    return computer.name=="Paper" ? "win" : "lose"
    else if(user.name === "Paper") 
    return computer.name =="Rock" ? "win" : "lose"
  }


  const randomChoice = () => {
    let itemArray = Object.keys(choice) // 객체에 키값만 뽑아서 어레이로 만들어줌
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    console.log("final", final)
    return choice[final]
  }

  return (
    <div className='back'>
  <div className='main'>
    <div className='box-container'>
      <Box title="Player" item={userSelect} result={result} />
      <div className='divider'></div>
      <Box title="Computer" item={computerSelect} result={result} />
    </div>

    <div className='fight'>
      <button onClick={() => play("scissors")}>
        <img src={scissors} alt="Scissors" />
      </button>
      <button onClick={() => play("rock")}>
        <img src={rock} alt="Rock" />
      </button>
      <button onClick={() => play("paper")}>
        <img src={paper} alt="Paper" />
      </button>
    </div>
  </div>
</div>



  );
}

export default App;
