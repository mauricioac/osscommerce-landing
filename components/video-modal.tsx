"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface VideoModalProps {
  videoUrl: string
  buttonText?: string
  buttonClassName?: string
  buttonSize?: "default" | "sm" | "lg" | "icon"
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function VideoModal({
  videoUrl,
  buttonText = "Watch Video",
  buttonClassName = "",
  buttonSize = "lg",
  buttonVariant = "outline"
}: VideoModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={buttonSize}
          variant={buttonVariant}
          className={buttonClassName}
        >
          <Play className="mr-2 h-5 w-5" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">How It Works</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video bg-gray-900 rounded-b-lg overflow-hidden">
          {open && (
            <iframe
              src={videoUrl}
              title="Product Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
