'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { FormDataCustom } from './LoginForm'

export async function login(formData: FormDataCustom) {
    const supabase = await createClient()


    const { error } = await supabase.auth.signInWithPassword(formData)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/portals/dashboard')
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

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signout() {
    const supabase = await createClient()

    await supabase.auth.signOut();

    redirect('/')
}
