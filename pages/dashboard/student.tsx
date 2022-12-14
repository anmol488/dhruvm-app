import useAuth from "../../components/useAuth";

function student() {
  const { logout, loading } = useAuth();
  const subscription = false

  if (loading || subscription === null) return null

  // if (!subscription) return <div>Timings</div>

  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default student;
