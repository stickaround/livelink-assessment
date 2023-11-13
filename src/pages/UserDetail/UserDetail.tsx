import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserDetail } from "services/apis";
import { type User } from "types";
import UserCard from "components/UserCard";
import Loading from "components/Loading";
import NotFound from "components/NotFound";

const UserDetail = () => {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (userId !== undefined) setUser(await getUserDetail(+userId));
      setIsLoading(false);
    })();
  }, [userId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-end mb-5">
            <Link to="/users" className="text-blue-600 hover:underline">
              Go back to list
            </Link>
          </div>
          {user ? <UserCard user={user} forDetailPage /> : <NotFound />}
        </>
      )}
    </>
  );
};

export default UserDetail;
