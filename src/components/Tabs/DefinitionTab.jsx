import { Tab, Tabs } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"
import DataContext from "../../utils/DataContent"
import Definition from "./TabAreas/Definition"
import Keywords from "./TabAreas/Keywords"
import Topics from "./TabAreas/Topics"
import Trends from "./TabAreas/Trends"

const DefinitionTab = () => {
    const [tabValue, setTabValue] = useState(1)
    const {data, setData} = useContext(DataContext)

    useEffect(() => {
        console.log(tabValue)
        console.log(data)
    }, [tabValue])

    return(
        <div className='tab keywords'>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={tabValue}
                onChange={(event, value) => setTabValue(value)}    
                aria-label="disabled tabs example"
            >
                <Tab value={0} label="Definition" />
                <Tab value={1} label="Search Trends" />
            </Tabs>
            <div className='display-area'>
                {tabValue === 0?(
                    <Definition />
                ):(
                    <Trends />
                )}
            </div>
        </div>
    )
}

export default DefinitionTab