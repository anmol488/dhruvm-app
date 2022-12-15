import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export type Announcement = {
  title: string;
  description: string;
  createdAt: Timestamp;
};

interface AnnouncementState {
  announcements: Announcement[];
}

const defaultAnnouncementState: AnnouncementState = {
  announcements: [],
};

export const announcementState = atom<AnnouncementState>({
  key: "announcementState",
  default: defaultAnnouncementState,
});
