import { Box } from '../components/Box/Box'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { CompaniesContent } from '../components/CompaniesContent/CompaniesContent'
import { FooterContent } from '../components/FooterContent/FooterContent'
import { companies } from '../components/CompaniesContent/companies.data'

export function HomePage() {
  return (
    <Box>
      <HomeContent />
      <CompaniesContent companies={companies} speed={80} />
      <FooterContent />
    </Box>
  )
}