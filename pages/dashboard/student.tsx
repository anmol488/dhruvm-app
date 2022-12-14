import Timings from "../../components/Timings";
import useAuth from "../../components/useAuth";

function student() {
  const { logout, loading } = useAuth();
  const subscription = false;

  if (loading || subscription === null) return null;

  if (!subscription) return <Timings />;

  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default student;
