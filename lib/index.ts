import { Order } from "@/dtos/Order.dto";
import { EventEmitter } from "events";
import { getRandomId, getRandomInterval } from "./utils";

export class OrderOrchestrator {
  private interval: NodeJS.Timeout | undefined;
  private maxOrders: number = getRandomInterval(10, 30);
  private eventEmitter = new EventEmitter();

  private emit(order: Order) {
    this.eventEmitter.emit("order", order);
  }

  public run() {
    this.interval = setInterval(() => {
      const itemsArray = [
        {
          id: getRandomId(),
          name: "Hamburguesa Clásica",
          image: "https://i.pinimg.com/564x/d7/17/81/d71781dfb3d9d4892fe99636ebd2deeb.jpg",
          price: { currency: "USD", amount: 8.99 },
        },
        {
          id: getRandomId(),
          name: "Hamburguesa Doble",
          image: "https://i.pinimg.com/564x/1c/77/d0/1c77d0d41a7fd1bb0a3f43f7ef26a765.jpg",
          price: { currency: "USD", amount: 12.99 },
        },
        {
          id: getRandomId(),
          name: "Hamburguesa Vegana",
          image: "https://i.pinimg.com/564x/09/46/31/094631347ee401a68785e69603941e1b.jpg",
          price: { currency: "USD", amount: 10.99 },
        },
        {
          id: getRandomId(),
          name: "Hamburguesa de Pollo",
          image:  "https://i.pinimg.com/564x/34/e1/30/34e13046e8f9fd9f3360568abd453685.jpg",
          price: { currency: "USD", amount: 9.99 },
        },
      ];

      //x cantidad de items
      const numItems = Math.floor(Math.random() * itemsArray.length) + 1;

      //recorre el itemsArray y selecciona x items y lo guarda en selectedItems
      const selectedItems = [];
      let totalPrice = 0;

      for (let i = 0; i < numItems; i++) {
        const randomIndex = Math.floor(Math.random() * itemsArray.length);
        const selectedItem = itemsArray[randomIndex];
        const existingItemIndex = selectedItems.findIndex(
          (item) => item.name === selectedItem.name
        );
        if (existingItemIndex !== -1) {
          // Si el ítem ya existe en selectedItems, incrementa su cantidad
          selectedItems[existingItemIndex].quantity++;
        } else {
          // Si el ítem no existe, añádelo al array con una cantidad inicial de 1
          selectedItems.push({ ...selectedItem, quantity: 1 });
        }
      }

      // Calcular el precio total para cada ítem y sumarlos
      selectedItems.forEach((item) => {
        totalPrice += item.price.amount * item.quantity;
      });

      this.emit({
        id: getRandomId(),
        state: "PENDING",
        items: selectedItems,
        totalPrice: { currency: "USD", amount: totalPrice },
      });
      this.maxOrders--;
      if (this.maxOrders <= 0) {
        clearInterval(this.interval);
      }
    }, 2000);
    return this.eventEmitter;
  }
}
