import React from 'react';
import { useParams } from 'react-router';

const CompanyDetails = () => {

    const {id} = useParams()
    return (
        <div>
            <h1>company details {id}</h1>
        </div>
    );
};

export default CompanyDetails;