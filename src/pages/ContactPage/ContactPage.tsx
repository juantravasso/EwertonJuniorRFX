import { Box } from "../../components/Box/Box";
import { CompaniesContent } from "../../components/CompaniesContent/CompaniesContent";
import { FooterContent } from "../../components/FooterContent/FooterContent";
import { ContactContent } from "./Components/ContactContent/ContactContent";


export function ContactPage() {
  return (
    <Box>
      <ContactContent/>
      <CompaniesContent/>
      <FooterContent/>
    </Box>
  )
}