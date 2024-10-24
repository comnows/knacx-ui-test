export type appointmentDetails = {
  patients: string;
  id: string;
  service: string;
  phone: string;
  price: string;
  startTime: string;
  duration: number;
};

export type appointment = {
  name: string;
  appointment: appointmentDetails[];
};

export type modalPosition = { top: number; left: number };
