import { useScrollProgress } from '../hooks/useScrollProgress'
export default function ProgressBar() {
  const p = useScrollProgress()
  return <div className="progress-bar" style={{ width: `${p}%` }} />
}
