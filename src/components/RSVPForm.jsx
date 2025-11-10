import React, { useState } from 'react';

export default function RSVPForm() {
  const [form, setForm] = useState({ name: '', email: '', attendance: 'hadir', guests: 1, message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch(`${backend}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Gagal mengirim RSVP');
      setStatus({ loading: false, success: 'Terima kasih! RSVP kamu sudah diterima.', error: null });
      setForm({ name: '', email: '', attendance: 'hadir', guests: 1, message: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Nama</label>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-white/40" placeholder="Nama lengkap" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-white/40" placeholder="email@contoh.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Kehadiran</label>
          <select value={form.attendance} onChange={(e) => setForm({ ...form, attendance: e.target.value })} className="w-full rounded-xl bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-white/40">
            <option value="hadir">Hadir</option>
            <option value="mungkin">Mungkin</option>
            <option value="tidak">Tidak</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Jumlah Tamu</label>
          <input type="number" min={1} max={10} value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} className="w-full rounded-xl bg-white/10 text-white px-4 py-3 outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div className="flex items-end">
          <button disabled={status.loading} className="w-full rounded-xl bg-white text-black font-medium px-4 py-3 hover:bg-white/90 transition">
            {status.loading ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1">Ucapan</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-white/40" placeholder="Tulis ucapan terbaikmu..." />
      </div>

      {status.success && <p className="text-emerald-300">{status.success}</p>}
      {status.error && <p className="text-red-300">{status.error}</p>}
    </form>
  );
}
