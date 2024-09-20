import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import {useRef, useCallback, useReducer} from 'react';

const createBulk = () => {
  const todoArray = [];

  for(let i=1;i<=2500;i++){
    const todo = {
      id: i,
      text: `할 일 ${i}`,
      checked: false
    }

    todoArray.push(todo);
  }

  return todoArray;
}

const reducer = (state, action)  => {
  switch(action.type) {
    case 'INSERT':
      return state.concat(action.todo);
    case 'REMOVE':
      return state.filter(todo=>todo.id!==action.id);
    case 'TOGGLE':
      return state.map(todo=>
        todo.id === action.id
        ? {...todo, checked: !todo.checked}
        : todo
      )
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, undefined, createBulk);

  const todoId = useRef(2501);

  // 할 일을 추가하는 메소드
  const addTodo = useCallback((text) => {
    const newTodo = {
      id: todoId.current,
      text: text,
      checked: false,
    }

    // 최적화 3: useReducer를 이용한 최적화
    dispatch({type: 'INSERT', todo: newTodo});

    todoId.current += 1;
  }, [todos]);

  // 최적화2: setter 메소드의 매개변수로 화살표함수 전달.
  const removeTodo = useCallback((id) => {
    dispatch({type: 'REMOVE', id});
  }, [todos]);

  // 최적화2: setter 메소드의 매개변수로 화살표함수 전달.
  const changeChecked = useCallback((id) => {
    dispatch({type: 'TOGGLE', id});
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} changeChecked={changeChecked}/>
    </TodoTemplate>
  );
}

export default App;
