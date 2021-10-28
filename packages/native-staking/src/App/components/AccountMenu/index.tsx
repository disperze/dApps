import { useSdk, printableBalance } from "@cosmicdapp/logic";
import { Badge, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React, { useState } from "react";
import avatarIcon from "./assets/avatar.svg";
import copyIcon from "./assets/copy.svg";
import closeMenuButton from "./assets/cross.svg";
import openMenuButton from "./assets/hamburger.svg";
import {
  AddressCopy,
  AddressCopyBox,
  AddressText,
  AvatarName,
  CloseAccountStack,
  CloseMenuButton,
  LinksStack,
  LinkText,
  MenuCenter,
  MenuStack,
  NameText,
  OpenMenuButton,
} from "./style";
import { pathValidators, pathAllRewards } from "../../paths";
import { useHistory } from "react-router-dom";
const { Text } = Typography;

export interface AccountMenuProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly name?: string;
}

export function AccountMenu({ name, ...props }: AccountMenuProps): JSX.Element {
  const { address, balance, config } = useSdk();
  const history = useHistory();

  function goToValidators() {
    history.push(pathValidators);
  }

  function goToMyRewards() {
    history.push(pathAllRewards);
  }

  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const accountName = name ? `${name}'s` : "Your";
  const isMainnet = (chain?: string) => chain === "juno-1";

  return (
    <>
      <Badge
        count={isMainnet(config.chainId) ? "mainnet": config.chainId}
        style={{ backgroundColor: 'var(--color-primary)', marginTop: "8px" }}
      />
      <OpenMenuButton src={openMenuButton} alt="Open account menu" onClick={openMenu} {...props} />
      {open && (
        <MenuCenter {...props}>
          <MenuStack>
            <CloseAccountStack>
              <CloseMenuButton src={closeMenuButton} alt="Close account menu" onClick={closeMenu} />
              <AvatarName>
                <img src={avatarIcon} alt="Avatar" />
                <NameText>{accountName} account</NameText>
              </AvatarName>
              <Text style={{color: "white"}}>({printableBalance(balance)})</Text>
              <AddressCopyBox>
                <AddressText>{address}</AddressText>
                <AddressCopy
                  src={copyIcon}
                  alt="Copy address icon"
                  onClick={() => {
                    copyToClipboard(address);
                  }}
                />
              </AddressCopyBox>
            </CloseAccountStack>
            {
            <LinksStack>
              <div onClick={goToMyRewards}>
                <LinkText>My Stake</LinkText>
              </div>
              <div onClick={goToValidators}>
                <LinkText>Validators</LinkText>
              </div>
            </LinksStack>
            }
          </MenuStack>
        </MenuCenter>
      )}
    </>
  );
}
