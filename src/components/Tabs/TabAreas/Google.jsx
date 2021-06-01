import { useContext } from "react"
import DataContext from "../../../utils/DataContent"

const Google = () => {

    const { data } = useContext(DataContext)

    const renderQuestions = () => {
        return(
            data?.google_questions.filter((i, index) => index < 5).map((i) => {
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
            <ul>
                {renderQuestions()}
            </ul>
        </div>
    )
}

export default Google