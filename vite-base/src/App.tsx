import { DroneControls } from '@components/drone-controls/drone-controls.component'
import SimpleTable from '@components/simple-table/simple-table.component'
import { DroneContext } from '@providers/drone.provider'
import { useContext, useMemo } from 'react'
import { findDuplicateIds } from 'utils/find-duplicate-ids'


const App = () => {
  const {drone, instructions, snapshots} = useContext(DroneContext)


  const duplicateIds = useMemo(() => findDuplicateIds(snapshots) ,[snapshots])


  return (
    <div className='flex justify-center flex-col items-center bg-white text-center gap-12'>
      <h1>DRONE SYSTEM</h1>

      <div className="w-64 bg-white rounded-2xl border border-gray-300 p-4">
      <p className="text-gray-700 font-semibold">Current drone position</p>
      <div className='flex gap-8 justify-center'>
        <span className='font-bold text-blue-300'>X: {drone?.x}</span>
        <span className='font-bold text-red-300'>Y: {drone?.y}</span>
      </div>
      <p className="text-gray-700 font-semibold">Number of snapshots: {snapshots.length}</p>
      <p className="text-gray-700 font-semibold">Number of duplicate snapshots {duplicateIds.length}</p>
      <p>Instructions: {instructions}</p>
      </div>

    <DroneControls/>
    <SimpleTable/>
    </div>
  )
}

export default App
