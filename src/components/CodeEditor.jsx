import React, { useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector'
import { codeSnippets } from '../constants'

const CodeEditor = () => {
   const editorRef = useRef();
    const [value,setValue] = useState('');
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
        <LanguageSelector  language={language} onSelect={onSelect} />
        <Editor
         height="90vh"
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
  )
}

export default CodeEditor
