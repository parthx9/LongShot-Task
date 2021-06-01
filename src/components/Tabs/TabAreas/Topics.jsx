import { useContext } from "react"
import DataContext from "../../../utils/DataContent"

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
            <ul>
                {renderTopics()}
            </ul>
        </div>
    )
}

export default Topics