import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  user,
}: {
  user: { id: string; name: string } | null;
}) => {
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
