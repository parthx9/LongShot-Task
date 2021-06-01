import { useEffect, useMemo, useState } from 'react'
import {digitalMarketingData} from '../assets/js/digitalMarketing'
import ContentArea from '../components/ContentArea/ContentArea'
import Header from '../components/Header/Header'
import DataContext from '../utils/DataContent'

const Main = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        setData(digitalMarketingData)
    },[])

    const dataValue = useMemo(() =>({data, setData}), [data])

    return(
        <>
            <Header />
            <DataContext.Provider value={dataValue}>
                <ContentArea />
            </DataContext.Provider>
        </>
    )
}

export default Main