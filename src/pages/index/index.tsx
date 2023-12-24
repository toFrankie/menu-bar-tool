import { useState } from 'react'

export default function Index() {
  const [input, setInput] = useState('')
  const [ouput, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInput(value)
  }

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    const decoded = decodeURIComponent(value.trim())
    setOutput(decoded)
  }

  return (
    <div>
      <div>Input</div>
      <input value={input} onChange={handleInputChange} onBlur={handleInputBlur} />
      <div>Output</div>
      <input value={ouput} />
    </div>
  )
}
