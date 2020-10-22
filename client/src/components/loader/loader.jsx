import React from 'react';

import {LoaderBLock} from './loaderStyle'

export const Loader = () => {
    return (
        <LoaderBLock className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></LoaderBLock>
    )
}