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
            <Skeleton height={180} />
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
                  <Skeleton width={200} />
                </span>{" "}
              </p>
              <p className={css.title}>
                {" "}
                <Skeleton height={30} width={811} />
              </p>
              <p className={css.text}>
                {" "}
                <Skeleton width={811} />
              </p>
              <p>
                {" "}
                <Skeleton width={811} />
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonList;
