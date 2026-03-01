import './App.css'
import Greetuser,{Add,Mul} from './lab5'
import CalculateSquare,{IsEven} from './lab6'
import  GreeetUser,{addNumbers}  from './lab7'
import PrintCoord from './lab8'
import Move,{FormatValue} from './lab9'
import UserDetails,{CalculatorDemo} from './lab10'
import StudentList,{PrintPoint} from './lab11'
import EnumAndInputExample from './lab12' 
import Task1,{Task2} from './lab13'
import Task3,{Task4} from './lab14'
function App() {
  return (
    <>
      <div>
        <Greetuser name='Shanker' title='Mr' />
        <Add a={10} b={20}/>
        <Mul a={10} b={20}/>  
       </div>
       <div>
        <CalculateSquare a={5}/>
        Is Even: {IsEven(10) ? "True" : "False"}
       </div>
       <div>
        {GreeetUser ("Shanker","Mr")}
        <br/>
        Add Numbers:{addNumbers(10,20)}
       </div>
       <div>
      {PrintCoord({x:100,y:100})};
       </div>
       <div>
        {Move("right")}
        <FormatValue value={"Shanker"}/>
       </div>
       <div>
        <UserDetails/>
        <CalculatorDemo/>
       </div>
       <div>
        <StudentList/>
        <PrintPoint point={{ x: 50, y: 80 }} />
       </div>
       <div>
        <EnumAndInputExample/>
       </div>
       <div>
        <Task1/>
        <Task2/>
       </div>
       <div>
        <Task3/>
        <Task4/>
       </div>
    </>
  )
}

export default App
