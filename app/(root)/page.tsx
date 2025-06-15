import { TaskList } from "@/components/task-list";
import { Button } from "@/components/ui/button";
import { getTasks } from "@/http/tasks";
import { headers } from "next/headers";
import Link from "next/link";





export default async function Home() {
  const headersInstance = await headers();
  const tasks = await getTasks(headersInstance);

  return (
    <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8   space-y-4">
      <div className="flex justify-end ">
        <Link href="/task/add">
          <Button>
            + Add Task
          </Button>
        </Link>
      </div>

      <TaskList tasks={tasks} />
    </div>

  );
}
