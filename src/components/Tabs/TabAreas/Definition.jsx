import { useContext } from "react"
import DataContext from "../../../utils/DataContent"

const Definition = () => {

    const { data } = useContext(DataContext)

    return(
        <div className='display-area'>
            <p>
                {data?.definition}
            </p>
        </div>
    )
}

export default Definition