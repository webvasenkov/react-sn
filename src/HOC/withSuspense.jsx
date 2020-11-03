import React, {Suspense} from 'react'
import Preloader from "../commponents/Common/Preloader/Preloader";

export const withSuspense = (WrapperComponent) => (props) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <WrapperComponent {...props}/>
        </Suspense>
    )
}

