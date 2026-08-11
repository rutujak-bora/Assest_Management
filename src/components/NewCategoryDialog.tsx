import { useState } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addCustomCategory, type CategoryItem } from "@/lib/categories";
import { toast } from "sonner";
import { FolderPlus } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: (category: CategoryItem) => void;
}

export function NewCategoryDialog({ open, onOpenChange, onCreated }: Props) {
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  const handleCreate = () => {
    if (!name.trim()) return toast.error("Category name is required");
    setSaving(true);
    try {
      const created = addCustomCategory(name.trim());
      toast.success(`Category "${created.label}" created`);
      onCreated?.(created);
      setName("");
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message ?? "Failed to create category");
    } finally {
      setSaving(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCreate();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <FolderPlus className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle>New Category</DialogTitle>
              <DialogDescription className="text-xs mt-0.5">
                Create a custom asset category for your inventory.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="cat-name" className="text-xs text-muted-foreground">
              Category Name *
            </Label>
            <Input
              id="cat-name"
              placeholder="e.g. Tablet, Dongle, Projector…"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            {name.trim() && (
              <p className="text-[11px] text-muted-foreground">
                Internal key:{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  {name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_")}
                </code>
              </p>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => { onOpenChange(false); setName(""); }}>
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={saving || !name.trim()}>
            {saving ? "Creating…" : "Create Category"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
