import { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import DataContext from '../../../utils/DataContent';
import Nothing from '../../Error/Nothing';

const Trends = () => {

    const { data } = useContext(DataContext)

    return(
        <div>
            {data?.time_series_data?(
                <LineChart 
                    width={500} 
                    height={300} 
                    data={data?.time_series_data}           
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                }}>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="value" strokeWidth={3} stroke="#6200ea" />
                    <XAxis dataKey="date" />
                    <YAxis />
                </LineChart>
            ): (
                <Nothing />
            )}
        </div>
    )
}

export default Trends