import { UserIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { Announcement } from "./announcements";

type AnnouncementItemProps = {
  announcement: Announcement;
};

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  return (
    <div className="justify-center flex items-center mt-8 md:justify-start">
      <div className="rounded-xl border p-5 shadow-md bg-white opacity-85">
        <div className="flex w-full items-center justify-between border-b pb-3 space-x-5">
          <div className="flex items-center space-x-3">
            <UserIcon className="h-8 w-8 text-black" />
            <div className="text-md font-semibold text-black">
              Dhruv Magodia
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-xs text-neutral-500">
                {moment(new Date(announcement.createdAt.seconds * 1000)).fromNow()}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold text-black">
            {announcement.title}
          </div>
          <div className="text-sm text-neutral-600">
            {announcement.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementItem;
