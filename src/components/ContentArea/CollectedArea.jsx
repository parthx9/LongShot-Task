import { useContext, useEffect } from "react"
import DataContext from "../../utils/DataContent"

const CollectedArea = () => {

    const { collected } = useContext(DataContext)

    useEffect(() => {
        console.log(collected)
    }, [])

    const renderCollected = () => {
        return(
            collected?.map((i) => {
                return(
                    <span>
                        <span className='keyword-item'>{i}</span>
                    </span>
                )
            })
        )
    }

    return(
        <div className='collected-area'>
            <div className='title'>
                <h3>
                    Collected Topics & Questions
                </h3>
            </div>
            <div className='collected-box'>
                {renderCollected()}
            </div>
            <div className='collected-btns'>
                <div className='skip-btn'>
                    <a>
                        Skip
                    </a>
                </div>
                <div className='outline-btn'>
                    <a>
                        Outline <i className='fa fa-chevron-right'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CollectedArea