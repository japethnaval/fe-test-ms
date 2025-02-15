import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'


export type DroneState = {
    x: number,
    y: number
}

export type Billboard = {
  id: string,
  x: string,
  y: string,
  photosTaken: number,
  address: string
  billboardText: string
  image: string
}

export type Snapshot = DroneState & { id: string }

export interface DroneProviderProps {
  instructions: string
  drone: DroneState
  snapshots: Snapshot[]
  billboards: Billboard[] | undefined
  handleInstructionUpdate: (newInstruction: string) => void
  setDrone: React.Dispatch<React.SetStateAction<DroneState>>
  handleSetSnapShots: (newSnap: Snapshot) => void
}

export const DroneContext = createContext<DroneProviderProps>(
  {} as DroneProviderProps,
)

export const DroneProvider = ({
  children,
}: {
  children: ReactNode
}) => {

  const [snapshots, setSnapShots] = useState<Snapshot[]>([])
  const [instructions, setInstructions] = useState<string>('')
  const [drone, setDrone] = useState<DroneState>({x: 0, y: 0})
  const [billboards, setBillboards] = useState<Billboard[]>()

  const handleSetSnapShots = useCallback(async(newSnap: Snapshot ) => {
    try {
      const response = await fetch(`http://localhost:4001/instruct-drone?instructions=${newSnap.id}`)
      const parseResult = await response.json()

      setBillboards([...(billboards || []), ...parseResult.billboards])

      setSnapShots((prevSnaps) => [...prevSnaps, newSnap])
      
    } catch (error) {

      console.log(error)
    }
  }, [billboards])

  const handleInstructionUpdate = useCallback((newInstruction: string) => {
    setInstructions((prev) => prev + newInstruction);
  }, [])


  const contextValue = useMemo(() => ({
    snapshots,
    drone,
    billboards,
    instructions,
    handleInstructionUpdate,
    setDrone,
    handleSetSnapShots
  }), [snapshots, drone, billboards, instructions, handleInstructionUpdate, handleSetSnapShots])

  return (
    <DroneContext.Provider value={contextValue}>
      {children}
    </DroneContext.Provider>
  )
}
