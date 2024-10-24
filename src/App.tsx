import { PiArrowClockwiseBold } from "react-icons/pi";
import "./App.css";
import TimeSlot from "./components/TimeSlot";
import { getTimeSlots } from "./libs/schedule";
import { FaRegClock } from "react-icons/fa6";
import DoctorCard from "./components/card/DoctorCard";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { appointment } from "./libs/data/appointment";
import {
  type modalPosition as TModalPosition,
  type appointment as TAppointment,
  type appointmentDetails,
} from "./libs/types";
import AppointmentModal from "./components/AppointmentModal";

function App() {
  const [selectedName, setSelectedName] = useState("คุณหมอสมมุติ ทดสอบ");
  const [filteredData, setFilteredData] = useState<TAppointment>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<appointmentDetails>();
  const [modalPosition, setModalPosition] = useState<TModalPosition>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const defaultData = appointment[0];
    setSelectedName(defaultData.name);
    setFilteredData(defaultData);
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedName(selectedValue);

    const filtered = appointment.find((item) => item.name === selectedValue);
    setFilteredData(filtered);
  };

  const handleOpenModal = (
    appointment: appointmentDetails,
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const parentRect =
      event.currentTarget.parentElement?.getBoundingClientRect();
    const cardRect = event.currentTarget.getBoundingClientRect();

    setModalData(appointment);
    if (parentRect) {
      setModalPosition({
        top: cardRect.top,
        left: cardRect.right + 8,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(undefined);
    setIsModalOpen(false);
  };

  const timeSlots = getTimeSlots();

  return (
    <>
      <div className="container flex flex-col lg:flex-row mx-auto">
        <div className="flex-1 lg:grow-[3] xl:grow-[2] p-4">
          <select
            className="w-full border-2 rounded p-2 mb-2"
            value={selectedName}
            onChange={handleSelectChange}
          >
            <option value="คุณหมอสมมุติ ทดสอบ">คุณหมอสมมุติ ทดสอบ</option>
            <option value="คุณหมอวรภัทร ทดสอบ2">คุณหมอวรภัทร ทดสอบ2</option>
            <option value="คุณหมอสมบัติ ทดสอบ3">คุณหมอสมบัติ ทดสอบ3</option>
          </select>
          <div className="flex justify-between bg-[#344973] text-white rounded px-2 py-3">
            <h2 className="font-semibold text-lg">ทันตแพทย์</h2>
            <div className="bg-gray-200 rounded-full size-10 -my-1 -ml-1"></div>
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#9DDDCC] rounded py-1">
            <FaRegClock className="text-white" />
            <p className="text-white font-medium text-center">
              เวลาเข้างาน 09:00 - 19:00 น.
            </p>
          </div>
          <div className="flex gap-5 overflow-y-scroll h-[calc(100vh-180px)] relative">
            <div className="w-20">
              {timeSlots.map((time) => (
                <TimeSlot key={time + "left"} time={time} />
              ))}
            </div>
            <div className="relative overflow-visible flex-1">
              {timeSlots.map((time) => (
                <TimeSlot key={time + "right"} time={time} isTimeShow={false} />
              ))}
              {filteredData &&
                filteredData.appointment.map((item) => {
                  const [hours, minutes] = item.startTime
                    .split(":")
                    .map(Number);
                  const lenghtFromTop = hours * 4 * 40 + (minutes / 15) * 40;
                  const height = (item.duration / 15) * 40;
                  const timeEnd = `${
                    hours + Math.floor((item.duration + minutes) / 60)
                  }:${String((item.duration + minutes) % 60).padStart(2, "0")}`;

                  return (
                    <div
                      key={item.id}
                      className="absolute bg-[#F1F4FB] hover:opacity-85 rounded shadow-[0_0_10px_-3px_rgb(0_0_0_/_0.5)] overflow-hidden cursor-pointer"
                      style={{
                        top: `${lenghtFromTop}px`,
                        height: `${height}px`,
                      }}
                      onClick={(e) => {
                        handleOpenModal(item, e);
                      }}
                    >
                      <div className="size-full bg-[#F28705] ml-4 px-1">
                        <p>
                          {item.patients} | {item.service} | {item.id}
                        </p>
                        <p>
                          {item.phone} | {item.startTime}-{timeEnd} น.
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:grow-[7] xl:grow-[3] p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-medium">วันที่ 30 ม.ค. 2564</h1>
            <div className="flex gap-2">
              <div className="bg-[#D8E8F5] rounded px-10 py-2">
                <p className="text-center text-[#F28705]">
                  รายได้ทั้งหมด 0.00 บาท
                </p>
              </div>
              <button className="border-2 border-[#F28705] rounded shadow-lg px-3">
                <PiArrowClockwiseBold className="text-[#F28705]" />
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="flex-1">
              <div className="bg-[#1FBF92] rounded-t py-2">
                <p className="text-white text-center font-medium">
                  ห้องพิเศษ present ( 0 )
                </p>
              </div>
              <div className="bg-[#D8E8F5] h-[calc(100vh-120px)] shadow-lg rounded-b p-3"></div>
            </div>
            <div className="flex-1">
              <div className="bg-[#1FBF92] rounded-t py-2">
                <p className="text-white text-center font-medium">
                  แอดมิน ( 1 )
                </p>
              </div>
              <div className="bg-[#D8E8F5] h-[calc(100vh-120px)] shadow-lg rounded-b p-3">
                <DoctorCard name="วรภัทร บารมี" id="6401023" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-[#1FBF92] rounded-t py-2">
                <p className="text-white text-center font-medium">
                  จุดชำระเงิน ( 1 )
                </p>
              </div>
              <div className="bg-[#CFF4D3] h-[calc(100vh-120px)] shadow-lg rounded-b p-3">
                <DoctorCard name="วรภัทร บารมี" id="6401023" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AppointmentModal
          doctor={selectedName}
          data={modalData!}
          position={modalPosition}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
