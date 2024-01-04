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
    </div>
  );
};
