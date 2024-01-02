import { atom } from 'jotai';
import UserInfo from '@/types/user';

const userInfoAtom = atom<Optional<UserInfo>>(null);

const isLoginAtom = atom(get => !!get(userInfoAtom));

export { userInfoAtom, isLoginAtom };
