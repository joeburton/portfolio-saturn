import { useState } from "react";
import classes from "./List.module.css";
import { generateUniqueId } from "../../utils";

export interface JobInterface {
  class?: string;
  company?: string;
  description?: string;
  links?: null | string[];
  logo?: string;
  order?: number;
  role: string;
  skills?: string;
  _id: string;
}

const ListItem = ({ id, role }: { id: string; role: string }) => {
  const [showId, setShowId] = useState(false);

  const displayId = () => {
    setShowId(!showId);
  };

  return (
    <li data-testid={id} onClick={displayId}>
      {role} {showId && ` - ${id}`}
    </li>
  );
};

const List = ({
  data,
  listName,
}: {
  data: JobInterface[];
  listName: string;
}) => {
  return (
    <>
      <h2>{listName}</h2>
      <ul data-testid='select-list' className={classes.list}>
        {data && (
          <>
            {data.map((item) => {
              return (
                <ListItem
                  id={item._id}
                  role={item.role}
                  key={generateUniqueId()}
                />
              );
            })}
          </>
        )}
      </ul>
    </>
  );
};

export default List;
