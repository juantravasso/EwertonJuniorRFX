import { motion } from 'framer-motion'
import { Text } from '../Text/Text'
import { colors } from '../../theme/theme'

interface Company {
    name: string
    logo: string
    url: string
}

interface CompaniesContentProps {
    companies: Company[]
    speed?: number
}

export function CompaniesContent({
    companies,
    speed = 80,
}: CompaniesContentProps) {
    return (
        <div className="relative w-full overflow-hidden" style={{background:colors.backgroundSecondary}}>
            <Text 
                className="mt-auto py-10 flex flex-col items-center" 
                preset="paragraphSmall" 
                bold 
                style={{color:colors.textSecondary}}>
                CAMPAIGNS WITH
            </Text>
        <motion.div
            className="flex items-center gap-18 w-max"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
                ease: 'linear',
                duration: speed,
                repeat: Infinity,
            }}
        >
        {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
        <a
            key={`${company.name}-${index}`}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center opacity-70 hover:opacity-100 transition-opacity"
        >
            <img
                src={company.logo}
                alt={company.name}
                className="h-20 w-auto grayscale hover:grayscale-0 transition-all"
            />
        </a>
            ))}
        </motion.div>
    </div>
    )
}