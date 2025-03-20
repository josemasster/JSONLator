"use client";

import { useState } from "react"
import { Upload, ArrowDownToLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { languages } from "@/data/languages";
import { toast } from "sonner";
import { Spinner } from "./Spinner";
import { ShinyButton } from "./magicui/shiny-button";
import useTranslateJSON from "@/hooks/useTranslateJSON";
import confetti from "canvas-confetti";

export const FormJSON = () => {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [targetLang, setTargetLang] = useState('');
  const [loading, setLoading] = useState(false);
  const { jsonContent, jsonString, handleReadFile, downloadJsonFile, setJsonString } = useTranslateJSON({ files, targetLang })

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
    setJsonString("")
    handleReadFile(jsonFiles[0]);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files)
      const jsonFiles = uploadedFiles.filter((file) => file.type === "application/json")
      setFiles(jsonFiles)
      setJsonString("")
      handleReadFile(jsonFiles[0]);
    }
  }

  const handleToast = ({ title, description }: { title: string, description: string }) => {
    toast(title, {
      description,
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    })
  }

  const handleTranslate = async () => {
    try {
      if (!files[0]) {
        return handleToast({
          title: "A json cannot be translated at this time.",
          description: "Please upload a json file to continue."
        })
      }
  
      if (!targetLang) {
        return handleToast({
          title: "A json cannot be translated at this time.",
          description: "Please select a target language to continue."
        })
      }

      setJsonString("")
      setLoading(true)

      const request = {
        text: JSON.parse(jsonContent),
        targetLang
      }
      
      const data = await fetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const response = await data.json()
      
      setJsonString(response.body)
      handleToast({
        title: "Successful translation.",
        description: "The json file was translated successfully."
      })
      confetti()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
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
          <Select onValueChange={setTargetLang}>
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

        <Button className="w-full" size="lg" onClick={handleTranslate}>
          {
            loading 
              ? (
                  <Spinner />
                ) 
              : (
                  "Translate Now"
                )
          }
        </Button>

        {
          jsonString && (
            <ShinyButton className="w-full flex justify-center items-center py-3" onClick={() => downloadJsonFile(jsonString)}>
              <span className="w-full flex justify-center items-center gap-x-2 text-center">Download Translated JSON <ArrowDownToLine className="h-5 w-5" /></span>
            </ShinyButton>
          )
        }
      </div>
    </Card>
  )
}
