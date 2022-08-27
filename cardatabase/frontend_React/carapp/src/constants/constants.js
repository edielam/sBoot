import { createTheme } from "@mui/material";

export const SERVER_URL='http://localhost:8080/';
export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
        main: '#3E3B70',
        darker: '#053e85',
        },
        neutral: {
        main: '#2E3B55',
        contrastText: '#fff',
        },
    },
});
