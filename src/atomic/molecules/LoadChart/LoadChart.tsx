import styles from "./LoadChart.module.scss"
import React from "react";

interface LoadChartProps{
    data: { predict:number, now:number}[]
}

const LoadChart: React.FC<LoadChartProps> = (props: LoadChartProps) => {
    const maxHeight = 90;
    const maxValue = 20;
    const barWidth = 15;
    const borderWidth = 0.2;
    const baseNowOffset = -8-barWidth;
    const activeIndex = 5;
    const { data } = props;
    return (
        <div className={styles.loadchart}>
            {data.map((el, index) => {
                const left = (barWidth*index)+"px";
                const height = maxHeight*(el.predict/maxValue) + "px"
                const width = (barWidth)+"px"
                return(
                    <>
                    <div style={{left, height, width, borderWidth}} className={styles.loadchart__bar}></div>
                        {index % 6 == 0 &&
                            <div style={{left, width}} className={styles.loadchart__barText}>{index % 24}</div>}
                    </>
                )
            })}
            <div style={{left: (baseNowOffset+barWidth*activeIndex)+"px"}} className={styles.loadchart__now}>
                <div className={styles.loadchart__nowText}>
                    Сейчас
                </div>
                <div className={styles.loadchart__nowStick}>

                </div>
            </div>
        </div>
    );
};

export default LoadChart;
