

import { DroneContext } from "@providers/drone.provider";
import { useCallback, useContext } from "react";

const SimpleTable = () => {
  const { billboards } = useContext(DroneContext)

  const handleFetchDetails = useCallback((id: string) => async () => {
    const response = await fetch(`http://localhost:4001/get-billboard?id=${id}`)
    const parseResult = await response.json()
    console.log(parseResult)
  }, [])

  if (!billboards || billboards.length <= 0) {
    return <p>There are no records yet.</p>;
  }

  return (
    <div className="overflow-x-auto border border-gray-300 p-4">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-left text-gray-400 font-bold">id</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">address</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">position</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">image</th>
            <th className="px-4 py-2 text-left text-gray-400 font-bold">action</th>
          </tr>
        </thead>
        <tbody>
          {billboards?.map((billboard) => (
            <tr className="border-b" key={billboard.id}>
              <td className="px-4 py-2 text-gray-400">{billboard.id}</td>
              <td className="px-4 py-2 text-gray-400">{billboard.address}</td>
              <td className="px-4 py-2 text-gray-400">x{billboard.x}&nbsp;y{billboard.y}</td>
              <td className="px-4 py-2 text-gray-400">
                <img src={billboard.image} alt={billboard.billboardText}/>
              </td>
              <td className="px-4 py-2 flex flex-direction-row gap-1">
                <button className="border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleFetchDetails(billboard.id)} type="button" aria-label="view-details">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
