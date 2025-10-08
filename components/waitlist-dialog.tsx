"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewsletterForm } from "@/components/newsletter-form"
import { Bell } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface WaitlistDialogProps {
  appName: string
  appId: string
  buttonVariant?: "default" | "outline"
  buttonText?: string
}

export function WaitlistDialog({
  appName,
  appId,
  buttonVariant = "outline",
  buttonText
}: WaitlistDialogProps) {
  const [open, setOpen] = useState(false)
  const { t } = useLocale()

  const handleSuccess = () => {
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }

  const getButtonClasses = () => {
    if (buttonVariant === "outline") {
      return "border-2 border-[#1E0D43] text-[#1E0D43] hover:bg-[#1E0D43]/10 w-full font-semibold"
    } else if (buttonVariant === "default") {
      return "bg-[#1E0D43] text-white w-full font-semibold"
    }
    return "bg-[#1E0D43] text-white w-full font-semibold"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          className={getButtonClasses()}
        >
          <Bell className="mr-2 h-4 w-4" />
          {buttonText || t('waitlist.button')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t('waitlist.title').replace('{appName}', appName)}</DialogTitle>
          <DialogDescription className="text-base">
            {t('waitlist.description').replace('{appName}', appName)}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <NewsletterForm
            size="md"
            placeholder={t('waitlist.placeholder')}
            buttonText={t('waitlist.button')}
            showIcon={false}
            variant="light"
            source={`waitlist-${appId}`}
            groups={process.env.NEXT_PUBLIC_NEWSLETTER_BUNDLES_GROUP_ID ? [process.env.NEXT_PUBLIC_NEWSLETTER_BUNDLES_GROUP_ID] : []}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
