import './App.css'
import PublicRoutes from './components/routes/PublicRoutes'
import PrivateRoutes from './components/routes/PrivateRoutes'
import Navbar from './components/shared/Navbar/Navbar'
import useAuth from './components/hooks/useAuth'
import Loading from './components/shared/Loading/Loading'
import Layout from './components/shared/BasicElements/Layout'

const App: React.FC = () => {
  const { isAuth, isLoading } = useAuth()

  return (
    <>
      {isLoading ? (
        <div className='h-screen'>
          <Loading />
        </div>
      ) : (
        <>
          <Navbar />
          <Layout children={isAuth ? <PrivateRoutes /> : <PublicRoutes />} />
        </>
      )}
    </>
  )
}

export default App
