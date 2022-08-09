import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './styles.scss';
import todoApi from "../../api/todoApi";
import ListTodo from "./components/listTodo";
const Header = () => {
    const [todos, setTodos] = useState([]);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        todoApi.add({
            title: data.todos,
            status: true
        });
    };
    useEffect(()=>{
        const fetchTodoList = async () => {
            const todoList = await todoApi.getAll();
            setTodos(todoList);
        }
        fetchTodoList();
    })
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xxl={6} lg={6} md={7} sm={9}>
                    <Form>
                        <Row>
                            <Form.Label>What is your todos?</Form.Label>
                            <Col xs={9}>
                                <Form.Group className="mb-3" controlId="formBasiTodo">
                                    <Form.Control {...register("todos", { required: true, maxLength: 20 })} name="todos" type="text" placeholder="Enter todo" />
                                    <Form.Label>{errors.todos?.type === 'required' && "Todo is required"}</Form.Label>
                                    <Form.Text className="text-muted">
                                        We'll never share your todo with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col xs={3}>
                                <Button variant="primary" type="button" onClick={handleSubmit(onSubmit)}>
                                    Add
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <ListTodo todoList={todos}></ListTodo>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;