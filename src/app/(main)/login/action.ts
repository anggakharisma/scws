'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { FormDataCustom } from './LoginForm'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function login(_prevState: any, formData: FormData) {
    const supabase = await createClient()


    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get('email')!.toString(),
        password: formData.get('password')!.toString(),
    })

    if (error) {
        return {
            message: "Email or password might be wrong. If you're not registered please contact us.",
        }
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormDataCustom) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.email,
        password: formData.password,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    redirect('/portals/dashboard')
}

export async function signout() {
    const supabase = await createClient()

    await supabase.auth.signOut();

    redirect('/')
}
