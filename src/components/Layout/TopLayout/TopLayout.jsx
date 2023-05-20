import TopItems from './TopItems/TopItems'
import { Outlet } from 'react-router-dom'

const TopLayout = () => {
  return (
    <>
      <TopItems />
      <main className="wrap-pd ">
        <Outlet />
      </main>
    </>
  )
}

export default TopLayout
