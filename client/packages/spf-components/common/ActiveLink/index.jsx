import React, { memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, href, ...restProps }) => {
  const { asPath } = useRouter();
  const active = asPath === href;
  return (
    <Link {...restProps} href={href}>
      <a>
        {children({ active })}
      </a>
    </Link>
  );
};

export default memo(ActiveLink);
