import { dummyFeedList } from '@/data/mockData';
import { CreateFeed } from '@/page-sections/new-feeds/CreateFeed';
import { DevTeamInfo } from '@/page-sections/new-feeds/DevTeamInfo';
import { FeedList } from '@/page-sections/new-feeds/FeedList';
import { FriendSuggestion } from '@/page-sections/new-feeds/FriendSuggestion';
import { MyProfileCard } from '@/page-sections/new-feeds/MyProfileCard';
import { NoticeCard } from '@/page-sections/new-feeds/NoticeCard';

export default function SNSApp() {
  const mockFeedList = dummyFeedList;

  return (
    <main className="flex w-full min-h-screen flex-col">
      <div className="flex gap-5">
        <div className="w-[380px] space-y-5 shrink-0">
          <MyProfileCard />
          <FriendSuggestion />
        </div>
        <div className="w-full space-y-5">
          <CreateFeed />
          <FeedList feeds={mockFeedList} />
        </div>
        <div className="w-[380px] space-y-5 shrink-0">
          <NoticeCard />
          <DevTeamInfo />
        </div>
      </div>
    </main>
  );
}
