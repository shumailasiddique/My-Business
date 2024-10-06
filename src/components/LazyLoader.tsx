import { Suspense, Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorMessage?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  showFallback: boolean;
}

class LazyLoader extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, showFallback: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true, showFallback: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showFallback: true });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const { fallback, children, errorMessage } = this.props;
    const { hasError, showFallback } = this.state;

    if (hasError) {
      return errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : fallback ? (
        fallback
      ) : (
        <h2>Something went wrong. Please try again later.</h2>
      );
    }

    return (
      <Suspense fallback={showFallback ? <div>{fallback}</div> : null}>
        {children}
      </Suspense>
    );
  }
}

export default LazyLoader;
