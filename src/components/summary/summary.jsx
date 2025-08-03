
import "./summary.css"
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import SummaryItem from "../SummaryItem/SummaryItem";
import CategoryIcon from '@mui/icons-material/Category';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Summary = () => {
    const items = [
        {
            value: 1000,
            title: "سفارشات تحویل داده شده ",
            icon: LocalShippingRoundedIcon,
            color: "success",
        },
        {
            value: 750,
            title: "تعداد کاربران",
            icon: PersonAddIcon,
        },
        {
            value: 2200,
            title: "تعداد محصولات موجود",
            icon: CategoryIcon,
            color: "warning",
        },
        {
            value: 50,
            title: "سفارشات لغو‌شده",
            icon: CancelRoundedIcon,
            color: "error",
        },
    ];

    return (
        <div className="Summary">
            {items.map((item, index) => (
                <SummaryItem
                    key={index}
                    value={item.value}
                    title={item.title}
                    icon={item.icon}
                    color={item.color}
                />
            ))}
        </div>
    );
};

export default Summary;