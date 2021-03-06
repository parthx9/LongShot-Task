import { Tab, Tabs } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"
import DataContext from "../../utils/DataContent"
import Keywords from "./TabAreas/Keywords"
import Topics from "./TabAreas/Topics"

const KeywordsTab = () => {

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
                <Tab value={0} label="Top Keywords" />
                <Tab value={1} label="Similar Topics" />
            </Tabs>
            <div className='display-area'>
                {tabValue === 0?(
                    <Keywords />
                ):(
                    <Topics />
                )}
            </div>
        </div>
    )
}

export default KeywordsTab