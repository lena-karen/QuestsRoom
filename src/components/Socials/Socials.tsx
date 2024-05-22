import Link from "next/link";
import React from "react";
import { Icon } from "../Icon/Icon";

export const Socials = () => {
  return (
    <div className="sticky bottom-8 ml-8 flex gap-3">
      <Link href="/">
        <Icon name="icons/social" width={20} height={20} />
      </Link>

      <Link href="/">
        <Icon name="icons/twitter" width={20} height={20} />
      </Link>

      <Link href="/">
        <Icon name="icons/youtube" width={20} height={20} />
      </Link>
    </div>
  );
};
