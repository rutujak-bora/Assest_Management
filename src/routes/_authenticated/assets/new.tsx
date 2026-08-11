import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AssetForm } from "@/components/AssetForm";
import { type AssetCategory } from "@/lib/categories";

interface NewAssetSearch {
  category?: AssetCategory;
}

export const Route = createFileRoute("/_authenticated/assets/new")({
  validateSearch: (s: Record<string, unknown>): NewAssetSearch => ({
    category: (s.category as AssetCategory) || undefined,
  }),
  component: NewAsset,
});

function NewAsset() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  return (
    <div className="space-y-4 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">New Asset</h1>
        <p className="text-sm text-muted-foreground">Register a new IT asset in the inventory.</p>
      </div>
      <AssetForm
        initial={search.category ? { category: search.category } : undefined}
        lockCategory={!!search.category}
        onSaved={(id) => navigate({ to: "/assets/$id", params: { id } })}
      />
    </div>
  );
}

