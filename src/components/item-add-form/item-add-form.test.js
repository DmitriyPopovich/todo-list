import { render, screen} from '@testing-library/react';
import {renderWithRedux} from '../../tests/helpers/renderWithRedux'
import ItemAddForm from './item-add-form'

describe('Component ItemAddForm', ()=>{
    test('ItemAddForm exist on page', () => {
        render(renderWithRedux(<ItemAddForm/>, {}))
        const main_div = screen.queryByTestId('main-div-addform')
        expect(main_div).toBeDefined()
    });
})