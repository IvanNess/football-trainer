import React, {useEffect} from 'react'
import shuffle from 'shuffle-array'
import {connect} from 'react-redux'

import Year from '../year'
import Bonus from '../bonus'
import SelectYears from '../select-years'
import UserPanel from '../user-panel'
import GameEnd from '../game-end'

import italy from '../data/italy'
import spain from '../data/spain'
import england from '../data/england'

import './main.scss'

const countryArr = [italy, spain, england]
const countryAppearance = 2

const Main = ({year}) => {

    console.log('year changed', year)

    const countries = shuffle.pick(countryArr, {picks: countryAppearance})

    return (
        <div className="main">
            <GameEnd/> 
            <UserPanel />
            <h2 className={`question`}>When was that?</h2>
            <div className={`years`}>
                {countries.map(country=>{
                    return <Year countryFile={country} key={country.stringCode}/>

                })}
                {/* <Year countryFile={italy} />
                <Year countryFile={spain} />
                <Year countryFile={england} /> */}
            </div>
            <SelectYears />
            <div className={`bonus`}>
                <Bonus />
            </div>
        </div>
    )
}

const mapStateToProps = ({years})=>({year: years.year})

export default connect(mapStateToProps)(Main)