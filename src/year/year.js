import React, {useEffect, useState} from 'react'
import { Collapse } from 'antd'
import {connect} from 'react-redux'

import ClubCard from '../club-card'
import GoalScorer from '../goal-scorer'
import countries from '../data/countries'
import players from '../data/players'

import './year.scss'

const { Panel } = Collapse;

const Year = ({year, countryFile, onGoalScorer, storeActiveKey})=>{

    const [collapseContentVisibility, setCollapseContentVisibility] = useState(true)

    const [activeKey, setActiveKey] = useState([])

    useEffect(()=>{
        console.log('year', year)
        setCollapseContentVisibility(false)
        onGoalScorer({activeKey: []})
        
        setTimeout(()=>{
            setCollapseContentVisibility(true)
        }, 1000)
    }, [year, onGoalScorer])

    useEffect(()=>{
        setActiveKey(storeActiveKey)
    }, [storeActiveKey])

    const countryStringCode = countryFile.stringCode
    const country = countries[countryStringCode]

    const championStringCode = countryFile.champions[year]
    const champion = countryFile.clubs[championStringCode]

    const cupWinnerStringCode = countryFile.cupWinners[year]
    const cupWinner = countryFile.clubs[cupWinnerStringCode]

    const goalScorers = [...countryFile.goalscorers[year]]
    goalScorers.forEach(goalScorer => {
        const goalScorerStringcode = goalScorer.stringCode
        goalScorer.name = players[goalScorerStringcode].name
        const goalscorerCountry = players[goalScorerStringcode].country
        goalScorer.countryFlag = countries[goalscorerCountry].flagUrl
        const clubStringCode = goalScorer.club
        goalScorer.clubname = countryFile.clubs[clubStringCode].name
    })

    const onChange = (key)=>{
        console.log('active key', key)
        onGoalScorer({activeKey: key, manual: true})
    }

    return(
        <div className={`year`} data-testid={`year`}>
            <div className={`country`} data-testid={`country`}>
            <div className='title'>{country.name}</div>
                <img src={country.flagUrl}/>
            </div>
            <div className={`champion competition`} data-testid={`champion`}>
                <div className='title'>Champion</div>
                <ClubCard name={champion.name} logoUrl={champion.logoUrl}/>
            </div>
            <div className={`cup-winner competition`} data-testid={`cup-winner`}>
                <div className='title'>Cup Winner</div>
                <ClubCard name={cupWinner.name} logoUrl={cupWinner.logoUrl}/>
            </div>
            <div className={`goalscorer competition`} data-testid={`goalscorer`}>
                {/* <div className='title'>Top Goalscorer</div> */}
                <Collapse defaultActiveKey={[]} onChange={onChange} activeKey={activeKey}>
                    <Panel header="Top Goalscorer" key="1">
                    {goalScorers.map(({name, countryFlag, clubname, goals, stringCode})=>{
                        return(
                            <GoalScorer 
                                key={stringCode} name={name} countryFlag={countryFlag} club={clubname} goals={goals}
                                visibility={collapseContentVisibility}
                            />
                        )
                    })}
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

const mapStateToProps = ({years, activeKey})=>({
    year: years.year,
    storeActiveKey: activeKey
})

const mapDispatchToProps = ({
    onGoalScorer: (payload)=>({type: 'ON_GOALSCORER', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(Year)

export {Year}