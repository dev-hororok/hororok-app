import Feed from '@/models/feed.model';
import { CreateFeed } from '@/page-sections/new-feeds/CreateFeed';
import { FeedList } from '@/page-sections/new-feeds/FeedList';
import { FriendSuggestion } from '@/page-sections/new-feeds/FriendSuggestion';
import { MyProfileCard } from '@/page-sections/new-feeds/MyProfileCard';

const dummyFeedList: Feed[] = [
  {
    id: '124oi4124',
    title: '더미 피드',
    contents: 'contents',
    thumbnail:
      'https://images.unsplash.com/photo-1704310546522-59f10c7ec294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
    created_at: new Date(),
    user: {
      id: '213124',
      email: 'test@test.com',
      name: 'ggg',
      description: '없음',
    },
    comments_cnt: 0,
    likes_cnt: 0,
  },
  {
    id: '12sf412424',
    title: '더미 피드 222',
    contents: 'contents',
    thumbnail:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D',
    created_at: new Date(),
    user: {
      id: '213124',
      email: 'test@test.com',
      name: 'ggg',
      description: '없음',
    },
    comments_cnt: 0,
    likes_cnt: 0,
  },
];

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col">
      <div className="flex gap-5">
        <div className="w-[380px] space-y-5 shrink-0">
          <MyProfileCard />
          <FriendSuggestion />
        </div>
        <div className="w-full space-y-5">
          <CreateFeed />
          <FeedList feeds={dummyFeedList} />
        </div>
        <div className="w-[380px] shrink-0 bg-foreground/10">g</div>
      </div>
    </main>
  );
}
