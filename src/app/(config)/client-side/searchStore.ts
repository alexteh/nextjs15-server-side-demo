import { create } from 'zustand'

type SearchResult = {
  data: any
  url: string
  timestamp: string
  error?: string
}

interface SearchStore {
  result: SearchResult | null
  setResult: (url: string, data: any, error?: string) => void
  clearResult: () => void
}

export const useSearchStore = create<SearchStore>(set => ({
  result: null,
  setResult: (url, data, error) =>
    set({
      result: {
        data,
        url,
        timestamp: new Date().toISOString(),
        error,
      },
    }),
  clearResult: () => set({ result: null }),
}))
