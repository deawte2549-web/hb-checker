import './App.css'
import { useState } from "react";

function App() {
  const[gender, setGender] = useState('male')
  const [hb, setHb] = useState('')
  const[result, setResult] =useState('')
  const [color, setColor] = useState('white')

function checkHb() {
  const hbNum = Number(hb)   // แปลง string เป็นตัวเลข
  let min = gender === 'male' ? 13 : 12
  let max = gender === 'male' ? 17 : 16

  if (hbNum < min) {
    setResult('ค่า Hb ต่ำกว่าปกติ')
    setColor('red')
  } else if (hbNum > max) {
    setResult('ค่า Hb สูงกว่าปกติ')
    setColor('red')
  } else {
    setResult('ค่า Hb ปกติ')
    setColor('green')
  }
}

  return(
    <div className='card'>
      <h1>ตรวจสอบค่า Hemoglobin</h1>

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="male">ชาย</option>
        <option value="female">หญิง</option>
      </select>

      <input
        type="number"
        placeholder="กรอกค่า Hb"
        onChange={(e) => setHb(e.target.value)}
        />

      <button onClick={checkHb}>ตรวจสอบ</button>

      <p style={{ color: color}}>{result}</p>
    </div>
  )
}

export default App