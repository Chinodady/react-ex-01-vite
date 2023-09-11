import { useRouteError } from "react-router-dom";

function ErrorPage() {
    
    const error = useRouteError()
    console.log('el error es:', error)
    return (
        <>

        <div id="error-page">
            <h1>Oops!</h1>
            <p>Hubo un error en esta página</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        </>
    )

}
export default ErrorPage