import { useContext } from "react"
import DataContext from "../../../utils/DataContent"
import Nothing from "../../Error/Nothing"

const Definition = () => {

    const { data } = useContext(DataContext)

    return(
        <div className='display-area'>
            {data?.definition?(
                <p>
                    {data?.definition}
                </p>
            ):(
                <Nothing />
            )}
        </div>
    )
}

export default Definition