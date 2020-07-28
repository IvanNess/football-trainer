import React, {useState, useRef} from 'react'
import { Select, Modal } from 'antd'
import {connect} from 'react-redux'

import './select-years.scss'

const SelectYears = ({ year, allYears, isFirstAnswered, selectedValue, onChangeDispatch, onModal, onNext,
    setGameEndProps, questionNumber, gameEndProps
 }) => {

    const [answer, setAnswer] = useState()
    const [btnMode, setBtnMode] = useState('disabled')

    const onChange =value=> {
        setBtnMode('enabled')
        setAnswer(value)
        onChangeDispatch({value})
    }
    
    const onModalOk = ()=>{
        setBtnMode('disabled')
        onModal({showBonus: true, isFirstAnswered: true})
        // setShowBonus(true)
        // setAnswered(true)
    }

    const onErrorOk = ()=>{
        setBtnMode('disabled')
        //onModal({showBonus: false, isFirstAnswered: true})
        onNext({isRightAnswered: false})
        // setAnswered(true)
    }

    const onclick = ()=>{
        console.log('onclick', answer, year, questionNumber)
        if(answer===year){
            Modal.info({
                title: 'Success',
                content: (
                <div>
                    <p>{`You are right! It is ${year}!`}</p>
                </div>
                ),
                onOk: onModalOk,
            }) 
        } else{
            if(questionNumber!==10){
                Modal.error({
                    title: 'Error',
                    content: (<p>{`You are wrong! It is ${year}!`}</p>),
                    onOk: onErrorOk,
                    okText: 'Proceed to next question',
                })
            } else{
                setGameEndProps({visible: true})
            }
            
        }
    }    

    return (
        <div className={`select-years`}>
            <div className='select-div'>
                <Select
                    showSearch
                    listHeight={120}
                    style={{ width: 200 }}
                    placeholder="Select a year"
                    optionFilterProp="children"
                    onChange={onChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    disabled={isFirstAnswered}
                    value={selectedValue}
                >
                    {allYears.map(year => {
                        return (
                            <Select.Option key={year} value={year}>{year}</Select.Option>
                        )
                    })}
                </Select>
                <div className={`btn ${btnMode}`} onClick={btnMode !== 'disabled' ? onclick : () => { }}>{`Check ${answer || ''}`}</div>
            </div>
        </div>
    )
}

const mapStateToProps=({years, allYears, isFirstAnswered, firstSelectedValue, questionNumber, gameEndProps})=>({
    year: years.year, allYears, isFirstAnswered, selectedValue: firstSelectedValue, questionNumber, gameEndProps
})

const mapDispatchToProps=({
    setAnswered: (value)=>({type: 'SET_IS_FIRST_ANSWERED', payload: {value}}),
    onChangeDispatch: (payload)=>({type: 'FIRST_VALUE_CHANGED', payload}),
    onModal: (payload)=>({type: 'ON_FIRST_MODAL', payload}),
    onNext: (payload)=>({type: 'NEXT_QUESTION', payload}),
    setGameEndProps : (payload)=>({type: 'SET_GAME_END_PROPS', payload}),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectYears)