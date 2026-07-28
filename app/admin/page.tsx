import { getProjects } from "@/action/project/queries";
import AdminHeader from "./AdminHeader";
import EmptyProjects from "./EmptyProjects";
import ProjectsTable from "./ProjectsTable";


export default async function AdminPage() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-neutral-50 pt-10">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <AdminHeader
                    onSearchChange={() => void ('')}
                    search=""
                />
                <div className="mt-10">
                    {projects.length === 0 ? (
                        <EmptyProjects />
                    ) : (
                        <ProjectsTable
                            projects={projects}
                        />
                    )}
                </div>
            </div>
        </main>
    );
}