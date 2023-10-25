import React from "react";

function ProfileText({children}:React.HTMLAttributes<HTMLDivElement>) {
  return <h2 className="text-lg">{children}:</h2>;
}

export default ProfileText;
