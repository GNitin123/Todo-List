import React, {Component} from 'react'

export class TodoItems extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    render() {

        return (
            <div className="todo-list-container">
                <input type="checkbox" className="todo-list-checkbox"/>
                <input
                    className="todo-input-list"
                    type="text"
                    value={this.props.item.isEditing
                    ? null
                    : this.props.item.text}
                    onChange={(event) => this.setState({value: event.target.value})}
                    autoComplete="off"/>
                <i
                    className="far fa-trash-alt delete-btn"
                    onClick={() => {
                    this
                        .props
                        .handleItemDelete(this.props.item.text, this.props.item.key);
                }}></i>
                <i
                    className={this.props.item.isEditing
                    ? "fas fa-save edit-btn"
                    : "fas fa-pen edit-btn"}
                    type="button"
                    onClick={() => this.props.handleItemEdit(this.state.value, this.props.item.key)}></i>
            </div>
        )
    }
}

export default TodoItems
