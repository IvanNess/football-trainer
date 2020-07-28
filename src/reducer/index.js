import updateYears from './updateYears'
import updateIsFirstAnswered from './updateIsFirstAnswered'
import updateIsSecondAnswered from './updateIsSecondAnswered'
import updateShowBonus from './updateShowBonus'
import updateFirstSelectedValue from './updateFirstSelectedValue'
import updateScore from './updateScore'
import updateQuestionNumber from './updateQuestionNumber'
import updateUser from './updateUser'
import updatePenalty from './updatePenalty'
import updateActiveKey from './updateActiveKey'
import updateIsGoalscorerOpenedFirstTime from './updateIsGoalscorerOpenedFirstTime'
import updateGameEndProps from './updateGameEndProps'


const allYears = ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007',
  '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']

const reducer =(state, action)=>{
    return ({
        allYears,
        //year: updateYear(state, action),
        years: updateYears(state, action),
        isFirstAnswered: updateIsFirstAnswered(state, action),
        firstSelectedValue: updateFirstSelectedValue(state, action),
        isSecondAnswered: updateIsSecondAnswered(state, action),
        showBonus: updateShowBonus(state, action),
        score: updateScore(state, action),
        questionNumber: updateQuestionNumber(state, action),
        user: updateUser(state, action),
        penalty: updatePenalty(state, action),
        activeKey: updateActiveKey(state, action),
        isGoalscorerOpenedFirstTime: updateIsGoalscorerOpenedFirstTime(state, action),
        gameEndProps: updateGameEndProps(state, action)
    })
}

export default reducer

export {allYears}