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
  MenuCenter,
  MenuStack,
  NameText,
  OpenMenuButton,
} from "./style";
const { Text } = Typography;

export interface AccountMenuProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly name?: string;
}

export function AccountMenu({ name, ...props }: AccountMenuProps): JSX.Element {
  const { address, balance } = useSdk();

  // NOTE Link functionality not clear, removing for now
  /* const history = useHistory();
   function goToHelp() {
    //TODO: set path to help
    history.push(pathValidator);
  }
  function goToLogout() {
    //TODO: set path to logout
    history.push(pathValidator);
  } */

  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const accountName = name ? `${name}'s` : "Your";

  return (
    <>
      <Badge
        count={"mainnet"}
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
              // NOTE Link functionality not clear, removing for now
              /* <LinksStack>
              <div onClick={goToHelp}>
                <LinkText>Help</LinkText>
              </div>
              <div onClick={goToLogout}>
                <LinkText>Logout</LinkText>
              </div>
            </LinksStack> */
            }
          </MenuStack>
        </MenuCenter>
      )}
    </>
  );
}
