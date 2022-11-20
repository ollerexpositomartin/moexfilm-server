import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv"

dotenv.config()
const supabase = createClient('https://veplbweymcfyesluztaz.supabase.co',process.env.SUPABASE_TOKEN);

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return error == null ? true : false
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  console.log(data)
  return error == null ? true : false;
}
