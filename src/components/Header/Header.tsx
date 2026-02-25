import { colors } from "../../theme/theme";
import { Box } from "../Box/Box";
import { SocialMedia } from "../Button/SocialMediaButton";
import { Text } from "../Text/Text";

export function Header() {
    return(
    <Box className="pt-16 flex flex-col items-center gap-6">
        
        <Text preset="heading" semiBold>EWERTON JÚNIOR</Text>

        <SocialMedia/>

        <Text
          preset="paragraphSmall" bold
          className="tracking-widest text-center max-w-[280px] sm:max-w-full leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          INTELIGÊNCIA ARTIFICIAL · VFX · TECNOLOGIA · CINEMA
        </Text>
      </Box>
    )
}