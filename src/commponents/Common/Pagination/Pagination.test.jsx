import Pagination from "./Pagination";
import {create} from 'react-test-renderer';

describe(('Pagination component'), () => {
    test((`after create component left arrow shouldn't be displayed`), () => {
        const component = create(<Pagination/>)
        const root = component.root
        const arrowLeft = root.findByType('button').props.className === 'paginationBtn paginationBtnLeft'
        expect(arrowLeft).toBeFalsy()
    })
})