import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {}
        }
    }
});

const theme = createSystem(defaultConfig, customConfig);

export default theme;