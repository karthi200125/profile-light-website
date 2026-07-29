import { getProjects } from "@/action/project/queries";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
    const projects = await getProjects();

    return <AdminClient projects={projects} />;
}