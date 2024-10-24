type TimeSlotProps = {
  time: string;
  isTimeShow?: boolean;
};

function TimeSlot({ time, isTimeShow = true }: TimeSlotProps) {
  const [, minutes] = time.split(":").map(Number);

  return (
    <div className={"h-10" + (minutes % 30 !== 0 ? " bg-[#F7F7F7]" : "")}>
      {isTimeShow && (
        <p className={"pl-1 pt-1" + (minutes === 0 ? " font-bold" : "")}>
          {time}
        </p>
      )}
    </div>
  );
}

export default TimeSlot;
