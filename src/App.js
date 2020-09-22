import React from "react";
import "./styles.css";

const usersSet = [
  {
    id: "123-s2-546",
    name: "John Jacobs",
    items: ["bucket", "bottle"],
    address: "1st Cross, 9th Main, abc Apartment",
    pincode: "5xx012"
  },
  {
    id: "123-s3-146",
    name: "David Mire",
    items: ["Bedroom Set"],
    address: "2nd Cross, BTI Apartment",
    pincode: "4xx012"
  },
  {
    id: "223-a1-234",
    name: "Soloman Marshall",
    items: ["bottle"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  },
  {
    id: "121-s2-111",
    name: "Ricky Beno",
    items: ["Mobile Set"],
    address: "Sunshine City",
    pincode: "5xx072"
  },
  {
    id: "123-p2-246",
    name: "Sikander Singh",
    items: ["Air Conditioner"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  },
  {
    id: "b23-s2-321",
    name: "Ross Wheeler",
    items: ["Mobile"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012"
  },
  {
    id: "113-n2-563",
    name: "Ben Bish",
    items: ["Kitchen Set", "Chair"],
    address: "Sunshine City",
    pincode: "5xx072"
  },
  {
    id: "323-s2-112",
    name: "John Michael",
    items: ["Refrigerator"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012"
  },
  {
    id: "abc-34-122",
    name: "Jason Jordan",
    items: ["Mobile"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  },
  {
    id: "123-s2-546",
    name: "John Jacobs",
    items: ["bucket", "bottle"],
    address: "1st Cross, 9th Main, abc Apartment",
    pincode: "5xx012"
  },
  {
    id: "123-s3-146",
    name: "David Mire",
    items: ["Bedroom Set"],
    address: "2nd Cross, BTI Apartment",
    pincode: "4xx012"
  },
  {
    id: "223-a1-234",
    name: "Soloman Marshall",
    items: ["bottle"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  },
  {
    id: "121-s2-111",
    name: "Ricky Beno",
    items: ["Mobile Set"],
    address: "Sunshine City",
    pincode: "5xx072"
  },
  {
    id: "123-p2-246",
    name: "Sikander Singh",
    items: ["Air Conditioner"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  },
  {
    id: "b23-s2-321",
    name: "Ross Wheeler",
    items: ["Mobile"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012"
  },
  {
    id: "113-n2-563",
    name: "Ben Bish",
    items: ["Kitchen Set", "Chair"],
    address: "Sunshine City",
    pincode: "5xx072"
  },
  {
    id: "323-s2-112",
    name: "John Michael",
    items: ["Refrigerator"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012"
  },
  {
    id: "abc-34-122",
    name: "Jason Jordan",
    items: ["Mobile"],
    address: "Riverbed Apartment",
    pincode: "4xx032"
  }
];

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [keyHover, setKeyHover] = React.useState(0);
  const refs = [];

  const handleChane = (e) => {
    let term = e.target.value;
    let filteredUsers = [];

    if (term) {
      term = term.toLowerCase();

      setSearchTerm(term);

      usersSet.forEach((userObj) => {
        const idIndex = userObj.id.toLowerCase().indexOf(term);
        const nameIndex = userObj.name.toLowerCase().indexOf(term);
        const addressIndex = userObj.address.toLowerCase().indexOf(term);
        const pincodeIndex = userObj.pincode.toLowerCase().indexOf(term);

        if (
          idIndex > -1 ||
          nameIndex > -1 ||
          addressIndex > -1 ||
          pincodeIndex > -1
        ) {
          const user = { ...userObj };
          if (idIndex > -1) {
            user.idA = user.id.substring(0, idIndex);
            user.idB = user.id.substring(idIndex, idIndex + term.length);
            user.idC = user.id.substring(idIndex + term.length);
          }

          if (nameIndex > -1) {
            user.nameA = user.name.substring(0, nameIndex);
            user.nameB = user.name.substring(
              nameIndex,
              nameIndex + term.length
            );
            user.nameC = user.name.substring(nameIndex + term.length);
          }

          if (addressIndex > -1) {
            user.addressA = user.address.substring(0, addressIndex);
            user.addressB = user.address.substring(
              addressIndex,
              addressIndex + term.length
            );
            user.addressC = user.address.substring(addressIndex + term.length);
          }

          if (pincodeIndex > -1) {
            user.pincodeA = user.pincode.substring(0, pincodeIndex);
            user.pincodeB = user.pincode.substring(
              pincodeIndex,
              pincodeIndex + term.length
            );
            user.pincodeC = user.pincode.substring(pincodeIndex + term.length);
          }

          filteredUsers.push(user);
        }
      });
    } else {
      setSearchTerm("");
    }

    setUsers(filteredUsers);
  };

  const handleHover = (localRef) => {
    localRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 38) {
      if (keyHover === 0) {
        return;
      }

      setKeyHover(keyHover - 1);
    } else if (e.keyCode === 40) {
      if (keyHover - 1 === users.length) {
        return;
      }
      setKeyHover(keyHover + 1);
    }

    if (refs[keyHover]) {
      handleHover(refs[keyHover]);
    }
  };

  return (
    <div className="App">
      <h1>Search Users</h1>

      <div className="autocomplete" style={{ width: "300px" }}>
        <input
          id="myInput"
          type="text"
          name="users"
          placeholder="Search Users By Id, Name ..."
          onChange={handleChane}
          onKeyDown={handleOnKeyDown}
        />
        <div id="autocomplete-list" className="autocomplete-items">
          {searchTerm.length > 0 && users.length === 0 && (
            <div> No Results Found</div>
          )}
          {users.map((user, index) => {
            const ref = React.createRef();
            refs.push(ref);

            return (
              <div
                key={index}
                onMouseOver={() => handleHover(ref)}
                ref={ref}
                className={index === keyHover ? "highlight-active" : ""}
              >
                {user.idB ? (
                  <span>
                    {user.idA} <span className="highlight">{user.idB}</span>
                    {user.idC}
                  </span>
                ) : (
                  `${user.id}`
                )}
                <br />
                <i>
                  {user.nameB ? (
                    <span>
                      {user.nameA}{" "}
                      <span className="highlight">{user.nameB}</span>
                      {user.nameC}
                    </span>
                  ) : (
                    `${user.name}`
                  )}
                </i>
                <br />
                {user.addressB ? (
                  <span>
                    {user.addressA}{" "}
                    <span className="highlight">{user.addressB}</span>
                    {user.addressC}
                  </span>
                ) : (
                  `${user.address}`
                )}
                {user.pincodeB ? (
                  <span>
                    {user.pincodeA}{" "}
                    <span className="highlight">{user.pincodeB}</span>
                    {user.pincodeC}
                  </span>
                ) : (
                  `${user.pincode}`
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
