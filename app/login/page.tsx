"use client";

import { loginAction } from "@/app/actions/auth-actions";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <form
        action={handleSubmit}
        className="w-full max-w-lg bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm"
      >
        <div className="mb-10">
          <h1 className="text-5xl font-black tracking-tight text-zinc-900">
            Login
          </h1>

          <p className="mt-2 text-zinc-500">Masuk untuk mengakses dashboard.</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-zinc-700">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="Masukkan email"
              required
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
              placeholder="Masukkan password"
              required
              className="w-full h-14 px-4 rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            />
          </div>
        </div>

        {error && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-500">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-primary text-white font-bold text-base transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
