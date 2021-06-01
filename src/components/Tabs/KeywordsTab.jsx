import { Tab, Tabs } from "@material-ui/core"
import { useEffect, useState } from "react"
import Keywords from "./TabAreas/Keywords"
import Topics from "./TabAreas/Topics"

const KeywordsTab = () => {

    const [tabValue, setTabValue] = useState(1)

    useEffect(() => {
        console.log(tabValue)
    }, [tabValue])

    return(
        <div className='tab'>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                value={tabValue}
                onChange={(event, value) => setTabValue(value)}    
                aria-label="disabled tabs example"
                centered
            >
                <Tab value={0} label="Top Keywords" />
                <Tab value={1} label="Similar Topics" />
            </Tabs>
            <div>
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