import * as React from 'react';
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';

Categories.propTypes = {
    status: PropTypes.string,
}

function Categories({ status }){
    return (
        <>
            <Button>{status}</Button>
        </>
    )
}

export default Categories;