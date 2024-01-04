import { FeedCard } from '@/components/card/FeedCard';
import Feed from '@/models/feed.model';

interface Props {
  feeds: Feed[];
}

export const FeedList = ({ feeds }: Props) => {
  return (
    <div className="flex flex-col space-y-5">
      {feeds.map((feed) => {
        return <FeedCard key={feed.id} feed={feed} />;
      })}

      <div className="py-14 text-center font-semibold text-primary text-sm">
        😢 더이상 피드가 존재하지 않습니다.
      </div>
    </div>
  );
};
