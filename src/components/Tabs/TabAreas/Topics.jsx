import { useContext } from "react"
import DataContext from "../../../utils/DataContent"
import Nothing from "../../Error/Nothing"

const Topics = () => {

    const {data, setData} = useContext(DataContext)

    const renderTopics = () => {
        return(
            data?.similar_topics.filter((item, idx) => idx < 10).map((i, index) => {
                return(
                    <li className='similar-item' key={index}>
                        {i.topic_name}
                    </li>
                )
            })
        )
    }

    return(
        <div>
            {data?.similar_topics?.length > 0?(<ul>
                {renderTopics()}
            </ul>):(
                <Nothing />
            )}
        </div>
    )
}

export default Topics