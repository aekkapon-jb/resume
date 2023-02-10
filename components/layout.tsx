import { Paper } from "@mui/material"
import Head from "next/head"
import { ReactNode } from "react"

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <Paper sx={{ width: '100vw', minHeight: '100vh' }}>
      <Head>
        <title>Resume</title>
      </Head>
      {children}
    </Paper>
  )
}

export default Layout