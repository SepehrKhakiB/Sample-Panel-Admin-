import React from 'react';
import "./Chart.css"
import { LineChart } from '@mui/x-charts';

const Chart = () => {

    const monthlySales = {
        months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        sales: [35, 42, 38, 55, 47, 60, 65, 58, 72, 68, 75, 80]
    };

    return (
        <div className="chart-container">
            <h3>گزارش فروش ماهیانه</h3>
            <LineChart
                sx={{
                    color: "#fff",
                    "& .MuiChartsAxis-line": {
                        stroke: `var(--text) !important`,
                    },
                    "& .MuiChartsAxis-tickLabel": {
                        fill: `var(--text) !important`,
                        fontFamily: "Vazir !important",
                    },
                    "& .MuiChartsAxis-label": {
                        fill: `var(--text) !important`,
                        fontFamily: "Vazir !important",
                    },
                    "& .MuiChartsLegend-label": {
                        color: "var(--text)",
                        fontFamily: "Vazir !important",
                    },
                }}
                xAxis={[{
                    data: monthlySales.months,
                    scaleType: 'band',
                }]}
                series={[{
                    data: monthlySales.sales,
                    label: 'میزان فروش (میلیون تومان)',
                }]}
                height={300}
            />
        </div>
    );
};

export default Chart;