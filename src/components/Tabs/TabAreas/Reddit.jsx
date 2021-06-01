import { useContext } from "react"
import DataContext from "../../../utils/DataContent"
import Nothing from "../../Error/Nothing"

const Reddit = () => {

    const { data } = useContext(DataContext)

    const renderQuestions = () => {
        return(
            data?.reddit_questions.filter((i, index) => index < 5).map((i) => {
                return(
                    <li className='question-item'>
                        <i class="fas fa-external-link-square-alt"></i>
                        <a target='_blank' href={i.link}>
                            {i.question}
                        </a>
                    </li>
                )
            })
        )
    }

    return(
        <div>
            {data?.reddit_questions?.length > 0?(<ul>
                {renderQuestions()}
            </ul>):(
                <Nothing />
            )}
        </div>
    )
}

export default Reddit