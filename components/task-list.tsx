import { Task } from "@/types/tasks.type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { TaskListActions } from "./task-list-actions";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
      <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">

      <Table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <TableHeader>
          <TableRow className=" bg-gray-300  text-white">
            <TableHead>Title</TableHead>
            <TableHead >Description</TableHead>
            <TableHead >Status</TableHead>
            <TableHead >Due Date</TableHead>
            <TableHead >Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task) => (
            <TableRow key={task.id} className="hover:bg-gray-100 transition-all ease-in-out duration-300">
              <TableCell >{task.title}</TableCell>
              <TableCell >{task.description}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>
                {new Date(task.due_date).toLocaleDateString()}
              </TableCell>
              <TableCell className="px-6 py-4">
                     <TaskListActions task={task} />

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


