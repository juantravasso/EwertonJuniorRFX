import { Mail } from "lucide-react";
import { colors } from "../../theme/theme";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

export function ContactContent() {
    return(
        <Box className="mb-20 flex flex-col px-6 sm:px-20">

      <Box className="flex flex-col gap-12 mt-20">
        
        <Text
          preset="paragraphSmall"
          className="tracking-[0.2em]"
          style={{ color: colors.textSecondary }}
        >
          ENTRE EM CONTATO
        </Text>

        <Box className="flex flex-col leading-tight">
          <Text preset="paragraphLarge" >
            <span style={{ color: colors.textPrimary }}>
              VAMOS TRABALHAR
            </span>
            <br />
            <span style={{ color: colors.textSecondary }}>
              JUNTOS.
            </span>
          </Text>
        </Box>

        <Box className="flex flex-col gap-4 mt-16">
          
          <Text
            preset="paragraphSmall"
            className="tracking-[0.2em]"
            style={{ color: colors.textSecondary }}
          >
            EMAIL
          </Text>

          <a
            href="mailto:contato@ewertonjuniorrfx.com"
            className="flex items-center gap-4 group transition-all duration-300"
          >
            <Mail
              size={20}
              className="transition-colors duration-300"
              style={{ color: colors.textPrimary }}
            />

            <span
              className="transition-colors duration-300 group-hover:opacity-70"
              style={{ color: colors.textPrimary }}
            >
              contato@ewertonjuniorrfx.com
            </span>
          </a>
        </Box>
      </Box>
    </Box>
    )
}