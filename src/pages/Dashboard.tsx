export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-3xl font-bold mb-4 title">Dashboard</h1>
      <p className="text-gray-700">You are logged in!</p>
      <p className="text-gray-600">
        Here you will find your profile, applied jobs, and subscription details.
      </p>
    </div>
  )
}