import { colors } from "../../theme/theme";
import { Text } from "../Text/Text";

export function FooterContent() {
  return (
    <Text 
        className="mt-auto py-10 flex flex-col items-center" 
        preset="paragraphSmall" 
        bold 
        style={{color:colors.textSecondary,background:colors.backgroundSecondary}}>
            ewertonjuniorrfx.com
    </Text>
  );
}