import {digitalMarketingData} from '../assets/js/digitalMarketing'
import ContentArea from '../components/ContentArea/ContentArea'
import Header from '../components/Header/Header'

const Main = () => {

    console.log(digitalMarketingData.google_questions)

    return(
        <>
            <Header />
            <ContentArea />
        </>
    )
}

export default Main