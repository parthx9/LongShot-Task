import KeywordsTab from "../Tabs/KeywordsTab"
import QuestionsTab from "../Tabs/QuestionsTab"
import DefinitionTab from '../Tabs/DefinitionTab'
import CollectedArea from  './CollectedArea'

const SearchArea = () => {
    return(
        <div className='search-area'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='search-bar'>
                        <input type='text' />
                        <div className='search-btn'>
                            <a>
                                Search
                            </a>
                        </div>
                        <p>
                            Enter a topic or keyword and get seo & insights of the topic.
                            You can use these to get inspired about what to right about next!
                        </p>
                    </div>
                    <KeywordsTab />
                    <QuestionsTab />
                </div>
                <div className='col-md-6'>
                    <DefinitionTab />
                    <CollectedArea />
                </div>
            </div>
        </div>
    )
}

export default SearchArea