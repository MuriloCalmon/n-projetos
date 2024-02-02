
import { useState } from 'react'
import './App.css'
import ImcCalc from './components/ImcCalc'
import { data } from './data/data'
import ImcTable from './components/ImcTable'

function App() {

  // função que faz o calculo do imc e setando o imc ao useState
  const calcImc = (e, height, weight) => {
    e.preventDefault()

    const weightFloat = +weight.replace(',', '.')
    const heightFloat = +height.replace(',', '.')

    if (!height || !weight) return

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)


    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if (!info) return
  }

  // Setando os states para vazio, retornará para o componente ImcCalc (inicio, reset)
  const resetCalc = (e) => {
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }

  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  return (
    <>
      <div className='container'>
        {/* se existir calculo do imc, será chamada o ImcTable que mostrará as 
        informações detalhadas, essa verificação é importante também por conta 
        do button/função de reset */}
        {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />}
      </div>

    </>
  )
}

export default App
