import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

import List, { JobInterface } from "../List/List";

const MSWIntercept = ({ url }: { url: string }) => {
  const [projects, setData] = useState<JobInterface[]>();
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Data format incorrect");
        } else {
          setData(data);
        }
      } catch (error) {
        showBoundary(error);
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {projects && Array.isArray(projects) && (
        <div data-testid='list'>
          <List data={projects} listName='Projects' />
        </div>
      )}
    </>
  );
};

export default MSWIntercept;
