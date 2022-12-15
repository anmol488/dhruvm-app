import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnnouncementItem from "../../../components/AnnouncementItem";
import { Announcement } from "../../../components/announcements";
import useAnnouncements from "../../../hooks/useAnnouncements";
import { db } from "../../../lib/firebase";

function Announcements() {
  const [loading, setLoading] = useState(false);
  const { announcementStateValue, setAnnouncementStateValue } =
    useAnnouncements();

  const getAnnouncements = async () => {
    setLoading(true);
    try {
      const announcementsQuery = query(
        collection(db, "announcements"),
        orderBy("createdAt", "desc")
      );
      const announcementDocs = await getDocs(announcementsQuery);
      const announcements = announcementDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnnouncementStateValue((prev) => ({
        ...prev,
        announcements: announcements as unknown as Announcement[],
      }));
    } catch (error: any) {
      console.log("getAnnouncements error", error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <div>
      <header>
        <div />
        <Link href="/dashboard/student">
          <button className="rounded bg-[#E50914] p-3 font-semibold">
            Back
          </button>
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-10 text-3xl font-medium">
          These are the active announcements
        </h1>
        <>
          {announcementStateValue.announcements.map((item) => (
            <AnnouncementItem announcement={item} />
          ))}
        </>
      </main>
    </div>
  );
}

export default Announcements;
