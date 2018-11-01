import React, { Component } from 'react'

class CommentBox extends Component {
    constructor() {
        
        super()
        this.state = { comment : '' }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ comment: '' })
    }
    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea 
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit comment</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default CommentBox;