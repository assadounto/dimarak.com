"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  categories,
  defaultConsent,
  type ConsentMap,
} from "@/constants/cookies";
import { getConsentClient, setConsentClient } from "@/lib/consent";

export function CookieConsentBanner() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [prefs, setPrefs] = React.useState<ConsentMap>(defaultConsent);

  React.useEffect(() => {
    const existing = getConsentClient();
    if (!existing) {
      setVisible(true);
    } else {
      setPrefs(existing);
    }
  }, []);

  function setAll(val: boolean) {
    const next: ConsentMap = {
      essential: true,
      analytics: val,
      marketing: val,
    };
    setPrefs(next);
    setConsentClient(next);
    setVisible(false);
  }

  function save() {
    setConsentClient(prefs);
    setVisible(false);
    setOpen(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3">
      <Card className="mx-auto max-w-3xl border-border bg-card shadow-card-dark">
        <CardContent className="p-4 text-sm">
          <div className="md:flex items-start justify-between gap-4">
            <p className="text-muted-foreground">
              We use cookies to run the site and improve your experience. You
              can accept all, reject non‑essential, or manage preferences.
            </p>
            <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
              <Button onClick={() => setAll(true)}>Accept all</Button>
              <Button variant="outline" onClick={() => setAll(false)}>
                Reject non‑essential
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost">Manage</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-base">
                      Cookie preferences
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                    {categories.map((c) => (
                      <div
                        key={c.key}
                        className="flex items-start justify-between gap-6"
                      >
                        <div>
                          <div className="font-medium text-card-foreground">
                            {c.label}
                          </div>
                          <p className="mt-0.5 text-xs">{c.desc}</p>
                        </div>
                        <Switch
                          checked={prefs[c.key]}
                          onCheckedChange={(v) =>
                            c.key === "essential"
                              ? null
                              : setPrefs((p) => ({ ...p, [c.key]: v }))
                          }
                          disabled={c.key === "essential"}
                        />
                      </div>
                    ))}
                    <div className="pt-2 flex gap-2">
                      <Button onClick={save}>Save</Button>
                      <Button variant="outline" onClick={() => setAll(false)}>
                        Reject non‑essential
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
