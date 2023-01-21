import Provider from "./provider";
import './styles/global.css'

const DefaultLayout = ({ 
    children 
}: { 
    children: React.ReactNode 
}) => {
    return <html lang="en">
        <body id='__next'>
            <Provider>
                {children}
            </Provider>
        </body>
    </html>
}

export default DefaultLayout;