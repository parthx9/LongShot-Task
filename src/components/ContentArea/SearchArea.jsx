import KeywordsTab from "../Tabs/KeywordsTab"
import QuestionsTab from "../Tabs/QuestionsTab"

const SearchArea = () => {
    return(
        <div className='search-area'>
            <div className='row'>
                <div className='col-md-7'>
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
            </div>
        </div>
    )
}

export default SearchArea