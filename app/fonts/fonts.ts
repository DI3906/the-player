import localFont from "next/font/local"

export const myFonts = localFont({
    src:[
        {
            path: '../../public/font/ManuskriptGothisch.ttf',
            weight: 'normal',
        }
    ],
    variable: '--gothic-font',
    display: 'swap',
})