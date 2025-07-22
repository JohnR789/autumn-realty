import React from "react";

type State = { hasError: boolean };

class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log errors here (e.g. Sentry, LogRocket)
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] py-16">
          <h1 className="text-4xl font-bold text-autumn-dark mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg text-autumn mb-2">Please refresh or contact John for assistance.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
