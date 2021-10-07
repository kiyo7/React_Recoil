import { useRecoilState } from 'recoil';
import { todoListFilterState } from './recoil';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      フィルター:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">全て</option>
        <option value="Show Completed">達成済</option>
        <option value="Show Uncompleted">未達成</option>
      </select>
    </>
  );
};
