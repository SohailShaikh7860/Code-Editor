import axios from "axios";
import { SUPPORTED_LANGUAGES } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, code) => {
  const response = await API.post("/execute", {
    language: language,
    version: SUPPORTED_LANGUAGES[language],
    files: [
      {
        content: code,
      },
    ],
  });

  return response.data;
};

