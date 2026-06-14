import { createClient } from "@/lib/supabase/server";

export default async function PetaniDashboard() {
  const supabase = await createClient();

  // Mengambil profil petani yang sedang login
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  return (
    <div>
      <h1>Selamat Datang, {profile?.full_name}</h1>
      {/* Tampilkan UI Dashboard di sini */}
    </div>
  );
}
