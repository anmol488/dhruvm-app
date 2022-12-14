import useAuth from "../../components/useAuth";

function student() {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default student;
