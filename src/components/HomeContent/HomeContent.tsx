import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import Higgsfield from '../../assets/Higgsfield.svg'

export function HomeContent() {
    return (
        <Box className="w-full mt-18 mb-18 flex flex-col items-center px-20">
                  <Button 
                    href=" https://higgsfield.ai" 
                    className="w-full"
                  >
                    <Box className="flex items-center gap-3">              
                      <img src={Higgsfield} alt="Logo" className="w-10" />
                      <span>Higgsfield</span>
                    </Box>
                  </Button>
                </Box>
    )
}