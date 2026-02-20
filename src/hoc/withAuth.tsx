import { Navigate } from "react-router-dom";
import { useAuthState } from "../providers/authProvider";

interface WithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (
  WrappedComponent: React.ComponentType,
  { allowedRoles = [] }: WithAuthProps = {}
) => {
  return (props: any) => {
    const { isAuthenticated, user } = useAuthState();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (
      allowedRoles.length > 0 &&
      !allowedRoles.includes(user?.role || "")
    ) {
      return <Navigate to="/user/dashboard" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;