import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useOrders } from "./Orders.context";
import { getRandomInterval } from "@/lib/utils";
import { Rider } from "@/dtos/Rider.dto";

export type RidersContextProps = {
  riders: Array<Rider>;
  assignedOrders: string[];
};

const defaultRidersContext: RidersContextProps = {
  riders: [],
  assignedOrders: [],
};

export const RidersContext = createContext<RidersContextProps>(
  // @ts-ignore
  defaultRidersContext
);

export type RidersProviderProps = {
  children: ReactNode;
};

export function RidersProvider(props: RidersProviderProps) {
  const [riders, setRiders] = useState<Array<Rider>>([]);
  const [assignedOrders, setAssignedOrders] = useState<string[]>([]);

  const { orders, pickup } = useOrders();

  useEffect(() => {
    const order = orders.find((order) => !assignedOrders.includes(order.id));
    if (order) {
      setAssignedOrders((prev) => [...prev, order.id]);
      setTimeout(() => {
        setRiders((prev) => [
          ...prev,
          {
            orderWanted: order.id,
            pickup,
          },
        ]);
      }, getRandomInterval(4_000, 10_000));
    }
  }, [orders]);

  useEffect(() => {
    riders.forEach((rider) => {
      const orderToPickup = orders.find(
        (order) => order.id === rider.orderWanted && order.state === "DELIVERED"
      );

      setTimeout(() => {
        if (orderToPickup) {
          setRiders((prev) =>
            prev.filter((r) => r.orderWanted !== rider.orderWanted)
          );
          setAssignedOrders((prev) =>
            prev.filter((orderId) => orderId !== rider.orderWanted)
          );
        }
      }, 1000);
    });
  }, [orders]);

  const context = { riders, assignedOrders };

  return (
    <RidersContext.Provider value={context}>
      {props.children}
    </RidersContext.Provider>
  );
}

export const useRiders = () => useContext(RidersContext);
