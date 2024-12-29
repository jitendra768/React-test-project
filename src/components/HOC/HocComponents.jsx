// A Higher-Order Component (HOC) in React is a function that takes a component as an argument and returns
//  a new component with enhanced behavior or additional functionality.
//  HOCs are commonly used to reuse component logic, making them an essential pattern in React.
// In a project, we used an HOC to protect routes based on user roles. The HOC wrapped components and checked if the user had the right permissions.

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true;
    return isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Please log in</div>
    );
  };
};

// Usage
const Dashboard = () => <div>Welcome to your dashboard</div>;
const ProtectedDashboard = withAuth(Dashboard);
