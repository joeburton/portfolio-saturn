import { useErrorBoundary } from "react-error-boundary";

export const ErrorBoundaryFallback = ({ error }: { error: Error }) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      {error.message && (
        <pre style={{ color: "red", marginTop: "10px" }}>{error.message}</pre>
      )}
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
};
