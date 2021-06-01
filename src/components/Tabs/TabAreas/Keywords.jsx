import { useContext } from "react"
import DataContext from "../../../utils/DataContent"

const Keywords = () => {

    const {data, setData} = useContext(DataContext)

    const renderKeywords = () => {
        return(
            data?.top_keywords.filter((item, idx) => idx < 10).map(i => {
                return(
                    <li className='keyword-item'>
                        {i.keyword}
                    </li>
                )
            })
        )
    }

    return(
        <div>
            <ul>
                {renderKeywords()}
            </ul>
        </div>
    )
}

export default Keywords