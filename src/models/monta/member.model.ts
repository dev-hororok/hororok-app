interface IMontaMember {
  member_id: string;
  nickname: string;
  email: string;
  image_url: string | null;
  role: 'USER' | 'ADMIN';
  active_record_id: number | null;
  point: number;
}
