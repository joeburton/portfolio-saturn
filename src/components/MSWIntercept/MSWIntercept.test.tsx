import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

import MSWIntercept from "./MSWIntercept";

describe("MSWIntercept", () => {
  it("should render a list of data", async () => {
    const { getByText, findByTestId } = render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <MSWIntercept url='http://joe-burton.com/api/source' />
      </ErrorBoundary>
    );

    await findByTestId("list");
    expect(getByText(/Software Enginner/)).toBeInTheDocument();
  });
});
