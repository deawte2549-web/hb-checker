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

  // ตรวจสอบว่ากรอกค่าอย่างน้อย 1 ช่อง
  if (!hbNum && !wbcNum && !plateletNum) {
    setResult([{ name: 'แจ้งเตือน', status: 'กรุณากรอกค่าอย่างน้อย 1 ช่อง', ok: false}])
    return
  }



  //เช็ค hb
  const hbMin = gender === 'male' ? 13 : 12
  const hbMax = gender === 'male' ? 17 : 16
  if (hbNum) {
    if(hbNum < 0 || hbNum > 25){ 
    list.push({ name: 'Hb', status: 'ค่าไม่สมเหตุสมผล (0-25 เท่านั้น)', ok: false})
    }else if (hbNum < hbMin){
      list.push({ name: 'Hb', status: 'ต่ำกว่าปกติ', ok: false})
    }else if (hbNum > hbMax){
       list.push({ name: 'Hb', status: 'สูงกว่าปกติ', ok: false})
    }else list.push({ name: 'Hb', status: 'ปกติ', ok:true })
  }

  //เช็ค wbc
 if (wbcNum) {
    if (wbcNum < 0 || wbcNum > 100000) {
      list.push({ name: 'WBC', status: 'ค่าไม่สมเหตุสมผล (0-100000 เท่านั้น)', ok: false })
    } else if (wbcNum < 4500) {
      list.push({ name: 'WBC', status: 'ต่ำกว่าปกติ', ok: false })
    } else if (wbcNum > 11000) {
      list.push({ name: 'WBC', status: 'สูงกว่าปกติ', ok: false })
    } else {
      list.push({ name: 'WBC', status: 'ปกติ', ok: true })
    }
  }
   // เช็ค Platelet
  if (plateletNum) {
    if (plateletNum < 0 || plateletNum > 1000000) {
      list.push({ name: 'Platelet', status: 'ค่าไม่สมเหตุสมผล (0-1000000 เท่านั้น)', ok: false })
    } else if (plateletNum < 150000) {
      list.push({ name: 'Platelet', status: 'ต่ำกว่าปกติ', ok: false })
    } else if (plateletNum > 400000) {
      list.push({ name: 'Platelet', status: 'สูงกว่าปกติ', ok: false })
    } else {
      list.push({ name: 'Platelet', status: 'ปกติ', ok: true })
    }
  }
setResult(list)

} 

  return(
    <div className='card'>
      <h1>ตรวจสอบค่าเลือด CBC</h1>

      <div className="input-group">
        <label>เพศ</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value={"male"}>ชาย</option>
          <option value={"female"}>หญิง</option>
        </select>
      </div>

      <div className="input-group">
        <label>Hemoglobin (g/dl)</label>
        <input
          type="number"
          placeholder="ค่าปกติ ชาย 13-17 หญิง 12-16"
          onChange={(e) => setHb(e.target.value)}
        />
      </div>

      <div className="input-group">
      <label>WBC (เซลล์/ไมโครลิตร)</label>
      <input
        type="number"
        placeholder="ค่าปกติ 4,500-11,000"
        onChange={(e) => setWbc(e.target.value)}
      />  
    </div>

      <div className="input-group">
        <label>Platelet (เซลล์/ไมโครลิตร)</label>
        <input
        type="number"
        placeholder="ค่าปกติ 150,000-400,000"
        onChange={(e) => setPlatelet(e.target.value)}
        />
      </div>
     
      <button onClick={checkAll}>ตรวจสอบ</button>
     
      {result.map((r, i) => (
        <div key={i} className={`result-card ${r.ok ? 'ok' : 'not-ok'}`}>
          <span className="result-icon">{r.ok ? '✓' : '✗'}</span>
          <span className="result-text">{r.name}: {r.status}</span>
        </div>
      ))}
    </div>
  )
}

export default App