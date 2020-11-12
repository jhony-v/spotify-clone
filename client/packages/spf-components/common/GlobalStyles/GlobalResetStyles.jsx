import { css, Global, useTheme } from "@emotion/react";
import React from "react";

export default function GlobalResetStyles() {
    const {colors } = useTheme();
  return (
    <Global
      styles={css`
        * {
          font-family: Arial, Helvetica, sans-serif;
          box-sizing:border-box;
        }
        a {
          text-decoration:none;
        }
        button,
        input,
        textarea {
          outline: none;
          border-width: 0;
          background: none;
        }
        body {
            background-color:${colors.page};
            position:fixed;
            width:100%;
            height:100%;
            margin:0;
            padding:0;
            display:flex;
            #__next {
              width:100%;
            }
        }
      `}
    />
  );
}
