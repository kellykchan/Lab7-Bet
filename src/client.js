import { createClient } from '@supabase/supabase-js'

const URL = 'https://nnhyjhfjoguikjogankp.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaHlqaGZqb2d1aWtqb2dhbmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MTY0NTIsImV4cCI6MjA2OTM5MjQ1Mn0.PVqX6Pa1m9dL1lhEVuJdvadSxBvD9MmpzCLepYYn_ek'

export const supabase = createClient(URL, API_KEY)