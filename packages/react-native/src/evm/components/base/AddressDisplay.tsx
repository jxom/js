import { Theme } from "../../styles/theme";
import { shortenWalletAddress } from "../../utils/addresses";
import Text from "./Text";

type AddressProps = {
  address: string;
  variant?: keyof Theme["textVariants"];
  extraShort?: boolean;
} & (typeof Text)["arguments"];

export const AddressDisplay = ({
  address,
  variant = "bodyLarge",
  extraShort,
  ...props
}: AddressProps) => {
  return (
    <Text variant={variant} {...props}>
      {shortenWalletAddress(address, extraShort)}
    </Text>
  );
};
