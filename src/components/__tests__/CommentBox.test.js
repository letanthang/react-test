import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />)
})

it('show a textarea and a button', () => {

    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})

describe("textarea has", () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'hehe' } })
        wrapped.update()
    })
    it('has a textarea that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('hehe')
    })

    it('when form is submited, textarea get empty', () => {
        wrapped.find('textarea').simulate('submit')
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})


afterEach(() => {
    wrapped.unmount()
})