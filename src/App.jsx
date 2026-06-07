import { useState } from "react";
import './App.css'


function App() {
  const[gender, setGender] = useState('male')
  const [hb, setHb] = useState('')
  const[wbc, setWbc] = useState('')
  const[platelet, setPlatelet] =useState('')
  const[result, setResult] =useState([])

function checkAll() {
  const hbNum = Number(hb)
  const wbcNum = Number(wbc)
  const plateletNum = Number(platelet)
  const list = []


  //เช็ค hb
  const hbMin = gender === 'male' ? 13 : 12
  const hbMax = gender === 'male' ? 17 : 16
  if (hbNum) {
    if(hbNum < hbMin) list.push({ name: 'Hb', status: 'ต่ำกว่าปกติ', ok: false})
    else if (hbNum > hbMax) list.push({ name: 'Hb', status: 'สูงกว่าปกติ', ok: false})
    else list.push({ name: 'Hb', status: 'ปกติ', ok:true })
  }

  //เช็ค wbc
  if (wbcNum) {
    if (wbcNum < 4500) list.push({ name: 'wbc',status: 'ต่ำกว่าปกติ', ok:false})
    else if(wbcNum > 11000) list.push({ name: 'wbc',status: 'สูงกว่าปกติ', ok: false})
    else list.push({ name: 'wbc', status: 'ปกติ', ok:true })
  }
 if (plateletNum) {
      if (plateletNum < 150000) list.push({ name: 'Platelet', status: 'ต่ำกว่าปกติ', ok: false })
      else if (plateletNum > 400000) list.push({ name: 'Platelet', status: 'สูงกว่าปกติ', ok: false })
      else list.push({ name: 'Platelet', status: 'ปกติ', ok: true })
    }
setResult(list)

} 

  return(
    <div className='card'>
      <h1>ตรวจสอบค่าเลือด CBC</h1>

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="male">ชาย</option>
        <option value="female">หญิง</option>
      </select>

      <input type="number" placeholder="Hb (g/dL)" onChange={(e) => setHb(e.target.value)} />
      <input type="number" placeholder="WBC (เซลล์/ไมโครลิตร" onChange={(e) => setWbc(e.target.value)} />
      <input type="number" placeholder="Platelet (เซลล์/ไมโครลิตร)" onChange={(e) => setPlatelet(e.target.value)} />

      <button onClick={checkAll}>ตรวจสอบ</button>
      {result.map((r, i) => (
      <p key={i} className="result" style={{ color: r.ok ? 'green' : 'red'}}>
        {r.name}: {r.status}
      </p>
      ))}
    </div>
  )
}

export default App