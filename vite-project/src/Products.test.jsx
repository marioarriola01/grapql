import { Products } from "./Products";
import {screen, render} from '@testing-library/react'
import {describe, it} from 'vitest'


describe('Product', () => {
    it('should render', () => {
        render(<Products products={[{name:"tomatoes"},{name:"carrots"}]}/>)
        screen.getByText('tomatoes')
        screen.getByText('carrots')
    })

})

