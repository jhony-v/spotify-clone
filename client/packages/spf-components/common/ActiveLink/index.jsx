import React, { memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, href, ...restProps }) => {
  const { asPath } = useRouter();
  const active = asPath === href;
  return (
    <Link {...restProps} href={href}>
      {children({ active })}
    </Link>
  );
};

export default memo(ActiveLink);
