import { createClient } from '@supabase/supabase-js'
import { db } from '.'
import { rolesUserTable, usersTable } from './schema'

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
    const supabaseUsers = await d.auth.admin.listUsers()

    supabaseUsers.data.users.forEach(async user => {
        if (user.id && user.email) {
            await db.insert(usersTable).values({
                supabase_id: user.id,
                email: user.email,
            }).onConflictDoNothing()
            await db.update(rolesUserTable).set({
                role_id: "1",
                user_id: user.id
            })
        }
    })
})
