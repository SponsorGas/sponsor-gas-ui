import Container from "@/components/Container"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <div className="pt-20">
      <Container> 
          <Sidebar/>
          <div className="sm:ml-48">
            <div className="pl-4 mt-6">
                {children}
            </div>
          </div>
      </Container>
    </div>
      
    )
}
