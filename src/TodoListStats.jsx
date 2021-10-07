import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './recoil';

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>タスク: {totalNum}個</li>
      <br />
      <li>達成済みのタスク: {totalCompletedNum}個</li>
      <br />
      <li>未達成のタスク: {totalUncompletedNum}個</li>
      <br />
      <li>タスク達成率: {percentCompleted}%</li>
    </ul>
  );
};
