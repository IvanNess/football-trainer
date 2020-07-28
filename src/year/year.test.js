import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Year } from './year'

import { allYears as years } from '../reducer'
import italy from '../data/italy'
import england from '../data/england'
import spain from '../data/spain'

const countryArr = [england, italy, spain]

const onGoalScorer = () => { }

for (const country of countryArr) {

    for (const stringYear of years) {

        it(`renders year ${stringYear}`, () => {
            const yearElement = render(<Year year={stringYear} countryFile={country} onGoalScorer={onGoalScorer} storeActiveKey={[]} />)
            const year = yearElement.getByTestId('year')
            expect(year).toBeInTheDocument()
        })
    }

}



