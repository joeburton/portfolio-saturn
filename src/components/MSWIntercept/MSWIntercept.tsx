import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

import List, { PiratesInterface } from "../List/List";

const MSWIntercept = ({ url }: { url: string }) => {
  const [pirates, setData] = useState<PiratesInterface[]>();
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data) {
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
      {pirates && Array.isArray(pirates) && (
        <div data-testid='list'>
          <List data={pirates} listName='Projects' />
        </div>
      )}
    </>
  );
};

export default MSWIntercept;
