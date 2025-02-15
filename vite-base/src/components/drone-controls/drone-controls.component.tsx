/* eslint-disable import/prefer-default-export */
import { DroneContext, Snapshot } from '@providers/drone.provider'
import React, { useCallback, useContext } from 'react'

export const DroneControls = () => {
    
     const {drone, setDrone, instructions, handleInstructionUpdate, handleSetSnapShots} = useContext(DroneContext)
    
    
      const handleDroneUpdate = useCallback((instruction: string) => () => {
        switch (instruction) {
          case 'x': {
            handleSetSnapShots({
              id: `${instructions}x` || instruction,
              ...drone
            } as Snapshot)
              break;
              // reset instrument value
          }
          // north
          case '^': {
            handleInstructionUpdate('^')
              return setDrone((prev) => ({
                ...prev,
                x: prev.x + 1
              }))
    
          }
          // south
          case 'v': {
            if(drone.x <=0) return null
            handleInstructionUpdate('v')
            return setDrone((prev) => ({
              ...prev,
              x: prev.x - 1
            }))
          }
          // east
          case '>': {
            handleInstructionUpdate('>')
            return setDrone((prev) => ({
              ...prev,
              y: prev.y + 1
            }))
          }
          // west
          case '<': {
            if(drone.y <=0) return null
            handleInstructionUpdate('<')
            return setDrone((prev) => ({
              ...prev,
              y: prev.y - 1
            }))
          }
    
          default: 
            break;
        }
    
        return null
    
      }, [drone, handleInstructionUpdate, handleSetSnapShots, instructions, setDrone])
    
    
    return(
    <div className="flex flex-col items-center space-y-2">
    {/* Top Button */}
    <button onClick={handleDroneUpdate('^')} className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" aria-label='top'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 96 960 960"
        width="20"
        className="transform rotate-270"
      >
        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
      </svg>
    </button>

    <div className="flex space-x-2">
      {/* Left Button */}
      <button  onClick={handleDroneUpdate('<')} className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" aria-label='left'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
          className="transform rotate-180"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </button>

      {/* Center Button */}
      <button onClick={handleDroneUpdate('x')} className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" aria-label='center'>
        SNAP
      </button>

      {/* Right Button */}
      <button onClick={handleDroneUpdate('>')} className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" aria-label='right'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 96 960 960"
          width="20"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </button>
    </div>

    {/* Bottom Button */}
    <button onClick={handleDroneUpdate('v')} className="rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" aria-label='bottom'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 96 960 960"
        width="20"
        className="transform rotate-90"
      >
        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
      </svg>
    </button>
  </div>
  )
}
