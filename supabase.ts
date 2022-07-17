import { createClient } from '@supabase/supabase-js';
import { config } from './config';

const supabaseUrl = config.supabase.url;
const supabaseSecretKey = config.supabase.secretKey;

export const supabase = createClient(supabaseUrl!, supabaseSecretKey!);
