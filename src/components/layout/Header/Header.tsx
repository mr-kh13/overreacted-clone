import { appName } from "@/constants/appConfigs";
import { AppName } from "../AppName";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { HeaderWrapper } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <AppName>{appName}</AppName>
      <DarkModeSwitch />
    </HeaderWrapper>
  );
};
