import React from 'react'
import { Box } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'

const CodeEditor = () => {
  return (
    <Box>
        <Editor
         height="90vh"
         defaultLanguage="javascript"
         defaultValue="// Write your code here"
        />
    </Box>
  )
}

export default CodeEditor
