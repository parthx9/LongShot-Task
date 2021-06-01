import { useContext } from "react"
import DataContext from "../../../utils/DataContent"
import Nothing from "../../Error/Nothing"

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
            {data?.top_keywords?(
                <ul>
                    {renderKeywords()}
                </ul>
            ):(
                <Nothing />
            )}
        </div>
    )
}

export default Keywords