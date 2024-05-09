import { useState } from "react";
import s from "./Column.module.scss";
import { Order } from "@/dtos/Order.dto";
import Modal from "../Modal/Modal";

export type ColumnProps = {
  orders: Array<Order>;
  title: string;
  onClick?: (order: Order) => void;
  onStateChange?: (order: Order, newState: Order["state"]) => void;
  allowedPreviousStates: Order["state"][];
  allowedNextStates: Order["state"][];
};

export default function Column(props: ColumnProps) {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const handleChangeState = (order: Order, newState: Order["state"]) => {
    if (props.onStateChange) {
      props.onStateChange(order, newState);
    }
  };

  const toggleModal = (orderId: string) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
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
          <div className={s["pk-card__order"]}>
            <span>
              Orden: <b>{order.id}</b>
            </span>
          </div>
          <div>
            {order.items.map((item) => (
              <div key={item.id} className={s["pk-card__item"]}>
                <span>
                  Name: <b>{item.name}</b>
                </span>
              </div>
            ))}
          </div>

          <div className={s["eye-div"]} onClick={() => toggleModal(order.id)}>
            <span role="img" aria-label="eye" className={s["eye-icon"]}>
              👁️‍🗨️
            </span>
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

      {/* Mostrar el Modal si hay una orden seleccionada */}
      {selectedOrderId && (
        <Modal
          data={props.orders.find((order) => order.id === selectedOrderId) || null}
          onClose={() => toggleModal(selectedOrderId)}
        />
      )}
    </div>
  );
}
