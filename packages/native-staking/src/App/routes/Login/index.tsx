import { Login as LoginDesign } from "@cosmicdapp/design";
import { Avatar } from "antd";
import React from "react";
import { config } from "../../../config";
import { pathValidators } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";
import { CenterBox } from "./style";

export function Login(): JSX.Element {
  return (
    <>
      <LoginDesign
        pathAfterLogin={pathValidators}
        appName="Juno Staking"
        appLogo={cosmWasmLogo}
        config={config}
      />
      <CenterBox>
        <Avatar src="https://avatars.githubusercontent.com/u/71741453?s=200&v=4" /> by Disperze
      </CenterBox>
    </>
  );
}
