import { allYears } from './index'
import shuffle from 'shuffle-array'

const deleteYear = (years, year) => {
    console.log(years, year)
    const yearIdx = years.findIndex(searchedYear => searchedYear === year)
    const newYears = [...years.slice(0, yearIdx), ...years.slice(yearIdx + 1)]
    return newYears
}

const updateYears = (state, { type, payload }) => {
    if (state === undefined) {
        const year = shuffle.pick(allYears)
        return ({
            year,
            left: deleteYear(allYears, year)
        })
    }
    let year
    switch (type) {
        case 'START_AGAIN':
            year = shuffle.pick(allYears)
            return ({
                year,
                left: deleteYear(allYears, year)
            })
        case 'NEXT_QUESTION':
            year = shuffle.pick(state.years.left)
            return ({
                year,
                left: deleteYear(state.years.left, year)
            })
        default:
            return state.years
    }
}

export default updateYears