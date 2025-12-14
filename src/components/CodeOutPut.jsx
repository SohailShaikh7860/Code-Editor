import { Box, Text, Button } from "@chakra-ui/react"
import { executeCode } from "../api";
import { useState } from "react";

const CodeOutPut = ({ selectedLanguage, editorRef }) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
         const sourceCode = editorRef.current.getValue();
         if(!sourceCode) return;

         try {
            setIsLoading(true);
            setIsError(false);
            const result = await executeCode(selectedLanguage, sourceCode);
            setOutput(result.run.output);
            setIsLoading(false);
         } catch (error) {
            setIsError(true);
            setIsLoading(false);
            setOutput(error.message || "Error occurred");
            console.error(error);
         }finally{
            setIsLoading(false);
         }
    }
  return (
    <Box w='50%'>
        <Text mb={2} fontSize='lg'>
            Output
        </Text>

        <Button
          variant='outline'
          colorScheme="green"
          mb={4}
          color={"white"}
          onClick={runCode}
          isLoading={isLoading}
        >
            Run Code
        </Button>

        <Box
         height='75vh'
         p={2}
         border='1px solid'
         borderRadius={4}
         borderColor={isError ? 'red.500' : 'gray.500'}
         bg='gray.900'
         color={isError ? 'red.400' : 'white'}
         overflowY='auto'
         whiteSpace='pre-wrap'
         fontFamily='monospace'
        >
            {output ? output : 'Click "Run Code" to see the output here...'}
        </Box>
    </Box>
  )
}

export default CodeOutPut
