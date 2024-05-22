import { ChakraBaseProvider } from "@chakra-ui/react";
import { ErrorBoundaryFallback } from "./ErrorBoundaryFallback";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

const TestComponent = ({
  hasError,
  errorMsg,
}: {
  hasError: boolean;
  errorMsg: string;
}) => {
  if (hasError) {
    throw new Error(errorMsg);
  } else {
    return <>Carry on everything is fine</>;
  }
};

describe("ErrorBoundaryFallback", () => {
  it("should render the ErrorBoundaryFallback component with a custom error message", () => {
    const { getByText } = render(
      <ChakraBaseProvider>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <TestComponent
            hasError={true}
            errorMsg='Something went terribly wrong'
          />
        </ErrorBoundary>
      </ChakraBaseProvider>
    );

    expect(getByText(/Something went terribly wrong/)).toBeInTheDocument();
  });

  it("should render the TestComponent component with no errror", () => {
    const { getByText } = render(
      <ChakraBaseProvider>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <TestComponent
            hasError={false}
            errorMsg='Something went terribly wrong'
          />
        </ErrorBoundary>
      </ChakraBaseProvider>
    );

    expect(getByText(/Carry on everything is fine/)).toBeInTheDocument();
  });
});
