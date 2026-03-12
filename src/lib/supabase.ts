import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Session {
  id: string
  code: string
  subject: string
  teacher_id: string
  created_at: string
  expires_at: string
}

export interface Attendance {
  id: string
  session_code: string
  student_name: string
  roll_number: string
  device_id: string
  marked_at: string
}

export interface SessionWithAttendance {
  session: Session
  attendees: Attendance[]
  count: number
}
