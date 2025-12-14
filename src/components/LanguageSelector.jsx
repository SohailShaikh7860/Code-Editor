import { Box, Text, Menu, Button } from "@chakra-ui/react"
import { SUPPORTED_LANGUAGES } from "../constants"

const languageSection = Object.entries(SUPPORTED_LANGUAGES)

const languageSelector = ({language, onSelect}) => {
  return (
    <Box>
         <Text mb={2} fontSize="lg">Language:</Text>

         <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" mb={4} color="white" borderColor="gray.700" _hover={{ bg: "gray.700" }}>
          {language}
        </Button>
      </Menu.Trigger>
      <Menu.Content bg="gray.900" borderColor="gray.700" color="white">
          {
            languageSection.map(([lang, version])=>(
              <Menu.Item 
                key={lang} 
                value={lang}
                onClick={()=> onSelect(lang)}
                color="white"
                _hover={{ bg: "gray.700", color: "white" }}
              >
                {lang} &nbsp;
                <Text as="span" color="gray.400" fontSize="sm">
                  ({version})
                </Text>
              </Menu.Item>
            ))
          }
      </Menu.Content>
    </Menu.Root>
    </Box>
  )
}

export default languageSelector
