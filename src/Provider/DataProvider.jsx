import React, { createContext, useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext(null)

const DataProvider = ({children}) => {
    const [data, setData] = useState([])


    const dataInfo={
        data,
        setData
    }
    // console.log(data);
    return (
        <DataContext.Provider value={dataInfo}>
            {
                children
            }
        </DataContext.Provider>
    );
};

export default DataProvider;