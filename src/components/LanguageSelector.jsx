import { Box, Text, Menu, Button, Portal } from "@chakra-ui/react"
import { SUPPORTED_LANGUAGES } from "../constants"

const languageSection = Object.entries(SUPPORTED_LANGUAGES)

const languageSelector = ({language, onSelect}) => {
  return (
    <Box>
         <Text mb={2}>Language:</Text>

         <Menu.Root>
      <Menu.Trigger asChild color={"white"} _hover={{color: "black"}}>
        <Button variant="outline" size="sm">
          {language}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          {
            languageSection.map(([lang, version])=>(
              <Menu.Item key={lang} px={4} py={2} _hover={{bg: "gray.500", color: "white"}} color={"white"} bg={"black"} onClick={()=> onSelect(lang)}>
                {lang} - {version}
              </Menu.Item>
            ))
          }
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </Box>
  )
}

export default languageSelector
