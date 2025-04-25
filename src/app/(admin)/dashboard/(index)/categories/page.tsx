
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Plus, Search, MoreHorizontal, Pencil, Trash } from 'lucide-react'
import Link from "next/link"


import { Card,CardHeader,CardTitle,CardDescription,CardContent } from "@/components/ui/card"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { getCategories } from "./lib/data"




export default async function ProductsPage() {

  const data = await getCategories();
  

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Category</CardTitle>
        <CardDescription>
        Manage your products and inventory
        </CardDescription>
      </CardHeader>
      <CardContent>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight"></h1>
        <Button asChild>
          <Link href={"/dashboard/categories/create"} className="flex items-center space-x-2">
              <Plus className="mr-2 h-4 w-4" /> Add Category
          </Link>
          
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        
      </div>
      <div className="rounded-md border">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    </CardContent>
    </Card>
  )
}
