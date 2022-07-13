/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function LineChartC () {
  const [data, setData] = useState({
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Junio', 'Julio', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'First Dataset',
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: 'yellow',
        borderColor: 'green',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  })
  return (
    <div className='LineChartC' style={{ width: '500px', height: '300px' }}>
      <Line data={data}>Hello</Line>
    </div>
  )
}

export default LineChartC
