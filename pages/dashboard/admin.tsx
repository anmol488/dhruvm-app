import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import CreatePostModal from "../../components/CreateAnnouncementModal";
import useAuth from "../../hooks/useAuth";
import { db } from "../../lib/firebase";
import useAnnouncements from "../../hooks/useAnnouncements";
import { Announcement } from "../../components/announcements";
import AnnouncementItem from "../../components/AnnouncementItem";

function Admin() {
  const { logout } = useAuth();
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
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div />
        <button
          className="rounded bg-[#E50914] p-3 font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-10 text-3xl font-medium">
          Create an announcement for your students
        </h1>

        <CreatePostModal />

        <h1 className="mt-10 text-3xl font-medium">View announcements:</h1>

        <>
          {announcementStateValue.announcements.map((item) => (
            <AnnouncementItem announcement={item} />
          ))}
        </>
      </main>
    </div>
  );
}

export default Admin;
