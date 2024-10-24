import { MdDoNotDisturb } from "react-icons/md";

type DoctorCardProps = {
  name: string;
  id: string;
};

function DoctorCard({ name, id }: DoctorCardProps) {
  return (
    <div className="flex gap-1 bg-white rounded shadow-lg overflow-hidden">
      <div>
        <div className="bg-[#1FBF92] text-white rounded-[0_0_70%_30%_/_0_20%_60%_0] px-5 py-1">
          01
        </div>
        <div className="bg-gray-200 rounded-full size-12 ml-1"></div>
      </div>
      <div className="flex-1 pt-1 pr-1">
        <div className="flex">
          <div className="flex-1">
            <h4 className="font-semibold">{name}</h4>
            <p>{id}</p>
          </div>
          <div className="bg-[#344973] text-white text-sm h-fit rounded-se p-1">
            05
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button>
            <MdDoNotDisturb className="text-lg text-red-600" />
          </button>
        </div>
        <p className="text-gray-500 text-sm text-center">9 วัน</p>
      </div>
    </div>
  );
}

export default DoctorCard;
