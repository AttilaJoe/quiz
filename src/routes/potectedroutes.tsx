import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
