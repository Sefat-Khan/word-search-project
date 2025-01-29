import Button from "./button";
import Input from "./input";
import LeastUsedWord from "./leastUsedWord";
import MostUsedWord from "./mostUsedWord";

export default function sideBar() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-medium">Search</h3>
        <div className="p-2 my-4 border-t-1 border-gray-400">
          <Input />
          <Button />
        </div>
      </div>
      <div className="bg-white"></div>
      <MostUsedWord styles="bg-white" />
      <LeastUsedWord styles="bg-white" />
      <div className="bg-white"></div>
    </div>
  );
}
