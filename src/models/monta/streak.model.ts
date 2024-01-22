export interface IPalette {
  palette_id: number;
  name: string;
  grade: 'RARE' | 'EPIC' | 'LEGENDARY'; // (RARE, EPIC, LEGENDARY)
  light_color: string;
  normal_color: string;
  dark_color: string;
  darker_color: string;
}

export interface IStreak {
  study_streak_id: number;
  current_streak: number;
  longest_streak: number;
  palette: IPalette;
}
