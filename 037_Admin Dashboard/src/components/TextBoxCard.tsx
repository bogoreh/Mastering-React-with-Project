import user from "../assets/user.jpg";
import MaterialIcon from "./MaterialIcon";

const TextBoxCard = () => {
  return (
    <div className="bg-white w-1/2 h-[40] rounded-xl px-3 py-2 flex flex-col gap-5  ">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-semibold ">Esther Howard</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 justify-end">
          <p className="my-auto bg-[#545cd4] text-white p-2 rounded-md ">
            Are you ready?
          </p>
          <img src={user} className="w-10 h-10 rounded-full" alt="" />
        </div>
        <div className="flex flex-row gap-2 ">
          <img src={user} className="w-10 h-10 rounded-full" alt="" />
          <p className="my-auto bg-[#545cd4] text-white p-2 rounded-md ">
            Give me a minute
          </p>
        </div>
      </div>
      <div className="rounded-xl">
        <div className="flex flex-col  bg-[#f9f9fb] px-2 py-2">
          <textarea
            name=""
            id=""
            cols={35}
            rows={2}
            placeholder="Type your messages"
            className="bg-inherit text-black "
          />
          <div className="flex flex-row justify-between px-3 mt-4">
            <div className="flex flex-row gap-2">
              <MaterialIcon className="text-xl" icon="mood" />
              <MaterialIcon className="text-xl" icon="attach_file" />
            </div>
            <button className="bg-[#545cd4] text-white font-medium px-3 py-1 rounded-md ">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBoxCard;
