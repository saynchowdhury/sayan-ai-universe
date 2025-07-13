import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ThreeJSErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Three.js Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-lg border border-border">
          <div className="text-center space-y-2">
            <div className="text-muted-foreground font-futuristic text-sm">
              3D Experience Unavailable
            </div>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="text-xs text-neon-cyan hover:text-neon-purple transition-colors font-futuristic"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ThreeJSErrorBoundary;