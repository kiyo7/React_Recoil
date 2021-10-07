//recoil
import { atom, selector } from 'recoil';

//データストアのこと
//グローバルなstate
export const textState = atom({
  key: 'textState',
  default: '',
});

// Atomsのstateを加工した値を変えす関数
export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
