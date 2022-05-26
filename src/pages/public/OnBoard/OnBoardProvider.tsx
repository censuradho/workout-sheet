import { createContext, memo, ReactNode, useCallback, useContext, useEffect, useState  } from 'react'


interface Data  {
  gender?: string
  height?: number;
  weight?: number;
  goal?: string;
  fit_level?: string;
  chronic_problem?: string
}

interface OnBoardContextProps {
  onSave: (data: Partial<Data>) => void
  data: Partial<Data>
}

interface OnBoardProviderProps {
  children: ReactNode
}

const OnBoardContext = createContext<OnBoardContextProps | undefined>(undefined!)


function BaseOnBoardProvider ({ children }: OnBoardProviderProps) {
  const [data, setData] = useState<Partial<Data>>({})

  const handleSave = useCallback((data: Partial<Data>) => {
    setData(prevState => ({
      ...prevState,
      ...data
    }))
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <OnBoardContext.Provider value={{
      onSave: handleSave,
      data
    }}>
      {children}
    </OnBoardContext.Provider>
  )
}

export const useOnBoardContext = () => useContext(OnBoardContext)

export const OnBoardProvider = memo(BaseOnBoardProvider)