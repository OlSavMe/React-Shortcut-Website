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
<<<<<<< HEAD
                  <Skeleton height={10} width={200} />
=======
                  <Skeleton height={40} width={200} />
>>>>>>> 466ba6d0579e0801df850c7470cb908ad2a04332
                </span>{" "}
              </p>
              <p className={css.title}>
                {" "}
<<<<<<< HEAD
                <Skeleton height={40} width={700} />
              </p>
              <p className={css.text}>
                {" "}
                <Skeleton height={20} width={700} />
              </p>
              <p>
                {" "}
                <Skeleton height={20} width={700} />
=======
                <Skeleton height={20} width={800} />
              </p>
              <p className={css.text}>
                {" "}
                <Skeleton height={20} width={800} />
              </p>
              <p>
                {" "}
                <Skeleton height={20} width={800} />
>>>>>>> 466ba6d0579e0801df850c7470cb908ad2a04332
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonList;
