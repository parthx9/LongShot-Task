import Choices from "./Choices"
import SearchArea from "./SearchArea"

const ContentArea = () => {
    return(
        <div className='content-area'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'>
                        <Choices />                       
                    </div>
                    <div className='col-md-10'>
                        <SearchArea />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentArea