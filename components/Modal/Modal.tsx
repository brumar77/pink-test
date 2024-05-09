import { Item } from "@/dtos/Item.dto";
import s from "./Modal.module.scss";
import { Order } from "@/dtos/Order.dto";

export type ModalProps = {
  data: Order | null;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  return (
    <>
      <div className={s.backdrop} onClick={props.onClose}></div>
      <div className={s.modal}>
        <div className={s.content}>
          <h2>Items</h2>
          <ul>
            {props.data?.items.map(
              (item) => (
                console.log(item),
                (
                  <>
                    <li key={item.id}>
                      <div>
                        <p className={s.name}>
                          {item.name} x{item.quantity}
                        </p>
                        <br />
                        {item.image && <img src={item.image} />}
                        <br />
                        <p>
                          Price per unit:{item.price.currency}{" "}
                          {item.price.amount}
                        </p>
                        <br />
                        <br />
                      </div>
                    </li>
                  </>
                )
              )
            )}
            <div className={s.totalPrice}>
              <p>
                Total Price: {props.data?.totalPrice.currency}{" "}
                {props.data?.totalPrice.amount}
              </p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
