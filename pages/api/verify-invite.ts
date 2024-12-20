import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!req.body.invite_code) {
    return res.status(400).json({ message: 'Invite code is required' });
  }

  try {
    const { data, error } = await supabase
      .from('Invite')
      .select('*')
      .eq('invite_code', req.body.invite_code)
      .single();

    if (error) {
      console.error('Supabase error:', error); // Added for debugging
      return res.status(401).json({ message: 'Invalid invite code' });
    }

    if (data) {
      return res.status(200).json({ 
        valid: true,
        user: {
          firstname: data.firstname,
          last_name: data.lastname,
          company_name: data.company_name
        }
      });
    }

    return res.status(401).json({ message: 'Invalid invite code' });
  } catch (error) {
    console.error('Server error:', error); // Added for debugging
    return res.status(500).json({ message: 'Server error' });
  }
}