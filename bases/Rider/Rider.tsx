import { Rider as RiderProps } from "@/dtos/Rider.dto";
import s from "./Rider.module.scss";
import { useOrders } from "@/contexts/Orders.context";
export default function Rider(props: RiderProps) {

  const { orders, pickup } = useOrders();

  const orderForRider = orders.find((order) => order.id === props.orderWanted);

  const handlePickup = () => {
    if (orderForRider) {

      console.log("orderForRider: ", orderForRider);
      pickup(orderForRider);
      console.log("Se ha pedido a pickup");
    } else {
      console.error('La función pickup o el pedido orderForRider es indefinido.');
    }
  };

  return (
    <div onClick={handlePickup} className={s["pk-rider__container"]}>
      <div className={s["pk-rider__order"]}>
        <b>{props.orderWanted} !!</b>
      </div>
      <svg
        className={s["pk-rider"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <g id="freepik--Character--inject-23">
          <path
            d="M186.87,173.5c5.15,19.65,11.86,32.48,16.36,36.92,10.78,10.64,34,13,47.06,18.42,4.25,1.77,16-25.19,11.65-27.55-3.21-1.75-40.49-6.47-43.66-7.44-1.63-.5-14-16.61-21-25.67C186,153.66,184.05,162.77,186.87,173.5Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M270.7,232.62c-2-.05-2.07,1,.72,3.31s15.78,9,13.05,13.35-20.92-5.41-25.27-9.59-9.94-12.46-9.94-12.46C253.19,228.42,263,230.39,270.7,232.62Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M258.8,200.44c19.36,3,27.06,6.79,35.54,16.69A6.49,6.49,0,0,1,296,221c3.88,4.36,3,7.51,3,7.51,2.36,5.17,1,8.26,1,8.26s4.5,5.17,1.82,8.41c-3,3.64-8.72-4.34-14.55-6.8-13.37-5.65-34-9.93-38-11.17Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M277.38,222.64a92.27,92.27,0,0,1,11.43,5.6,92.89,92.89,0,0,1,11,8.56.12.12,0,0,0,.16-.17,49.38,49.38,0,0,0-22.51-14.17C277.26,222.4,277.18,222.55,277.38,222.64Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M279.61,214.07c3.71,1.9,10.19,5.29,19.26,14.55,0,0,.09,0,.06,0a44.3,44.3,0,0,0-19.23-14.69C279.46,213.79,279.37,213.94,279.61,214.07Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M280.9,209.49c6.17,3.48,9.62,6.45,15.05,11.53,0,0,.08,0,.05-.05-5.55-6.42-8.29-8.12-15-11.71C280.76,209.14,280.66,209.35,280.9,209.49Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M208.83,182.41,191,199.12S183.8,173.2,183.85,165c0-9.25,4.76-7.21,11-1S208.83,182.41,208.83,182.41Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M208.83,182.41,191,199.12S183.8,173.2,183.85,165c0-9.25,4.76-7.21,11-1S208.83,182.41,208.83,182.41Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M205.18,179.77c-2.56,1.82-9.47,8.36-10.63,9.43-.61.57-2.93,2.92-3.54,3.48-.08.07,0,.18.12.11,1.17-1.06,2.45-2,3.62-3.07s8.45-7.46,10.51-9.86C205.31,179.81,205.24,179.73,205.18,179.77Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M303.32,382.93c-2.42.79-72.1-2-74.71-3.69-.32-.19-1.56-13.59-1.56-13.59l8.06-51.49,45.75.61-8.83,44s10.08,4.64,18.39,8.69c0,0,0,0,0,0,5.12,2.48,9.57,4.75,10.59,5.58C303.69,375.18,305.75,382.15,303.32,382.93Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M303.33,382.93c-2.42.79-72.12-2-74.72-3.68-.31-.2-1.57-13.6-1.57-13.6l2.49-15.86,43.89,2L272,358.73s10.07,4.64,18.39,8.68c0,0,0,0,0,0,5.12,2.48,9.57,4.75,10.59,5.58C303.68,375.19,305.74,382.16,303.33,382.93Z"
            style={{ fill: "#ebebeb" }}
          ></path>
          <path
            d="M303.29,383c-2.47.77-72.61-.86-75.24-2.62-1-.65-1.37-10.89-1.45-23.27v-.38l45.27.55,0,.76s26.57,12.64,29.26,14.88S305.76,382.26,303.29,383Z"
            style={{ fill: "#c7c7c7" }}
          ></path>
          <path
            d="M299.29,383.2c-15.35.16-69-1.28-71.24-2.81-1-.65-1.37-10.89-1.45-23.27v-.38l28.35.34Z"
            style={{ fill: "#a6a6a6" }}
          ></path>
          <path
            d="M302.56,380.28c-11.82-.57-59.54-1.74-71.26-1.4-.1,0-.1.07,0,.08,11.7.81,59.42,1.59,71.25,1.51C302.8,380.47,302.81,380.29,302.56,380.28Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M275.63,358.28c-4.63-1-10.34-.4-14,2.84-.14.12,0,.32.19.27a65.33,65.33,0,0,1,13.75-2.52A.3.3,0,0,0,275.63,358.28Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M278.94,360.38c-4.63-1-10.34-.39-14,2.84-.14.12,0,.32.19.28A65.34,65.34,0,0,1,278.91,361,.3.3,0,0,0,278.94,360.38Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M282.25,362.48c-4.63-1-10.34-.39-14,2.84-.14.13,0,.32.19.28a65.46,65.46,0,0,1,13.75-2.53A.3.3,0,0,0,282.25,362.48Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M275.87,352.11l-51.07-2.32s17.65-71.67,15.77-74c-2-2.5-75.94,16-90.72-2.34-15.14-18.79-7.55-45.84-7.55-45.84h50.43s-1,6.77-.32,10c0,0,71-10.86,86.44-2.68,3,1.61,14,10.65,14.18,19.22C294,292,275.87,352.11,275.87,352.11Z"
            style={{ fill: "#455a64" }}
          ></path>
          <path
            d="M276.38,342.86c-6.06-.76-12.13-1.22-18.22-1.68s-12.18-.82-18.27-1.05c-3.44-.14-6.88-.11-10.32-.23a.09.09,0,0,0,0,.17c3.06.22,6.11.61,9.17.85l9.06.66c6.09.4,12.18.74,18.27,1.11,3.43.21,6.86.32,10.3.4A.12.12,0,0,0,276.38,342.86Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M248.44,270.7c-9.81.32-19.57,1.17-29.33,2.13s-19.58,2-29.42,2.64c-4.88.31-9.78.51-14.68.54a41.57,41.57,0,0,1-12.09-1.26,16.37,16.37,0,0,1-9.39-7.2A30.64,30.64,0,0,1,149.42,256c-1.29-8.27,0-16.72,1.51-24.88.19-1,.38-2,.56-3.08,0-.09-.13-.13-.16,0-2,8.23-3.87,16.7-3.27,25.2a33.77,33.77,0,0,0,3,12.06,19,19,0,0,0,7.7,8.86c3.51,2,7.66,2.59,11.69,2.79,4.7.24,9.46,0,14.16-.21,10.06-.49,20.08-1.53,30.08-2.57s19.95-2.06,30-2.56c1.11-.06,2.22-.1,3.33-.14-1.52,9-14.39,62.58-15.11,66.82-.07.42.33.55.44.12,2.2-8.35,14.69-62,15.52-67.24A.39.39,0,0,0,248.44,270.7Z"
            style={{ fill: "#263238" }}
          ></path>
          <rect
            x="178.67"
            y="385.02"
            width="109.14"
            height="12.07"
            style={{ fill: "#F9CC01" }}
          ></rect>
          <polygon
            points="82.76 279.13 88.95 279.13 128.95 324.89 122.76 324.89 82.76 279.13"
            style={{ fill: "#a6a6a6" }}
          ></polygon>
          <rect
            x="74.7"
            y="275.5"
            width="86.02"
            height="3.62"
            style={{ fill: "#a6a6a6" }}
          ></rect>
          <polygon
            points="106.1 279.13 112.29 279.13 152.29 324.89 146.1 324.89 106.1 279.13"
            style={{ fill: "#a6a6a6" }}
          ></polygon>
          <path
            d="M145.9,363.49c31.08,0,49.09,21.59,49.09,47S178.31,457,148,457c-33.54,0-49.56-26.68-49.56-46.74S114.44,363.49,145.9,363.49Z"
            style={{ fill: "#37474f" }}
          ></path>
          <path
            d="M141.12,363.49c29.55,0,46.66,21.59,46.66,47S171.93,457,143.1,457C111.21,457,96,430.28,96,410.22S111.21,363.49,141.12,363.49Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M141.42,381.74c18,0,28.43,13.16,28.43,28.64s-9.66,28.33-27.22,28.33c-19.44,0-28.72-16.26-28.72-28.49S123.19,381.74,141.42,381.74Z"
            style={{ fill: "#c7c7c7" }}
          ></path>
          <path
            d="M233.88,306.52v-4.09L129.29,305.8V315S99,348.45,95.94,383.22l104.88,2.22,16.85-.42h20.69V364s-15.64-11.4-12.9-34.69C226.37,321.58,233.88,306.52,233.88,306.52Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M191.05,380.57c-1.09,2-17,4.87-47.16,5.68-27.15.73-47.43.13-49-1.62s2.43-32.7,20.81-49.46S160.1,316,177.26,326C192.35,334.77,203.61,357.06,191.05,380.57Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M196.17,351.27A38.5,38.5,0,0,0,185.47,332,42.91,42.91,0,0,0,166,320.81a49.48,49.48,0,0,0-25,.27,55.91,55.91,0,0,0-11.79,4.57,65.86,65.86,0,0,0-11.12,7.53c-.92.76-1.85,1.52-2.76,2.3-.08.06,0,.17.12.11a71.6,71.6,0,0,1,11.19-8.07,55.9,55.9,0,0,1,11.49-4.95,50.26,50.26,0,0,1,24.53-1.38,41.63,41.63,0,0,1,19.79,10,39.71,39.71,0,0,1,11.42,17.95c2.5,8.42,1.68,17.69-.81,26-.33,1.12-.69,2.22-1.06,3.32,0,.12.14.16.18.05C195.54,369.88,198.05,360.58,196.17,351.27Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M123.47,389.44c-18.21,0-27.85-.56-32.74-2.5L93,381.23c5.72,2.27,23.63,2.23,52.45,1.9,21.29-.25,37-2.26,46.8-6l2.19,5.74c-10.6,4-26.6,6.12-48.92,6.38C137.05,389.37,129.75,389.44,123.47,389.44Z"
            style={{ fill: "#dbdbdb" }}
          ></path>
          <path
            d="M235.6,305.12s.7-22.88,0-23.78-106.58-2.81-109.75-2.53-3.49,27-3.25,28.25S232.84,305.36,235.6,305.12Z"
            style={{ fill: "#37474f" }}
          ></path>
          <path
            d="M245.52,281.8c-.31-.36-13.73-.74-14.47-.76s-1,24.37-.6,24.35,14.58.18,15.05-.34S246.19,282.58,245.52,281.8Z"
            style={{ fill: "#455a64" }}
          ></path>
          <path
            d="M171.36,278.83a2.66,2.66,0,0,0-.71,1.44,14.16,14.16,0,0,0-.27,1.73c-.13,1.16-.2,2.34-.26,3.51-.1,2.36-.16,4.73-.2,7.11s-.1,4.74,0,7.09a28.5,28.5,0,0,0,.24,3.48,6.59,6.59,0,0,0,.39,1.63,1.52,1.52,0,0,0,1,1,1.38,1.38,0,0,1-1.23-.84,7.66,7.66,0,0,1-.65-1.65,21.54,21.54,0,0,1-.55-3.57,69.37,69.37,0,0,1-.18-7.2c.06-2.39.16-4.79.43-7.18a35.64,35.64,0,0,1,.57-3.56,17,17,0,0,1,.51-1.72C170.61,279.61,170.89,279,171.36,278.83Z"
            style={{ fill: "#455a64" }}
          ></path>
          <rect
            x="78.68"
            y="213.28"
            width="99.99"
            height="62.16"
            transform="translate(257.35 488.73) rotate(180)"
            style={{ fill: "#37474f" }}
          ></rect>
          <rect
            x="78.68"
            y="213.28"
            width="72.24"
            height="62.16"
            transform="translate(229.6 488.73) rotate(180)"
            style={{ fill: "#263238" }}
          ></rect>
          <rect
            x="110.92"
            y="213.28"
            width="7.77"
            height="62.16"
            style={{ fill: "#F9CC01" }}
          ></rect>
          <rect
            x="76.65"
            y="207.53"
            width="74.28"
            height="5.75"
            style={{ fill: "#37474f" }}
          ></rect>
          <rect
            x="150.92"
            y="207.53"
            width="29.99"
            height="5.75"
            style={{ fill: "#263238" }}
          ></rect>
          <rect
            x="110.26"
            y="207.53"
            width="9.08"
            height="5.75"
            style={{ fill: "#F9CC01" }}
          ></rect>
          <rect
            x="89.27"
            y="162.42"
            width="72.99"
            height="45.38"
            transform="translate(251.53 370.21) rotate(180)"
            style={{ fill: "#37474f" }}
          ></rect>
          <rect
            x="89.27"
            y="162.42"
            width="52.73"
            height="45.38"
            transform="translate(231.27 370.21) rotate(180)"
            style={{ fill: "#263238" }}
          ></rect>
          <rect
            x="112.8"
            y="162.42"
            width="5.67"
            height="45.38"
            style={{ fill: "#F9CC01" }}
          ></rect>
          <rect
            x="87.78"
            y="158.22"
            width="54.22"
            height="4.2"
            style={{ fill: "#37474f" }}
          ></rect>
          <rect
            x="142"
            y="158.22"
            width="21.89"
            height="4.2"
            style={{ fill: "#263238" }}
          ></rect>
          <rect
            x="112.32"
            y="158.22"
            width="6.63"
            height="4.2"
            style={{ fill: "#F9CC01" }}
          ></rect>
          <path
            d="M374.18,363.11c31.09,0,49.09,21.59,49.09,47s-16.68,46.48-47,46.48c-33.55,0-49.57-26.68-49.57-46.73S342.72,363.11,374.18,363.11Z"
            style={{ fill: "#37474f" }}
          ></path>
          <path
            d="M369.4,363.11c29.55,0,46.67,21.59,46.67,47s-15.86,46.48-44.68,46.48c-31.89,0-47.12-26.68-47.12-46.73S339.5,363.11,369.4,363.11Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M369.7,381.36c18,0,28.44,13.16,28.44,28.64s-9.66,28.33-27.23,28.33c-19.43,0-28.71-16.26-28.71-28.48S351.48,381.36,369.7,381.36Z"
            style={{ fill: "#c7c7c7" }}
          ></path>
          <polygon
            points="323.89 256.96 311.66 256.96 303.28 244.66 317.61 244.66 323.89 256.96"
            style={{ fill: "#F9CC01" }}
          ></polygon>
          <polygon
            points="303.28 244.66 308.19 251.86 311.66 256.96 323.89 256.96 320.58 250.48 317.6 244.66 303.28 244.66"
            style={{ fill: "#F9CC01" }}
          ></polygon>
          <polygon
            points="303.28 244.66 308.19 251.86 320.58 250.48 317.6 244.66 303.28 244.66"
            style={{ opacity: 0.1 }}
          ></polygon>
          <polygon
            points="353.61 348.75 341.7 351.49 330.78 341.37 344.74 338.17 353.61 348.75"
            style={{ fill: "#F9CC01" }}
          ></polygon>
          <polygon
            points="330.78 341.37 337.17 347.3 341.69 351.49 353.62 348.75 348.94 343.18 344.74 338.17 330.78 341.37"
            style={{ fill: "#F9CC01" }}
          ></polygon>
          <polygon
            points="330.78 341.37 337.17 347.3 348.94 343.18 344.74 338.17 330.78 341.37"
            style={{ opacity: 0.1 }}
          ></polygon>
          <path
            d="M420.57,369.11,409,375.19s-33.51-6.08-55-1.48-27.29,16.08-27.29,16.08H315.85s9.32-33.11,25.13-45.13,41.22-9.33,55.27-1.76S420.57,369.11,420.57,369.11Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M407.78,372.9a59.72,59.72,0,0,0-7.26-6.44,64.5,64.5,0,0,0-8.12-5.38,49.59,49.59,0,0,0-17.78-5.84c-12.22-1.5-25,2.06-34,11.45-5.06,5.32-8.66,11.85-12.08,18.44-.05.1.09.18.14.08a72.7,72.7,0,0,1,10.88-16,39,39,0,0,1,15.13-10.2c11.53-4.23,24-2.61,35.08,2.5a70.46,70.46,0,0,1,9.16,5,106,106,0,0,1,8.65,6.49A.12.12,0,0,0,407.78,372.9Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M280.63,250.34c-.18.42-24.33,4.86-24.33,4.86s-4-2.7-1.53-6.12L279,243.85A5.62,5.62,0,0,1,280.63,250.34Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M331.32,219.12v28.65s-15.47-1.35-19.59-1.49-22.43,2.23-22.43,2.23l-1.42-6.42S302,237.16,308,233.31s12.91-11.21,16.62-12.84A15,15,0,0,1,331.32,219.12Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M289.36,241.28a8.74,8.74,0,0,1,2.4,7.23s-11.53,2.11-11.67,2.11a6.55,6.55,0,0,0-3.95-6.48Z"
            style={{ fill: "#dbdbdb" }}
          ></path>
          <ellipse
            cx="331.47"
            cy="233.45"
            rx="7.58"
            ry="14.32"
            style={{ fill: "#dbdbdb" }}
          ></ellipse>
          <ellipse
            cx="331.94"
            cy="233.45"
            rx="6.49"
            ry="12.78"
            style={{ fill: "#fff" }}
          ></ellipse>
          <path
            d="M333.91,257c2.52,3.69,12.61,53.87,14.59,56.39s5.77,2.7,5.77,2.7l6.67,16.58s-16.57,5.23-25.77,12.79c-11.89,9.77-22.88,42.16-22.88,42.16-1.8,1.26-24.14,10.45-30.27,10.81,0,0,28.49-31.28,30.81-74.57.9-16.77-9.42-40.39-10.09-52.09C302,259.21,305.8,257,312.47,257Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M280.65,402l-4.46-4.22c25-26.46,34.22-68.15,33.49-79.53-.38-5.83-2.25-12.35-4.24-19.26-2.12-7.37-4.52-15.72-5.54-24.79-.95-8.42,0-13.86,2.87-17.11s6.81-3.24,9.43-3.23H336V260H312.19c-2.29,0-3.85.08-4.84,1.19s-2.28,4-1.34,12.33c1,8.55,3.19,16.29,5.34,23.77,2.08,7.24,4,14.07,4.46,20.56C316.59,330,307,374.23,280.65,402Z"
            style={{ fill: "#dbdbdb" }}
          ></path>
          <path
            d="M348.62,327.08c1.4,5.16,5.81,8.44,9.85,7.34s6.19-6.17,4.78-11.32-5.82-8.45-9.86-7.35S347.21,321.93,348.62,327.08Z"
            style={{ fill: "#dbdbdb" }}
          ></path>
          <path
            d="M350.12,326.67c1.25,4.6,5.07,7.56,8.53,6.62s5.24-5.43,4-10-5.07-7.56-8.52-6.62S348.87,322.07,350.12,326.67Z"
            style={{ fill: "#fff" }}
          ></path>
          <path
            d="M330.93,326.25c-1.11-5.19-2.31-10.36-3.35-15.56s-2-10.41-2.81-15.64c-.79-4.87-1.64-9.79-1.95-14.72-.31-5.15,0-10.35,2.5-15a.08.08,0,0,0-.14-.08c-2.57,3.75-3.41,8.26-3.55,12.73a86.37,86.37,0,0,0,1.3,14.7,315.87,315.87,0,0,0,6,31.69c1.45,5.91,3.32,11.72,5.32,17.46a.07.07,0,0,0,.14,0Q332.6,334,330.93,326.25Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M238.36,364v21H220.44V369.1s-10-5.05-12-23.42c-1.8-16.64,11.48-38.85,14-42.88l11.41-.37v4.09s-7.51,15.06-8.42,22.79C222.72,352.6,238.36,364,238.36,364Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M283.43,389.91c-2.42.78-72.11-2-74.72-3.69-.31-.19-1.55-13.6-1.55-13.6l8.06-51.49,45.75.61-8.83,44s10.07,4.63,18.39,8.68c0,0,0,0,0,0,5.12,2.49,9.57,4.76,10.59,5.58C283.79,382.16,285.85,389.13,283.43,389.91Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M283.44,389.91c-2.43.78-72.12-2-74.72-3.69-.32-.19-1.57-13.59-1.57-13.59l2.49-15.87,43.89,2-1.39,6.92s10.07,4.64,18.39,8.68l0,0c5.11,2.49,9.57,4.76,10.59,5.58C283.79,382.17,285.85,389.13,283.44,389.91Z"
            style={{ fill: "#ebebeb" }}
          ></path>
          <path
            d="M283.39,390c-2.46.77-72.61-.87-75.24-2.63-1-.65-1.36-10.88-1.44-23.26v-.39l45.26.55,0,.77s26.57,12.63,29.26,14.87S285.86,389.23,283.39,390Z"
            style={{ fill: "#c7c7c7" }}
          ></path>
          <path
            d="M282.66,387.25c-11.81-.56-59.53-1.73-71.25-1.39-.1,0-.1.07,0,.07,11.7.82,59.42,1.6,71.25,1.52C282.91,387.44,282.91,387.26,282.66,387.25Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M255.74,365.25c-4.63-1-10.34-.39-14,2.84-.15.13,0,.32.19.28a65.34,65.34,0,0,1,13.75-2.53A.3.3,0,0,0,255.74,365.25Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M259.05,367.36c-4.63-1-10.34-.4-14,2.83-.14.13,0,.33.19.28A65.34,65.34,0,0,1,259,367.94.29.29,0,0,0,259.05,367.36Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M262.36,369.46c-4.63-1-10.34-.4-14,2.84-.14.12,0,.32.19.27a66,66,0,0,1,13.75-2.52A.3.3,0,0,0,262.36,369.46Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M256,359.09l-51.07-2.33s17.66-71.67,15.78-74c-2-2.51-69.34,16-84.13-2.34-15.14-18.79,0-50.24,0-50.24h51.77s0,5.76-3.52,14.38c0,0,58.7-10.87,74.17-2.69,3.05,1.62,14,10.66,14.18,19.23C274.08,299,256,359.09,256,359.09Z"
            style={{ fill: "#455a64" }}
          ></path>
          <path
            d="M256.49,349.84c-6.06-.76-12.14-1.23-18.23-1.68s-12.17-.82-18.27-1.06c-3.43-.13-6.87-.1-10.31-.23a.09.09,0,0,0,0,.18c3.06.22,6.11.6,9.17.84s6,.46,9.06.66c6.08.41,12.17.74,18.26,1.12,3.44.21,6.87.32,10.31.4A.12.12,0,0,0,256.49,349.84Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M158.23,234.51a3.61,3.61,0,0,1-.26.61.08.08,0,0,0,0,.1c-.6,1.87-.85,3.85-1.43,5.73a9,9,0,0,1-3.46,4.94c-3.54,2.46-7.79,3.57-11.91,4.59a.12.12,0,0,0,0,.23,22.61,22.61,0,0,0,7-1.07,18.62,18.62,0,0,0,5.92-2.84,9.3,9.3,0,0,0,3.4-5.12,33.33,33.33,0,0,0,.59-3.29,26.19,26.19,0,0,0,.41-3.85A.18.18,0,0,0,158.23,234.51Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M193.16,242a52.46,52.46,0,0,0-8.2,3.13l-.13.06a3,3,0,0,0,.12-.5c0-.2.06-.39.1-.59s0-.41.06-.62l0-.32v0a2.47,2.47,0,0,0,1.76-.91,6.3,6.3,0,0,0,1.09-2.58c.31-1.16.6-2.34.85-3.52s.52-2.63.73-4a24.9,24.9,0,0,0,.45-3.93.18.18,0,0,0-.36,0c-.31,1.21-.45,2.46-.68,3.68s-.49,2.45-.77,3.67-.58,2.44-.92,3.64-.6,2.63-1.84,3c-2.56.73-1.41-5-1.3-6.14.26-2.6.42-5.26.88-7.84,0-.1-.15-.15-.17,0-.56,2.37-1.19,4.7-1.61,7.1-.21,1.18-.36,2.37-.49,3.55a5.58,5.58,0,0,0,.24,3.06,2.25,2.25,0,0,0,1.69,1.25l-.08.27c-.06.19-.12.38-.17.57s-.09.39-.13.58a1.47,1.47,0,0,0-.09.71.29.29,0,0,0,.13.16c-1.09.47-2.19.94-3.27,1.45a28,28,0,0,0-3.93,1.91c-.15.07,0,.27.11.24a29.87,29.87,0,0,0,4.12-1.49c1.37-.52,2.72-1.08,4.08-1.65a51.1,51.1,0,0,0,7.79-3.63A.13.13,0,0,0,193.16,242Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M271.66,254.59a22.93,22.93,0,0,0-10.1-12.39c-4.87-2.69-10.55-3.41-16-3.58-6.34-.19-12.72.14-19.05.54-6.74.42-13.48,1.06-20.18,2s-13.28,2.09-19.87,3.51c-1.58.34-3.15.76-4.72,1.2-.12,0-.1.26,0,.24,6.55-.92,13.07-2,19.62-2.9s13.17-1.61,19.79-2.11,13.17-.78,19.76-.88c5.4-.08,11,0,16.13,1.74a20,20,0,0,1,6.91,3.85,20.89,20.89,0,0,1,4.8,6.31c2.7,5.31,2.95,11.4,3.22,17.28.78,17.45-11.77,72.9-14,81.81a.33.33,0,0,0,.63.16c2.51-10.06,15-62.44,15-78.18C273.61,266.91,273.84,260.51,271.66,254.59Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M228.21,276.72c-9.15.32-18.25,1.17-27.35,2.13s-18.27,2-27.43,2.64c-4.56.31-9.13.51-13.7.54a36,36,0,0,1-11.27-1.26,15.48,15.48,0,0,1-8.76-7.19A32.29,32.29,0,0,1,135.87,262c-1.2-8.27,0-16.72,1.41-24.88.18-1,.35-2,.53-3.07,0-.1-.13-.14-.15,0-1.91,8.23-3.62,16.7-3,25.2a36.08,36.08,0,0,0,2.79,12.07,18.65,18.65,0,0,0,7.18,8.85,23.6,23.6,0,0,0,10.9,2.79,123.9,123.9,0,0,0,13.21-.21c9.38-.49,18.72-1.53,28.05-2.57s18.6-2.06,27.94-2.56c1-.05,2.07-.1,3.1-.13-1.41,8.95-13.41,62.57-14.08,66.81-.07.42.31.55.41.13,2-8.36,13.7-62,14.47-67.25A.38.38,0,0,0,228.21,276.72Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M133.61,236.57c.14.2,68.55,5.46,69.27,4.82,1-.91-5.77-71-11.88-81.28-1.31-2.19-6.32-3.34-10.71-3.3a19.1,19.1,0,0,0-3.41.29l-.11,0a8.14,8.14,0,0,0-2.59.91c-13.14,8.2-27.16,40.58-30.69,50.38C137.64,224.55,133.1,235.85,133.61,236.57Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M187.85,169.05c-3.4,0-9.14-5.49-10.28-10.64-.08-.36,1.33-3.43,2.85-7.25.92-2.33,1.89-4.93,2.6-7.37.14-.51,14.23,8.17,14.23,8.17a40.5,40.5,0,0,0-4.2,8.95,5.77,5.77,0,0,0-.19,1,1.22,1.22,0,0,1,0,.17C192.59,164.11,191.48,169.1,187.85,169.05Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M192.86,161.94a1.22,1.22,0,0,1,0,.17,9.73,9.73,0,0,1-1.59-.37c-9-2.82-8.06-14.8-7.68-17.79,2.61,1.18,13.69,8,13.69,8a41.08,41.08,0,0,0-4.21,8.95A6.76,6.76,0,0,0,192.86,161.94Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M184.27,125.05c-2.47,5.38-1.71,22,1.78,26.12,5.07,6,14.47,7.81,19.86,1.47,5.22-6.15,3.85-27.76-.15-31.65C199.85,115.27,187.93,117.12,184.27,125.05Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M198.75,136.89s-.08.06-.08.11c.08,1.11,0,2.41-1,2.82,0,0,0,.07,0,.06C198.9,139.66,199,137.94,198.75,136.89Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M197.7,135.77c-1.8-.07-1.79,3.55-.12,3.61S199.22,135.82,197.7,135.77Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M205.23,137.07s.09.05.08.1c0,1.11.12,2.4,1.13,2.77,0,0,0,.07,0,.06C205.2,139.83,205,138.12,205.23,137.07Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M206.23,135.9c1.79-.14,1.94,3.47.27,3.59S204.72,136,206.23,135.9Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M196.28,134.12a13.53,13.53,0,0,0,1.39-.5,2.34,2.34,0,0,0,1.33-.77.77.77,0,0,0-.12-.93,1.89,1.89,0,0,0-1.91-.19,2.75,2.75,0,0,0-1.6,1.21A.82.82,0,0,0,196.28,134.12Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M207.62,134.07a12.17,12.17,0,0,1-1.44-.37,2.32,2.32,0,0,1-1.39-.65.77.77,0,0,1,0-.93,1.89,1.89,0,0,1,1.89-.36,2.76,2.76,0,0,1,1.7,1.06A.81.81,0,0,1,207.62,134.07Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M197.73,147.28c.27.26.54.62,1,.66a3,3,0,0,0,1.2-.29s.07,0,.05.06a1.51,1.51,0,0,1-1.42.61,1.18,1.18,0,0,1-.88-1C197.61,147.27,197.69,147.24,197.73,147.28Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M198.9,143.93a3.81,3.81,0,0,0,2.55,1.69,4.82,4.82,0,0,0,1.37.06,1.09,1.09,0,0,0,.26,0l.25,0a.28.28,0,0,0,.22-.25h0a.41.41,0,0,0,0-.11h0v-.1c0-.86-.07-2.17-.07-2.17.32.16,1.93.88,1.9.43a57,57,0,0,0-1.5-11.53.1.1,0,0,0-.2,0c.08,3.59.78,7.14.92,10.74a6.77,6.77,0,0,0-1.8-.54c-.12,0,.21,2.53.17,2.92a.16.16,0,0,1,0,0,5.31,5.31,0,0,1-3.94-1.22C198.93,143.77,198.84,143.84,198.9,143.93Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M202.31,145.24a4.46,4.46,0,0,1-1.81,1.41,2.05,2.05,0,0,1-1.23.08c-.89-.23-.92-1-.76-1.76a5.44,5.44,0,0,1,.4-1.07A5.84,5.84,0,0,0,202.31,145.24Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M200.5,146.65a2.05,2.05,0,0,1-1.23.08c-.89-.23-.92-1-.76-1.76A2.1,2.1,0,0,1,200.5,146.65Z"
            style={{
              fill: "#ff9bbc",
            }}
          ></path>
          <path
            d="M208.15,126.48c-.61-1.42-1.32-2.85-2.18-3.14s-1.41,1.81-3.36,1.94c-2.62.18-3.89-2.23-7.56-2.49-5.28-.36-7.6,4-7.72,11.52-.11,6.68-4.15,7.31-4.15,7.31s-2.45-14.73,1.7-19.61,13.68-7,20.08-2.38C207.29,121.32,208.15,126.48,208.15,126.48Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M186.55,139s-3.07-5.67-5.6-4.64-.65,9,2,10.33a2.87,2.87,0,0,0,4-1.09Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M181.55,136.61a0,0,0,0,0,0,.07c1.87,1,2.69,3,3.2,4.93a1.58,1.58,0,0,0-2.3-.7c-.06,0,0,.12,0,.11a1.78,1.78,0,0,1,1.86.83,8.93,8.93,0,0,1,.74,1.67c.07.18.4.13.35-.08v-.05C185.74,140.89,184.2,137.17,181.55,136.61Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M207.52,122.09c-1.55-.37-10.14-.11-14,1.55s-10.72,7.21-11.07,7.5-2.12-13.87,9.37-16.45C204.33,111.87,207.52,122.09,207.52,122.09Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M183.11,130.56s7.59-10,11.81-12.3,13.67-3.58,19.52-1c4.55,2-6.57,7.86-6.57,7.86a3.16,3.16,0,0,0-1.78-2.2c-2.84-1.13-8.24-.26-11.32.77C190.89,125,183.11,130.56,183.11,130.56Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M183.11,130.61s7.59-10.06,11.81-12.35,13.67-3.58,19.52-1c4.55,2-6.57,7.86-6.57,7.86a3.16,3.16,0,0,0-1.78-2.2c-2.84-1.13-8.24-.26-11.32.77C190.89,125,183.11,130.61,183.11,130.61Z"
            style={{ opacity: 0.2 }}
          ></path>
          <path
            d="M169.85,176.71c-.64,19.72,6.64,56.65,12,59.16,17.3,8.08,46.41,8.59,56.38,8.68,4.3,0,10.9-30.58,6.64-32.3-2.83-1.14-45.51-1.15-46.26-2.67s-10.92-23.48-15.31-35.64C177.47,157.77,170.22,165.13,169.85,176.71Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M240.29,211.84s13.07.8,21.58,1.72c4.76.51,12.83,2.12,16.14,4.09,5,3,23.84,18.48,20.18,23.14-3.32,4.21-17.84-11.18-17.84-11.18s16,14.23,11.1,18.58-19-15.24-19-15.24,16.14,15,10.35,18.68c-4.37,2.77-18.14-14.24-18.14-14.24s13.79,13,9.41,16c-4.84,3.37-18.53-11.54-18.53-11.54-12.43,5.88-20.75,3.59-26.48,1.26C227.65,242.59,240.29,211.84,240.29,211.84Z"
            style={{ fill: "#f7a9a0" }}
          ></path>
          <path
            d="M275.12,224.33c1.94,1.6,3.92,3.21,5.71,5s3.53,3.61,5.15,5.54a43.51,43.51,0,0,1,5.6,8.11c-3.13-5-9.45-11.4-11.25-13.17s-3.49-3.63-5.28-5.4C275,224.35,275.07,224.29,275.12,224.33Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M268.61,230.69c2.39,2.15,4.84,4.21,7.14,6.47s4.26,4.59,6.39,7c.16.18,0,.21-.17,0-2.22-2.31-4.45-4.28-6.69-6.57s-4.41-4.67-6.73-6.87C268.51,230.71,268.57,230.66,268.61,230.69Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M262,235.14a71.71,71.71,0,0,1,10.17,10.73c.15.19-.05.21-.22,0-3.31-3.63-5.88-6.5-10.06-10.61C261.86,235.21,262,235.08,262,235.14Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M276.36,216.07a32,32,0,0,0-9.77-2.45c-7.26-.89-14.56-1.47-21.86-2s-14.71-1-22.07-1.27q-6.21-.24-12.42-.37c-4.14-.08-5,.07-9.16.12-.11,0-.1.15,0,.16,7.25.38,11.25.68,18.5,1.06s14.48.81,21.71,1.31,14.34,1,21.48,1.8A56.3,56.3,0,0,1,273,216.08a29.87,29.87,0,0,1,9,5.24c3.06,2.41,14.53,13.44,15.58,14.87.13.17.18.12.11-.1C296.86,233.1,283.07,219.2,276.36,216.07Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M190.5,189.44,169.23,201.5s-.9-26.88,1.07-34.86c2.22-9,6.32-5.88,10.94,1.6S190.5,189.44,190.5,189.44Z"
            style={{ fill: "#F9CC01" }}
          ></path>
          <path
            d="M190.5,189.44,169.23,201.5s-.9-26.88,1.07-34.86c2.22-9,6.32-5.88,10.94,1.6S190.5,189.44,190.5,189.44Z"
            style={{ opacity: 0.1 }}
          ></path>
          <path
            d="M187.57,186c-2.91,1.17-11.17,5.91-12.54,6.68-.72.4-3.54,2.15-4.26,2.55-.09.05,0,.18.09.13,1.39-.76,2.85-1.38,4.25-2.13s10-5.27,12.52-7.13A.06.06,0,0,0,187.57,186Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M169.3,177.41c0-.11-.16-.1-.17,0q-.27,3.42-.4,6.85a20.29,20.29,0,0,1-.36-3.57,0,0,0,1,0-.08,0,16,16,0,0,0,.43,4.12c-.06,1.59-.11,3.19-.13,4.78-.06,4.05-.17,8.12,0,12.17a.28.28,0,0,0,.43.22c.72-.44,1.43-.9,2.12-1.39.08-.06,0-.19-.07-.15-.65.27-1.28.57-1.91.87.16-3.91.13-7.83.18-11.75S169.41,181.46,169.3,177.41Z"
            style={{ fill: "#263238" }}
          ></path>
          <path
            d="M187.15,179.49c-.33-1.25-.67-2.49-1.05-3.73,0,0,0,0,0,0,.21.92.45,1.84.69,2.76-.77-1.74-1.56-3.46-2.42-5.13a0,0,0,0,0-.05,0c.93,2.71,2,5.37,3,8.06s2,5.26,3,7.89c-.45.35-.89.69-1.35,1a.08.08,0,0,0,.09.14c.55-.28,1.1-.56,1.67-.81a.28.28,0,0,0,.17-.34C189.78,186.06,188.54,182.74,187.15,179.49Z"
            style={{ fill: "#263238" }}
          ></path>
        </g>
      </svg>
    </div>
  );
}
