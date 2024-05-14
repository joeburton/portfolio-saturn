import { render } from "@testing-library/react";
import { ErrorBoundary } from "react-error-boundary";

import MSWIntercept from "./MSWIntercept";

describe("MSWIntercept", () => {
  it("should render a list of data", async () => {
    const { getByText, findByTestId } = render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <MSWIntercept url='https://portfolio-saturn-api.vercel.app/pirates-data' />
      </ErrorBoundary>
    );
    await findByTestId("234234");
    expect(getByText(/Captain Hook/)).toBeInTheDocument();
  });
});
