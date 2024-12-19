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
      .from('invites')
      .select('*')
      .eq('invite_code', req.body.invite_code)
      .single();

    if (error) {
      return res.status(401).json({ message: 'Invalid invite code' });
    }

    if (data) {
      return res.status(200).json({ 
        valid: true,
        user: {
          first_name: data.first_name,
          last_name: data.last_name,
          company_name: data.company_name
        }
      });
    }

    return res.status(401).json({ message: 'Invalid invite code' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}