import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import shuffle from 'shuffle-array'
import { Select, Modal } from 'antd'

import { championsCup, winnersCup, uefaCup } from '../data/europe'

import './bonus.scss'

const intThree = ['Champions Cup', 'Cup Winners Cup', 'UEFA Cup']
const intTwo = ['Champions Cup', 'UEFA Cup']

const Bonus = ({ year, showBonus, onNext, questionNumber, setGameEndProps }) => {

  console.log('year', year)

  const [final, setFinal] = useState('')
  const [fiveFinals, setFiveFinals] = useState([])
  const [tournament, setTournament] = useState('')

  useEffect(() => {
    const tournament = year > 1999 ? shuffle.pick(intTwo) : shuffle.pick(intThree)
    setTournament(tournament)
    const finals = tournament === 'Champions Cup' ? championsCup :
      tournament === 'Cup Winners Cup' ? winnersCup : uefaCup
    const finalsYearIdx = finals.findIndex(final => {
      //console.log(final[0], year, final[0]===year)
      return final[0] === year
    })
    //console.log(finalsYearIdx, year)
    setFinal(finals[finalsYearIdx][1])

    let fiveFinals = shuffle.pick(finals, { 'picks': 5 })
    const fivefinalsYearIdx = fiveFinals.findIndex(final => final[0] === year)
    //console.log('fivefinalsYearIdx', fivefinalsYearIdx)
    //console.log('fiveFinals', fiveFinals)
    if (fivefinalsYearIdx === -1) {
      const fourFinals = shuffle.pick(fiveFinals, { 'picks': 4 })
      fiveFinals = shuffle([...fourFinals, finals[finalsYearIdx]])
    }
    //console.log(fiveFinals)
    setFiveFinals(fiveFinals)
  }, [year, tournament])

  //console.log(fiveFinals)

  const [btnMode, setBtnMode] = useState('disabled')
  const [answer, setAnswer] = useState()

  const onChange = (value) => {
    console.log(value)
    setBtnMode('enabled')
    setAnswer(value)
    //setSelectedValue(value)
  }

  const onModalOk = () => {
    //setAnswered(true)
    onNext({ isRightAnswered: true })
    setBtnMode('disabled')
    //setShowBonus(true)
  }

  const onErrorOk = () => {
    //setAnswered(true)
    onNext({ isRightAnswered: false })
    setBtnMode('disabled')
  }

  const onclick = () => {
    console.log('bonus on click', questionNumber)
    if (questionNumber === 10) {
      console.log('bonus on click', {visible: true, final, isRightAnswered: answer===year})
      setGameEndProps({visible: true, final, isRightAnswered: answer===year})
    } else {
      if (answer === year) {
        Modal.info({
          title: 'Success',
          okText: 'Proceed to next question',
          content: (
            <div>
              <p>{`You are right! It is ${final}!`}</p>
            </div>
          ),
          onOk: onModalOk,
        })
      } else {
        Modal.error({
          title: 'Error',
          okText: 'Proceed to next question',
          content: (<p>{`You are wrong! It is ${final}!`}</p>),
          onOk: onErrorOk,
        })
      }
    }
  }

  return (
    showBonus && <div className={`bonus`}>
      <div className={`title`}>{`Bonus! Let's remember teams played in ${year} ${tournament} final.`}</div>
      <Select
        showSearch={document.documentElement.clientWidth >=500}
        listHeight={120}
        placeholder="Select a final"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {fiveFinals.map(([year, final]) => {
          return (
            <Select.Option key={year} value={year}>{final}</Select.Option>
          )
        })}
      </Select>
      <div className={`btn ${btnMode}`} onClick={btnMode !== 'disabled' ? onclick : () => { }}>{`Check`}</div>
    </div>
  )
}

const mapStateToProps = ({ years, showBonus, questionNumber }) => ({
  year: years.year, showBonus, questionNumber
})

const mapDispatchToProps = ({
  onNext: (payload) => ({ type: 'NEXT_QUESTION', payload }),
  setGameEndProps: (payload) =>({type: 'SET_GAME_END_PROPS', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(Bonus)