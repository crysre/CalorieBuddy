import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

export const Chart = () => {

  const date = new Date().toISOString().split("T")[0];
  const todaysDate = date.split("-")[2];
  
  let dates = []

  for(let i = 0; i < 7; i++){
    dates.push(todaysDate-i)
  }

  dates = dates.reverse()
  console.log(dates);
  
  

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Calories",
        data: [2100, 2000, 2100, 2500, 2800, 2700, 2900],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0., // smooth line
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Calorie Intake Over the Week",
      },
    },
  };

  return <Line data={data} options={options} />;
};
