import { Tooltip } from "@mui/material";
import CountUp from "react-countup";
import { keyframes } from "@emotion/react";
import "./summary.css";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SummaryItem = ({ value, title, icon: Icon, color = "primary" }) => {
    return (
        <Tooltip
            title={title}
            arrow
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: 'background.paper',
                        color: 'text.primary',
                        fontFamily: 'Vazir',
                        fontSize: '1rem',
                        borderRadius: '12px',
                        boxShadow: 3,
                        p: 1.5,
                        animation: `${fadeIn} 0.3s ease-out`,
                        border: '1px solid',
                        borderColor: 'divider',
                        backdropFilter: 'blur(4px)',
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                        maxWidth: 200,
                    }
                },
                arrow: {
                    sx: {
                        color: 'background.paper',
                        '&:before': {
                            border: '1px solid',
                            borderColor: 'divider',
                        }
                    }
                }
            }}
            TransitionProps={{ timeout: 300 }}
        >
            <div className="Summary-item">
                <Icon
                    color={color}
                    sx={{
                        fontSize: '1.8rem',
                        transition: 'transform 0.3s',
                        '&:hover': {
                            transform: 'scale(1.1)'
                        }
                    }}
                />
                <p style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginTop: '0.5rem'
                }}>
                    <CountUp
                        end={value}
                        duration={2}
                        start={0}
                        separator=","
                    />
                </p>
            </div>
        </Tooltip>
    );
};

export default SummaryItem;