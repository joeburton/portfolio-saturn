import { useState } from "react";
import classes from "./List.module.css";
import { generateUniqueId } from "../../utils";

export interface PiratesInterface {
  id: string;
  email: string;
  name: string;
}

const ListItem = ({
  id,
  name,
  email,
}: {
  id: string;
  name: string;
  email: string;
}) => {
  const [showId, setShowId] = useState(false);

  const displayId = () => {
    setShowId(!showId);
  };

  return (
    <li data-testid={id} onClick={displayId}>
      {name} {showId && ` - ${email}`}
    </li>
  );
};

const List = ({
  data,
  listName,
}: {
  data: PiratesInterface[];
  listName: string;
}) => {
  return (
    <div className={classes.list}>
      <h2>{listName}</h2>
      <ul data-testid='select-list'>
        {data && (
          <>
            {data.map((pirate) => {
              return (
                <ListItem
                  id={pirate.id}
                  name={pirate.name}
                  email={pirate.email}
                  key={generateUniqueId()}
                />
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default List;
