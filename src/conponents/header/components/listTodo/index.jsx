import React from "react";
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup';

const ListTodos = (props) => {
    const todos = props.todoList;
    return (
        <ListGroup>
            {
                todos.map((todo, index)=>{
                    return (
                        <ListGroup.Item key={index}>{todo.title}</ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}

ListTodos.propTypes = {
    todoList: PropTypes.array,
};

ListTodos.defaultProps = {
    todoList: [],
};

export default ListTodos;