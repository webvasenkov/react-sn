import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus"; // ES6

describe('ProfileStatus component', () =>{
    test('Status from props should be in the local state', () =>{
        const component = create(<ProfileStatus status='Testing'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Testing')
    })
    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus/>)
        const instance = component.root
        const span = instance.findByType('span')
        expect(span.children.length).toBe(1)
    })
    test(`after creation <input> shouldn't displayed`, () => {
        const component = create(<ProfileStatus/>)
        const instance = component.root
        expect(() => {
            const input = instance.findByType('input')
        }).toThrow()
    })
    test('after creation <span> should be contains correct status', ()=>{
        const component = create(<ProfileStatus status="Testing"/>)
        const instance = component.root
        const span = instance.findByType('span')
        expect(span.children).toEqual(["Testing"])
    })
    test(`<input> should be displayed in editMode instead of <span>`, () => {
        const component = create(<ProfileStatus/>)
        const instance = component.root
        const span = instance.findByType('span')
        span.props.onClick()
        const input = instance.findByType('input')
        expect(input).toBeTruthy()
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus updateUserStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.onCloseEditChange()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})