export const getTimeSlots = () => {
  const timeSlots: string[] = [];
  const minutesInDay = 24 * 60;
  const interval = 15;

  for (let minutes = 0; minutes < minutesInDay; minutes += interval) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const formattedTime = `${hours}:${String(mins).padStart(2, "0")}`;

    timeSlots.push(formattedTime);
  }

  return timeSlots;
};
