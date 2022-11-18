import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://veplbweymcfyesluztaz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcGxid2V5bWNmeWVzbHV6dGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTYyNjUsImV4cCI6MTk4Mzc3MjI2NX0.FaU6PbOx7CoYGbxWC5qLKVABjX240tYh1HNuCfNUzNA');

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
