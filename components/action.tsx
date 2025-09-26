"use client"

import { Edit, Trash } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINTS } from "@/lib/api-endpoint"
import { Product } from "@/types/products.type"
import { deleteProduct } from "@/http/products"




export const ProductListActions = ({ task }: { task: Product }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter()

    const { isPending, mutateAsync } = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            router.refresh()
            setOpen(false)
            

        }
    });

    const handleDelete = async () => {
        await mutateAsync({
            queryKey: [API_ENDPOINTS.deleteproduct(String(task.id))]
        })

    }
    return (
        <>
            <div className="flex items-center space-x-2">

                <Link href={`/task/edit/${task.id}`}>
                    <Button
                        variant="outline"
                        size="icon"
                        className=" cursor-pointer hover:bg-indigo-100 p-2 rounded-full"
                        aria-label="Edit Task"
                    >
                        <Edit size={10} />
                    </Button>
                </Link>



                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button
                            variant="destructive"
                            size="icon"
                            className="p-2 rounded-full cursor-pointer"
                            aria-label="Delete Task"
                        >
                            <Trash size={10} />
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
                        </DialogHeader>
                        <DialogFooter className="flex justify-end gap-2">
                            <Button className="cursor-pointer" variant="outline" disabled={isPending} onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button  className="cursor-pointer" onClick={handleDelete} disabled={isPending}>
                                {isPending ? "Deleting..." : "Delete"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>

    )
}
