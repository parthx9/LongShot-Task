import { useEffect, useMemo, useState } from 'react'
import {digitalMarketingData} from '../assets/js/digitalMarketing'
import { facebookCampaignData } from '../assets/js/facebookCampaign'
import { Tesla } from '../assets/js/tesla'
import { seoVsPpc } from '../assets/js/seo'
import ContentArea from '../components/ContentArea/ContentArea'
import Header from '../components/Header/Header'
import DataContext from '../utils/DataContent'

const Main = () => {

    const [collected, setCollected] = useState([])
    const [data, setData] = useState(null)
    const [searchTerm, setSearchTerm] = useState(null)

    useEffect(() => {
        if(searchTerm === 'Facebook Campaign' || searchTerm === 'Facebook campaign' || searchTerm === 'facebook campaign'){
            setData(facebookCampaignData)
        }
        else if(searchTerm === 'Digital Marketing' || searchTerm === 'Digital marketing' || searchTerm === 'digital marketing'){
            setData(digitalMarketingData)
        }
        else if(searchTerm === 'Tesla' || searchTerm === 'tesla'){
            setData(Tesla)
        }
        else if(searchTerm === 'seo vs ppc' || searchTerm === 'Seo vs Ppc' || searchTerm === 'Seo vs ppc'){
            setData(seoVsPpc)
        }
        else{
            setData(null)
        }
    },[searchTerm])

    const dataValue = useMemo(() =>({data, setData, collected, setCollected, searchTerm, setSearchTerm}), [data, setData, collected, setCollected, searchTerm, setSearchTerm])

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