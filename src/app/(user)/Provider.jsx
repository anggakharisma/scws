"use client"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function UserLayoutProvider({ children }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
        </LocalizationProvider>
    )
}
