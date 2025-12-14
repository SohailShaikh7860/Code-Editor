import React, { useRef, useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector'
import { codeSnippets } from '../constants'
import CodeOutPut from './CodeOutPut'

const CodeEditor = () => {
   const editorRef = useRef();
    const [value,setValue] = useState(codeSnippets.javascript);
    const [language, setLanguage] = useState('javascript');

    const onMount = (editor)=>{
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language)=>{
        setLanguage(language);
        setValue(codeSnippets[language]);
    }
  return (
    <Box>
        <HStack spacing={4} alignItems="flex-start">
             <Box w='50%'>

        <LanguageSelector  language={language} onSelect={onSelect} />
        <Editor
         height="75vh"
         theme='vs-dark'
         language={language}
         defaultValue="// Write your code here"
         value={value}
         onChange={(value) => setValue(value)}
         onMount={
             onMount
            }
            />
            </Box>
            <CodeOutPut selectedLanguage={language} editorRef={editorRef}/>
            </HStack>
    </Box>
  )
}

export default CodeEditor
