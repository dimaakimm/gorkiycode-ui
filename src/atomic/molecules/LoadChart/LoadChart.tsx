import styles from "./LoadChart.module.scss";
import React, { useEffect, useState } from "react";
import { passedHours } from "../../organisms/Modals/ModalPlayground/mocks.ts";
import { IPlaygroundState } from "../../../api/playground/types.ts";

interface LoadChartProps {
  states: IPlaygroundState[] | undefined;
  setNowPlayers: (value: number) => void;
}

interface Bar {
  predict: number;
  now: number;
}

const LoadChart: React.FC<LoadChartProps> = (props: LoadChartProps) => {
  const { states, setNowPlayers } = props;
  const maxHeight = 90;
  const maxValue = 15;
  const barWidth = 15;
  const borderWidth = 0.2;
  const baseNowOffset = -8 - barWidth;
  const nowIndex = passedHours(new Date());
  const [activeIndex, setActiveIndex] = useState<number>(nowIndex);
  const [data, setData] = useState<Bar[]>([]);

  useEffect(() => {
    const newData: Bar[] = [];
    for (let i = 0; i < 24; i++) {
      newData.push({ predict: 0, now: 0 });
    }
    states?.map((state) => {
      const passed = passedHours(new Date(state.startTime)) + 3;
      if (passed >= 0 && passed <= 23) {
        newData[passed].now += state.userCount;
      }
      setData(newData);
    });
  }, [states]);

  useEffect(() => {
    setNowPlayers(data[activeIndex]?.now);
  }, [activeIndex, data]);

  return (
    <div className={styles.loadchart}>
      {data?.map((el, index) => {
        const left = barWidth * index + "px";
        const height = maxHeight * (el.now / maxValue) + "px";
        const width = barWidth + "px";
        return (
          <>
            <div
              onClick={() => {
                setActiveIndex(index);
              }}
              style={{ left, height, width, borderWidth }}
              className={styles.loadchart__bar}
            ></div>
            {index % 6 == 0 && (
              <div
                style={{ left, width }}
                className={styles.loadchart__barText}
              >
                {index % 24}
              </div>
            )}
          </>
        );
      })}
      <div
        style={{ left: baseNowOffset + barWidth * nowIndex + "px" }}
        className={styles.loadchart__now}
      >
        <div className={styles.loadchart__nowText}>Сейчас</div>
        <div className={styles.loadchart__nowStick}></div>
      </div>
    </div>
  );
};

export default LoadChart;
