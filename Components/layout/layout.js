import { Fragment } from "react";
import MainHeader from "./main-header";


export default function Layout(props){

    const {children} = props

    return (
        <Fragment>
            <MainHeader/>
            <main>
                {children}
            </main>

        </Fragment>
    )
}