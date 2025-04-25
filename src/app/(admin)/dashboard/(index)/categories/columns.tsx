"use client"

import { Category } from "@prisma/client"
import {ColumnDef} from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"


export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: "Category Name",
    },
    {
        id: "actions",
        cell: ({row}) => {
            const category = row.original
            
            return(<DropdownMenu>
                <DropdownMenuTrigger>
                    <MoreHorizontal className="h-6 w-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <Pencil className="h-6 w-6 mr-2" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Trash className="h-6 w-6 mr-2" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>)
        },
    }
]