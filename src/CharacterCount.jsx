//recoil
import { useRecoilValue } from 'recoil';

import { charCountState } from './recoil';

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};
