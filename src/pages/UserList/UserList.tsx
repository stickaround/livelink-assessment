import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { type User } from "types";
import { getUserList } from "services/apis";
import UserCard from "components/UserCard";
import Loading from "components/Loading";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setUsers(await getUserList());
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {users.map((user) => (
            <Link to={`${user.id}`} key={user.id}>
              <UserCard user={user} />
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default UserList;
