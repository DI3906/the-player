import localFont from "next/font/local"

export const gothicFont = localFont({
    src:[
        {
            path: '../../public/font/ManuskriptGothisch.ttf',
            weight: 'normal',
        }
    ],
    variable: '--gothic-font',
    display: 'swap',
})