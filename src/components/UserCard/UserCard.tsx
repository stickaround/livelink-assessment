import React from "react";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import { type User } from "types";

interface UserCardProps {
  user: User;
  forDetailPage?: boolean;
}

const UserCard = ({ user, forDetailPage = false }: UserCardProps) => (
  <Card className="border-[1px] border-black shadow-sm mb-5">
    <CardBody>
      <div className="flex gap-3">
        <Avatar
          size="sm"
          variant="circular"
          alt={user.name}
          src={user.avatar_url}
        />
        <div>
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="paragraph">{user.title}</Typography>
          {forDetailPage && (
            <Typography className="mt-5">{user.description}</Typography>
          )}
        </div>
      </div>
    </CardBody>
  </Card>
);

export default UserCard;
