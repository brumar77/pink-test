import { useState } from "react";
import s from "./Column.module.scss";
import { Order } from "@/dtos/Order.dto";

export type ColumnProps = {
  orders: Array<Order>;
  title: string;
  onClick?: (order: Order) => void;
  onStateChange?: (order: Order, newState: Order["state"]) => void;
  allowedPreviousStates: Order["state"][];
  allowedNextStates: Order["state"][];
};

export default function Column(props: ColumnProps) {
  const handleChangeState = (order: Order, newState: Order["state"]) => {
    if (props.onStateChange) {
      props.onStateChange(order, newState);
    }
  };

  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={s["pk-column"]}>
      <div className={s["pk-column__title"]}>
        <h3>{props.title}</h3>
      </div>
      {props.orders.map((order) => (
        <div
          key={order.id}
          onClick={() => props.onClick && props.onClick(order)}
          className={s["pk-card"]}
        >
          <div>
            <span>
              orden: <b>{order.id}</b>
            </span>
          </div>
          <div>
            {order.items.map((item) => (
              <div></div>
            ))}
          </div>

          <div className={s["eye-div"]} onClick={toggleModal}>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>

          <div className={s["btn-container"]}>
            {/* Botón Anterior */}

            {order.state !== "PENDING" && (
              <button
                className={s["btn-anterior"]}
                onClick={() =>
                  handleChangeState(
                    order,
                    props.allowedPreviousStates.slice(-1)[0]
                  )
                }
              >
                Anterior
              </button>
            )}

            {/* Botón Siguiente */}
            {order.state !== "DELIVERED" && (
              <button
                className={s["btn-siguiente"]}
                onClick={() =>
                  handleChangeState(order, props.allowedNextStates.slice(-1)[0])
                }
              >
                Siguiente
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
