import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'code',
      status: 'new'
    }
  ];
  const location = useLocation();//location.search -> data URL param: ?key=value
  const [todoList, setTodoList] = useState(initTodoList);
  //const [filteredStatus, setFilteredStatus] = useState('all');
  const [filteredStatus, setFilteredStatus] = useState(() => {//sử dụng cb để render một lần duy nhất
    const params = queryString.parse(location.search);//queryString-> ?key=value ->{key: value}
    return params.status || 'all';//params.key-> value
  });
  const handleTodoClick = (todo, index) => {
    //clone current array to the new one
    //khi làm việc với state là object hoặc array thì phải clone nó ra một cái mới
    const newTodoList = [...todoList];
    //toggle state
    newTodoList[index] = {//cập nhập vào  index
      ...newTodoList[index],//với những giá trị hiện tại
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',//và giá trị mới
    }
    //update todo list
    setTodoList(newTodoList);
  }
  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  }
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  }
  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;