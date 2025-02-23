"use client";

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { languages } from "@/data/languages";

export const FormJSON = () => {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    const jsonFiles = droppedFiles.filter((file) => file.type === "application/json")
    setFiles(jsonFiles)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files)
      const jsonFiles = uploadedFiles.filter((file) => file.type === "application/json")
      setFiles(jsonFiles)
    }
  }

  return (
    <Card className="p-6">
      <div
        className={`relative rounded-lg border-2 border-dashed transition-colors ${
          dragActive ? "border-primary" : "border-gray-700"
        } p-8 text-center`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="application/json"
          multiple
          onChange={handleChange}
        />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
          <Upload className="h-10 w-10 dark:text-gray-400 text-neutral-700" />
          <span className="text-lg font-medium">Drag and drop your JSON files here</span>
          <span className="text-sm dark:text-gray-400 text-neutral-700">or click to select files</span>
        </label>
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file) => (
              <div key={file.name} className="text-sm dark:text-gray-400 text-neutral-700">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium dark:text-gray-200 text-neutral-700">Target Language</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {
                languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.name}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" size="lg">
          Translate Now
        </Button>
      </div>
    </Card>
  )
}
