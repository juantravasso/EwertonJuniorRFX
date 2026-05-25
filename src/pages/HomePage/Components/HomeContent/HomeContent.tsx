import { Box } from "../../../../components/Box/Box";
import { Button } from "../Button/Button";
import Invideo from "../../../../assets/invideo.png";

export function HomeContent() {
    return (
        <Box className="w-full mt-18 mb-18 flex flex-col items-center px-10">
                  <Button 
                    href="https://invideo.io/i/ewertonjuniorrfx/" 
                    className="w-full"
                  >
                    <Box className="flex items-center gap-3">              
                      <img src={Invideo} alt="Logo" className="w-10 dark:drop-shadow-[0_0_2px_white]" />
                      <span>Invideo</span>
                    </Box>
                  </Button>
                </Box>
    )
}