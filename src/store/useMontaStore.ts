import { create } from 'zustand';

interface State {
  member: IMontaMember | null;
}

interface Actions {}

const INITIAL_STATE: State = {
  member: null,
};

export const useMontaStore = create<State & Actions>((set, get) => ({
  member: INITIAL_STATE.member,
}));
