import type { ImageMetadata } from "astro";

export type CatalogItem = {
    id: number;
    fileName: string;
    image: ImageMetadata;
};

function fileNameFromPath(path: string): string {
    const parts = path.split("/");
    return parts[parts.length - 1] ?? path;
}

function catalogPathSortKey(path: string): number {
    const name = fileNameFromPath(path);
    const match = name.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 9999;
}

/** Imágenes locales en `src/assets/images/catalog/` (orden numérico por nombre). */
export function getCatalogItems(): CatalogItem[] {
    const catalogGlob = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/images/catalog/*.{jpeg,jpg}",
        { eager: true },
    );

    return Object.entries(catalogGlob)
        .sort(
            ([pathA], [pathB]) =>
                catalogPathSortKey(pathA) - catalogPathSortKey(pathB) ||
                pathA.localeCompare(pathB),
        )
        .map(([path, mod], index) => ({
            id: index + 1,
            fileName: fileNameFromPath(path),
            image: mod.default,
        }));
}
