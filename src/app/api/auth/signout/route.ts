// ログアウトのAPI
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = createRouteHandlerClient({ cookies: () => cookies() });
  // supabaseのサインアウト
  const { error } = await supabase.auth.signOut(); //ここでセッションを無効化

  // エラーハンドリング
  if (error) {
    console.error("Error signing out:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 成功したら200ステータスで返す
  return NextResponse.json(
    { message: "Successfully signed out" },
    { status: 200 }
  );
}
