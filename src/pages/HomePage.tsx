import { Button, Card, CardHeader, CardContent } from '../components/ui'
import { MainLayout } from '../layouts/MainLayout'

export function HomePage() {
  return (
    <MainLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to AquaPark Mountain
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your professional React application is ready!
        </p>
      </div>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Getting Started
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a sample page component. You can create more pages in the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">src/pages/</code> directory.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </MainLayout>
  )
} 