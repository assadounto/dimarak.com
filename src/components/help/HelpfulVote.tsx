// components/help/HelpfulVote.tsx
"use client";

import { useEffect, useState } from "react";

export default function HelpfulVote({ articleSlug }: { articleSlug: string }) {
  const key = `helpful:${articleSlug}`;
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved === "yes" || saved === "no") setVote(saved);
  }, [key]);

  const choose = (v: "yes" | "no") => {
    setVote(v);
    localStorage.setItem(key, v);
  };

  const submitFeedback = async () => {
    // TODO: POST to your API endpoint
    // await fetch('/api/help-feedback', { method: 'POST', body: JSON.stringify({ slug: articleSlug, vote, text }) })
    setText("");
    alert("Thanks for the feedback!");
  };

  return (
    <div className="rounded-xl border p-4 text-sm dark:border-gray-800">
      <div className="mb-2 font-semibold dark:text-white">
        Was this article helpful?
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => choose("yes")}
          className={`h-9 rounded-md border px-3 ${vote === "yes" ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300" : "dark:border-gray-800"}`}
        >
          Yes
        </button>
        <button
          onClick={() => choose("no")}
          className={`h-9 rounded-md border px-3 ${vote === "no" ? "border-rose-600 bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300" : "dark:border-gray-800"}`}
        >
          No
        </button>
      </div>

      {vote === "no" && (
        <div className="mt-3 space-y-2">
          <label className="text-xs text-gray-600 dark:text-gray-400">
            What can we improve?
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Tell us what was missing or confusing…"
            className="w-full rounded-md border p-2 text-sm dark:border-gray-800 dark:bg-gray-950"
          />
          <div className="flex justify-end">
            <button
              onClick={submitFeedback}
              className="h-9 rounded-md bg-indigo-600 px-4 text-xs font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
              disabled={!text.trim()}
            >
              Send feedback
            </button>
          </div>
        </div>
      )}

      {vote === "yes" && (
        <p className="mt-2 text-xs text-gray-500">Thanks for the feedback!</p>
      )}
    </div>
  );
}
