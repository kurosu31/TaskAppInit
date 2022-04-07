import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from 'react-router-dom';

import { Router } from "./router/Router";
import theme from "./themes/theme"

const Index = () => {

    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Router />
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default Index;


