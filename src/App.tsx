import { Box } from "./components/Box/Box"
import { Button } from "./components/Button/Button"
import { Text } from "./components/Text/Text"
import { colors } from "./theme/theme"
import Higgsfield from './assets/Higgsfield.svg'
import RioGaleao from './assets/RioGaleao_logo.jpg'
import TheSend from './assets/theSend.jpg'
import hotel from './assets/hotel.jpeg'
import renner from './assets/renner.jpeg'
import stu from './assets/stu.jpeg'
import LuaA from './assets/LuaA.jpg'
import legancy from './assets/legancy.png'
import { Header } from "./components/Header/Header"
import { CompaniesContent } from "./components/CompaniesContent/CompaniesContent"

const companies = [
  {
    name: 'RioGaleao',
    logo: RioGaleao,
    url: 'https://www.riogaleao.com/passageiros',
  },
  {
    name: 'TheSend',
    logo: TheSend,
    url: 'https://thesend.org.br/',
  },
  {
    name: 'hotel',
    logo: hotel,
    url: 'https://www.laghettohoteis.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=pmax&utm_term=institucional&gad_source=1&gad_campaignid=18816771833&gbraid=0AAAAAC-U4VFetuMDx5PrmgCVqf2QLUlQ5&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3CP4DI3Z3Vyg5Ek7DtXZgxDOhapgPDQR5C1ubPViOj7X29lM-D_IxQaApKDEALw_wcB',
  },
  {
    name: 'renner',
    logo: renner,
    url: 'https://www.lojasrenner.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=google_rennerbr_conversao_venda_renner_geral_geral_inst&gad_source=1&gad_campaignid=175902105&gbraid=0AAAAADomBMkZJje4_UK8mtfYERtLG-cAg&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3B5rx0D67TgLRGyi2m8k4tXz6qUo0i6Bdj4BAgijA91C5Ga0ji7lJcaAiKVEALw_wcB',
  },
  {
    name: 'stu',
    logo: stu,
    url: 'https://stuskateboard.com/',
  },
  {
    name: 'LuaA',
    logo: LuaA,
    url: 'https://www.instagram.com/lua_andrad/?hl=pt',
  },
  {
    name: 'legancy',
    logo: legancy,
    url: 'https://legacykrew.com.br/',
  },
]

function App() {
  return (
    <Box>
        <Header/>

        <Box className="w-full mt-18 mb-18 flex flex-col items-center px-20">
          <Button 
            href=" https://higgsfield.ai" 
            className="w-full"
          >
            <div className="flex items-center gap-3">              
              <img src={Higgsfield} alt="Logo" className="w-10" />
              <span>Higgsfield</span>
            </div>
          </Button>
        </Box>
        
      

      <CompaniesContent companies={companies} speed={80} />

      
      <Text 
        className="mt-auto py-10 flex flex-col items-center" 
        preset="paragraphSmall" 
        bold 
        style={{color:colors.textSecondary,background:colors.backgroundSecondary}}>
          ewertonjuniorrfx.com
      </Text>
      

    </Box>
  )
}

export default App

