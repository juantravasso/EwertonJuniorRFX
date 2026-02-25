import { Box } from '../components/Box/Box'
import { CompaniesContent } from '../components/CompaniesContent/CompaniesContent'
import { ContactContent } from '../components/ContactContent/ContactContent'
import { FooterContent } from '../components/FooterContent/FooterContent'

export function ContactPage() {
  return (
    <Box>
      <ContactContent/>
      <CompaniesContent/>
      <FooterContent/>
    </Box>
  )
}