import KeywordsTab from "../Tabs/KeywordsTab"
import QuestionsTab from "../Tabs/QuestionsTab"
import DefinitionTab from '../Tabs/DefinitionTab'
import CollectedArea from  './CollectedArea'
import { useContext, useState } from "react"
import DataContext from "../../utils/DataContent"
import Nothing from "../Error/Nothing"

const SearchArea = () => {

    const { searchTerm, setSearchTerm } = useContext(DataContext)
    const { data } = useContext(DataContext)
    const [search, setSearch] = useState(null)

    return(
        <div className='search-area'>
            <div className='row'>
                <div className='col-md-6 br-1 pt-5'>
                    <div className='search-bar'>
                        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className='search-btn'>
                            <a onClick={() => setSearchTerm(search)}>
                                Search
                            </a>
                        </div>
                        <p>
                            Enter a topic or keyword and get seo & insights of the topic.
                            You can use these to get inspired about what to right about next!
                        </p>
                    </div>
                    <hr className='hr-theme'></hr>
                    {data?(
                        <>
                            <KeywordsTab />
                            <QuestionsTab />
                        </>
                    ): (
                        <Nothing />
                    )}

                </div>
                {data?(
                    <div className='col-md-6 pt-5'>
                        <DefinitionTab />
                        <CollectedArea />
                    </div>
                ): null}
            </div>
        </div>
    )
}

export default SearchArea