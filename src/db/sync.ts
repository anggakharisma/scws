import { createClient } from '@supabase/supabase-js'
import { db } from '.'
import { usersTable } from './schema'

const syncSupabase = async () => {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SERVICE_ROLE!, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    return supabase
}

syncSupabase().then(async d => {
    console.log("___")
    const x = await d.auth.admin.listUsers()
    x.data.users.forEach(async user => {
        if (user.id && user.email)
            await db.insert(usersTable).values({
                supabase_id: user.id,
                email: user.email,
            }).onConflictDoNothing()

    })
})
