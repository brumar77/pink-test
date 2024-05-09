import { Order } from "@/dtos/Order.dto";
import { OrderOrchestrator } from "@/lib";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { RidersContext, useRiders } from "./Riders.context";

export type OrdersContextProps = {
  orders: Array<Order>;
  pickup: (order: Order) => void;
  uploadState: (order: Order, newState: Order["state"]) => void;
};

const defaultOrdersContext: OrdersContextProps = {
  orders: [],
  pickup: () => {},
  uploadState: () => {},
};

export const OrdersContext =
  createContext<OrdersContextProps>(defaultOrdersContext);

export type OrdersProviderProps = {
  children: ReactNode;
};

export function OrdersProvider(props: OrdersProviderProps) {
  const [orders, setOrders] = useState<Array<Order>>([]);

  const { riders, assignedOrders } = useRiders();
  console.log( assignedOrders );

  useEffect(() => {
    const orderOrchestrator = new OrderOrchestrator();
    const listener = orderOrchestrator.run();
    listener.on("order", (order) => {
      setOrders((prev) => [...prev, order]);
    });
  }, []);

  const pickup = (order: Order) => {
    debugger;
    //verificacion solo si se clickea sobre el icono del raider
    const orderFinded = orders.find(
      (o) => o.id === order.id && o.state === "READY"
    );

    if (!orderFinded) {
      alert("La orden no está lista para ser recogida");
      return;
    }

    setTimeout(() => {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderFinded.id ? { ...o, state: "DELIVERED" } : o
        )
      );
    }, 5000);

  };

  const uploadState = (order: Order, newState: Order["state"]) => {
    if (orders.some((o) => o.id === order.id)) {
      console.log(
        `Actualizando estado de la orden ${order.state} a ${newState}`
      );
      //tomo el array y veo cada objeto
      setOrders((prev) =>
        prev.map((o) =>
          //si el id es igual, y el estado no es igual
          o.id === order.id && o.state !== newState
            ? //devuelvo el objeto con el estado cambiado
              { ...o, state: newState }
            : o
        )
      );
    }
    console.log("Orden actualizada");
  };

  useEffect(() => {
    const orderStateChanged = orders.find((orden) => orden.state === "READY");

    if (orderStateChanged) {
      pickup(orderStateChanged);
    }
  }, [orders]);

  const context = {
    orders,
    pickup,
    uploadState,
  };

  return (
    <OrdersContext.Provider value={context}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
