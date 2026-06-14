"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function RegisterPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRegister(formData: FormData) {
    setLoading(true);
    setMessage("");

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Pendaftaran berhasil. Silakan cek email untuk verifikasi.");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <form
        action={handleRegister}
        className="w-full max-w-lg bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm"
      >
        <div className="mb-10">
          <h1 className="text-5xl font-black tracking-tight text-zinc-900">
            Daftar
          </h1>

          <p className="mt-2 text-zinc-500">
            Buat akun baru untuk mulai menggunakan platform.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-zinc-700">
              Email
            </label>

            <input
              name="email"
              type="email"
              required
              placeholder="Masukkan email"
              className="w-full h-14 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-zinc-700">
              Password
            </label>

            <input
              name="password"
              type="password"
              required
              placeholder="Masukkan password"
              className="w-full h-14 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-zinc-700">
              Role
            </label>

            <select
              name="role"
              defaultValue="user"
              className="w-full h-14 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            >
              <option value="user">User</option>
              <option value="petani">Petani</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {message && (
          <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            {message}
          </div>
        )}

        <button
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-primary text-white font-bold transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}
