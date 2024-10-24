import { IoClose } from "react-icons/io5";
import { type appointmentDetails, type modalPosition } from "../libs/types";
import { FaClock, FaPen, FaPhone, FaTooth, FaUser } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa";

type AppointmentModalProps = {
  doctor: string;
  data: appointmentDetails;
  position?: modalPosition;
  onClose: () => void;
};

function AppointmentModal({
  doctor,
  data,
  position = { top: 0, left: 0 },
  onClose,
}: AppointmentModalProps) {
  const [hours, minutes] = data.startTime.split(":").map(Number);
  const endTime = `${
    hours + Math.floor((data.duration + minutes) / 60)
  }:${String((data.duration + minutes) % 60).padStart(2, "0")}`;
  return (
    <div
      className="absolute bg-white border border-black rounded whitespace-nowrap pt-1 z-20"
      style={{ top: position?.top, left: position?.left }}
    >
      <div className="flex justify-between gap-5 pl-2 pb-2">
        <div>
          <h3 className="text-[#1FBF92] font-semibold">นัดหมาย</h3>
          <p className="text-[#1FBF92] font-semibold">ทันตแพทย์ {doctor}</p>
        </div>
        <div className="flex items-start">
          <div className="bg-gray-200 rounded-full size-12 ml-1"></div>
          <button onClick={onClose}>
            <IoClose className="text-[#1FBF92] text-xl" />
          </button>
        </div>
      </div>
      <div className="w-full bg-[#BDBEC0] rounded">
        <div className="flex justify-between bg-white ml-3 rounded">
          <div>
            <div className="flex items-center gap-1">
              <FaUser className="text-[#1FBF92]" />
              <p>
                {data.id} | {data.patients}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaTooth className="text-[#1FBF92]" />
              <p>บริการ {data.service}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaPhone className="text-[#1FBF92]" />
              <p>{data.phone}</p>
            </div>
            <div className="flex items-center gap-1">
              <p>ประเมินค่าใช้จ่าย {data.price}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="text-[#1FBF92]" />
              <p>
                {data.startTime}-{endTime}
              </p>
            </div>
          </div>
          <div className="flex items-end justify-end gap-5 pb-3 pr-3">
            <FaPrint className="text-2xl text-[#1FBF92]" />
            <FaPen className="text-2xl text-[#1FBF92]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;
