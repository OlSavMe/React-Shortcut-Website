import React from "react";
import Skeleton from "react-loading-skeleton";
import css from "../layout/_home/2_events/styles.module.scss";

const SkeletonList = () => {
  return (
    <div>
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className={css.container} key={index}>
            <Skeleton height={`100%`} />
            <aside>
              <p>
                <Skeleton height={50} width={50} />{" "}
              </p>
              <p>
                <Skeleton height={50} width={50} />{" "}
              </p>
            </aside>
            <div>
              <p className={css.date}>
                <span>
                  <Skeleton height={10} width={200} />
                </span>{" "}
              </p>
              <p className={css.title}>
                {" "}
                <Skeleton height={40} width={700} />
              </p>
              <p className={css.text}>
                {" "}
                <Skeleton height={20} width={700} />
              </p>
              <p>
                {" "}
                <Skeleton height={20} width={700} />
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonList;
