import {createClient} from '@supabase/supabase-js';

const URL = 'https://pubqattjriwondbudksf.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1YnFhdHRqcml3b25kYnVka3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3MzIzMTQsImV4cCI6MjAxNDMwODMxNH0.68B1JPaKzPa5mYDPMC5ZQcuxZue3oGAep5-OlLSKlGg';

export const supabase = createClient(URL, API_KEY);