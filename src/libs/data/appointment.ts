import { type appointment as TAppointment } from "../types";

export const appointment: TAppointment[] = [
  {
    name: "คุณหมอสมมุติ ทดสอบ",
    appointment: [
      {
        patients: "จรูณ ทดสอบ4",
        id: "6400004",
        service: "รักษารากฟัน",
        phone: "0956460428",
        price: "0.00",
        startTime: "11:00",
        duration: 30,
      },
      {
        patients: "จำปี ทดสอบ5",
        id: "6400005",
        service: "รักษารากฟัน",
        phone: "0956460428",
        price: "0.00",
        startTime: "1:00",
        duration: 30,
      },
    ],
  },
  {
    name: "คุณหมอวรภัทร ทดสอบ2",
    appointment: [
      {
        patients: "จรัญ ทดสอบ1",
        id: "6400001",
        service: "ขูดหินปูน",
        phone: "0935871489",
        price: "0.00",
        startTime: "10:00",
        duration: 30,
      },
      {
        patients: "จรัญ ทดสอบ2",
        id: "6400002",
        service: "ขูดหินปูน",
        phone: "0935871489",
        price: "0.00",
        startTime: "5:00",
        duration: 30,
      },
    ],
  },
  {
    name: "คุณหมอสมบัติ ทดสอบ3",
    appointment: [
      {
        patients: "จำรัส ทดสอบ3",
        id: "6400003",
        service: "ครอบฟัน",
        phone: "0854687449",
        price: "0.00",
        startTime: "9:00",
        duration: 45,
      },
    ],
  },
];
