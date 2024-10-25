import { Navigation } from "../router/Navigation";

export const  LazyLayout = ()=> {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <h1 
                style={{
                    display:'block',
                    height:'auto'
                }}
            >Lazylayout main page</h1>
            <Navigation/>
        </div>
    )
}


export default LazyLayout;