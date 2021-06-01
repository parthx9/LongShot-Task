import { Tab, Tabs } from "@material-ui/core"
import { useEffect, useState } from "react"
import Google from "./TabAreas/Google"
import Qoura from './TabAreas/Qoura'
import Reddit from "./TabAreas/Reddit"

const QuestionsTab = () => {

    const [tabValue, setTabValue] = useState(1)

    useEffect(() => {
        console.log(tabValue)
    }, [tabValue])

    return(
        <div className='questions tab'>
            <div className='title'>
                <h3>
                    Top Questions
                </h3>
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={tabValue}
                    onChange={(event, value) => setTabValue(value)}    
                    aria-label="disabled tabs example"
                >
                    <Tab value={0} icon={<i class="fab fa-quora"></i>} />
                    <Tab value={1} icon={<i className='fa fa-google'></i>} />
                    <Tab value={2} icon={<i className='fa fa-reddit'></i>} />
                </Tabs>
            </div>
            <div>
                {tabValue === 0?(
                    <Qoura />
                ):null}
                {tabValue === 1?(
                    <Google />
                ):null}
                {tabValue === 2?(
                    <Reddit />
                ):null}
            </div>
        </div>
    )
}

export default QuestionsTab