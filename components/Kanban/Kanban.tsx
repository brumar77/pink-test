import s from "./Kanban.module.scss";
import Column from "../Column";
import { useOrders } from "@/contexts/Orders.context";
import { Order } from "@/dtos/Order.dto";

export default function Kanban() {

  const { orders, uploadState } = useOrders();

  const handleStateTransition = (order: Order, newState: Order["state"]) => {
    uploadState(order, newState);
  };

  return (
    <section className={s["pk-kanban"]}>
      <Column
        title="Pendiente"
        orders={orders.filter((i) => i.state === "PENDING")}
        onStateChange={handleStateTransition}
        allowedPreviousStates={[]}
        allowedNextStates={["IN_PROGRESS"]}
      />
      <Column
        title="En preparación"
        orders={orders.filter((i) => i.state === "IN_PROGRESS")}
        onStateChange={handleStateTransition}
        allowedPreviousStates={["PENDING"]}
        allowedNextStates={["READY"]}
      />
      <Column
        title="Listo"
        orders={orders.filter((i) => i.state === "READY")}
        onStateChange={handleStateTransition}
        allowedPreviousStates={["IN_PROGRESS"]}
        allowedNextStates={["DELIVERED"]}
      />
    </section>
  );
}
