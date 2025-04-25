"use client"

import React from "react"
import { useState, useEffect, useActionState, startTransition } from "react"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { createCategory } from "../lib/actions"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  category: z.string().min(1, "Category name is required"),
})

type FormValues = z.infer<typeof formSchema>

const initialState = { error: "" }

export default function FormCategory() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [state, formAction] = useActionState(createCategory, initialState)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  })

  // Reset form and show toast when server action completes
  useEffect(() => {
    if (isSubmitting && typeof state === 'object') {
      if (state.error === "") {
        // Success case
        form.reset()
        toast({
          title: "Success",
          description: "Category created successfully",
        })
      } else if (state.error) {
        // Error case
        toast({
          title: "Error",
          description: state.error,
          variant: "destructive",
        })
      }
      setIsSubmitting(false)
    }
  }, [state, form, toast])

  return (
    <Form {...form}>
      {/* Cara 1: Gunakan form.handleSubmit dengan startTransition */}
      <form 
        onSubmit={form.handleSubmit((data) => {
          setIsSubmitting(true);
          const formData = new FormData();
          formData.append("category", data.category);
          
          startTransition(() => {
            formAction(formData);
          });
        })}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter category name" {...field} />
              </FormControl>
              <FormDescription>Enter the name for your new category.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {state?.error && <p className="text-sm font-medium text-destructive">{state.error}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating...
            </>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              Create Category
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}