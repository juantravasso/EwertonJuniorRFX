import { Box } from "../../components/Box/Box";
import { companies } from "../../components/CompaniesContent/companies.data";
import { CompaniesContent } from "../../components/CompaniesContent/CompaniesContent";
import { FooterContent } from "../../components/FooterContent/FooterContent";
import { HomeContent } from "./Components/HomeContent/HomeContent";


export function HomePage() {
  return (
    <Box>
      <HomeContent />
      <CompaniesContent companies={companies} speed={80} />
      <FooterContent />
    </Box>
  )
}