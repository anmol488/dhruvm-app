import { useRecoilState } from "recoil";
import { announcementState } from "../components/announcements";

const useAnnouncements = () => {
  const [announcementStateValue, setAnnouncementStateValue] =
    useRecoilState(announcementState);

  return { announcementStateValue, setAnnouncementStateValue };
};

export default useAnnouncements;
