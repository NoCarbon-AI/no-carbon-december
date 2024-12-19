import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const config = {
  runtime: "edge",
};

export default async function verifyInvite(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  const { invite_code } = body;

  if (!invite_code) {
    return new NextResponse("Invite code is required", { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('invites')
      .select('*')
      .eq('invite_code', invite_code)
      .single();

    if (error) {
      return new NextResponse("Invalid invite code", { status: 401 });
    }

    if (data) {
      return new NextResponse(JSON.stringify({ 
        valid: true,
        user: {
          first_name: data.first_name,
          last_name: data.last_name,
          company_name: data.company_name
        }
      }), { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    return new NextResponse("Invalid invite code", { status: 401 });
  } catch (error) {
    return new NextResponse("Server error", { status: 500 });
  }
}