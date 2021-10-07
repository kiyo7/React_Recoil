//recoil
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './recoil';

//components
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => {
        return <TodoItem key={todoItem.id} item={todoItem} />;
      })}
    </>
  );
};
