import { useAuth } from "../context/AuthContext.tsx";

export default function MainPage() {
    const { isAuthenticated, userRole, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>MainPage</h1>
            <p>Role: {userRole}</p>
            <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
        </>
    );
}