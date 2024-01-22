import { IEggInventory } from '@/models/monta/egg.model';
import { IStreak } from '@/models/monta/streak.model';
import { create } from 'zustand';

interface State {
  member: IMontaMember | null;
  egg_inventory: IEggInventory[];
  streak: IStreak | null;
}

interface Actions {}

const INITIAL_STATE: State = {
  member: null,
  egg_inventory: [],
  streak: null,
};

export const useMontaStore = create<State & Actions>((set, get) => ({
  member: INITIAL_STATE.member,
  egg_inventory: INITIAL_STATE.egg_inventory,
  streak: INITIAL_STATE.streak,
}));
