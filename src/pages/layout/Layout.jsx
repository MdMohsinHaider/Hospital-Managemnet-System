import { Toaster } from 'react-hot-toast'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
            <Toaster />
        </div>
    )
}

export default Layout
