import type { ImageMetadata } from "astro";

export type ProductCategory = "motor" | "industrial" | "transmision" | "grasas";
export type ProductBrand = "Total" | "ELF";

export type ProductSpec = {
    label: string;
    value: string;
};

export type CatalogItem = {
    id: number;
    slug: string;
    fileName: string;
    image: ImageMetadata;
    name: string;
    description: string;
    category: ProductCategory;
    brand: ProductBrand;
    sku: string;
    fullDescription: string;
    applications: string[];
    specs: ProductSpec[];
    presentations: string;
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

const EXCLUDED = new Set(["image_1.jpg", "agl_43.jpeg", "agl_44.jpeg"]);

const PRODUCT_META: Record<
    string,
    {
        name: string;
        description: string;
        category: ProductCategory;
        brand: ProductBrand;
    }
> = {
    "agl_0.jpeg": { name: "Quartz Ineo ECS 5W-30", description: "Proteccion maxima para motor gasolina y diesel", category: "motor", brand: "Total" },
    "agl_1.jpeg": { name: "Quartz 9000 5W-40", description: "Alto rendimiento para motores modernos", category: "motor", brand: "Total" },
    "agl_2.jpeg": { name: "Quartz 7000 10W-40", description: "Semi-sintetico para gasolina y diesel", category: "motor", brand: "Total" },
    "agl_3.jpeg": { name: "Quartz 5000 15W-40", description: "Aceite convencional de amplio uso", category: "motor", brand: "Total" },
    "agl_4.jpeg": { name: "Evolution Full-Tech MSX 5W-30", description: "Motor gasolina downsizing y turbo", category: "motor", brand: "ELF" },
    "agl_5.jpeg": { name: "Evolution 900 NF 5W-40", description: "Alta exigencia para gasolina y diesel", category: "motor", brand: "ELF" },
    "agl_6.jpeg": { name: "Evolution 700 STI 10W-40", description: "Semi-sintetico para gasolina y diesel", category: "motor", brand: "ELF" },
    "agl_7.jpeg": { name: "Rubia TIR 8600 10W-40", description: "Motor diesel para vehiculos pesados", category: "motor", brand: "Total" },
    "agl_8.jpeg": { name: "Rubia TIR 8900 10W-40", description: "Motor diesel Euro IV y Euro V", category: "motor", brand: "Total" },
    "agl_9.jpeg": { name: "Hypertruck Eclipse 10W-40", description: "Motor diesel semipesado y autobuses", category: "motor", brand: "ELF" },
    "agl_10.jpeg": { name: "Azolla ZS 46", description: "Aceite hidraulico antidesgaste", category: "industrial", brand: "Total" },
    "agl_11.jpeg": { name: "Azolla AF 46", description: "Hidraulico para bajas temperaturas", category: "industrial", brand: "Total" },
    "agl_12.jpeg": { name: "Equivis ZS 46", description: "Hidraulico de alta estabilidad", category: "industrial", brand: "Total" },
    "agl_13.jpeg": { name: "Hydransafe 46", description: "Fluido hidraulico ignifugo", category: "industrial", brand: "Total" },
    "agl_14.jpeg": { name: "Biohydran SE 46", description: "Aceite hidraulico biodegradable", category: "industrial", brand: "Total" },
    "agl_15.jpeg": { name: "Carter EP 220", description: "Aceite para engranajes industriales", category: "industrial", brand: "Total" },
    "agl_16.jpeg": { name: "Carter SH 220", description: "Engranajes industriales sintetico", category: "industrial", brand: "Total" },
    "agl_17.jpeg": { name: "Reductelf SP 220", description: "Engranajes semi-sintetico", category: "industrial", brand: "ELF" },
    "agl_18.jpeg": { name: "Cirkan 32", description: "Aceite de circulacion y rodamientos", category: "industrial", brand: "Total" },
    "agl_19.jpeg": { name: "Osyris XL 220", description: "Aceite para engranajes abiertos", category: "industrial", brand: "Total" },
    "agl_20.jpeg": { name: "Transmission TM 80W-90", description: "Caja manual y diferencial", category: "transmision", brand: "Total" },
    "agl_21.jpeg": { name: "Transmission Axle 8 80W-90", description: "Diferencial y puente trasero", category: "transmision", brand: "Total" },
    "agl_22.jpeg": { name: "Tranself NFJ 75W-80", description: "Caja manual para VW, PSA y Ford", category: "transmision", brand: "ELF" },
    "agl_23.jpeg": { name: "Fluidmatic ATX", description: "Fluido para transmision automatica", category: "transmision", brand: "Total" },
    "agl_24.jpeg": { name: "Fluidmatic MV", description: "Fluido de transmision multi-vehiculo", category: "transmision", brand: "Total" },
    "agl_25.jpeg": { name: "Gear 8 75W-140", description: "Diferencial de alto rendimiento", category: "transmision", brand: "Total" },
    "agl_26.jpeg": { name: "Tranself PL 80W-90", description: "Caja y puente para tractores", category: "transmision", brand: "ELF" },
    "agl_27.jpeg": { name: "Dynatrans MP 80W-90", description: "Transmision para maquinaria agricola", category: "transmision", brand: "Total" },
    "agl_28.jpeg": { name: "Multigear 80W-90", description: "Aceite multifuncion agricola", category: "transmision", brand: "Total" },
    "agl_29.jpeg": { name: "BV 75W", description: "Aceite para caja automatizada y DSG", category: "transmision", brand: "Total" },
    "agl_30.jpeg": { name: "Multis EP 2", description: "Grasa multiuso base litio", category: "grasas", brand: "Total" },
    "agl_31.jpeg": { name: "Multis Complex EP 2", description: "Complejo litio para alta temperatura", category: "grasas", brand: "Total" },
    "agl_32.jpeg": { name: "Ceran WR 2", description: "Grasa para cojinetes en alta temperatura", category: "grasas", brand: "Total" },
    "agl_33.jpeg": { name: "Unirex EP 2", description: "Grasa industrial para rodamientos", category: "grasas", brand: "ELF" },
    "agl_34.jpeg": { name: "Aerogrease 33", description: "Grasa aeronautica alta exigencia", category: "grasas", brand: "Total" },
    "agl_35.jpeg": { name: "Altis EP 2", description: "Grasa para motores electricos", category: "grasas", brand: "Total" },
    "agl_36.jpeg": { name: "Lubgel Industria", description: "Lubricante gel para guias y cremalleras", category: "grasas", brand: "Total" },
    "agl_37.jpeg": { name: "Drosera MS 150", description: "Aceite para herramientas neumaticas", category: "industrial", brand: "Total" },
    "agl_38.jpeg": { name: "Moto 4 Road 10W-40", description: "Aceite para motocicletas 4T", category: "motor", brand: "ELF" },
    "agl_39.jpeg": { name: "Moto 2 Tech", description: "Aceite para motocicletas 2T", category: "motor", brand: "ELF" },
    "agl_40.jpeg": { name: "Coolelf Plus", description: "Anticongelante y refrigerante", category: "grasas", brand: "Total" },
    "agl_41.jpeg": { name: "Brake Fluid DOT 4", description: "Fluido de frenos de alta calidad", category: "grasas", brand: "Total" },
    "agl_42.jpeg": { name: "Rubia S 40", description: "Aceite diesel para uso industrial", category: "motor", brand: "Total" },
    "agl_45.jpeg": { name: "Elfmatic G3", description: "Fluido de transmision automatica clasica", category: "transmision", brand: "ELF" },
};

const DEFAULT_META = {
    name: "Lubricante AGL",
    description: "Consulte disponibilidad y especificaciones",
    category: "industrial" as ProductCategory,
    brand: "Total" as ProductBrand,
};

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
    motor: "Motor",
    industrial: "Industrial",
    transmision: "Transmision",
    grasas: "Grasas",
};

const CATEGORY_APPLICATIONS: Record<ProductCategory, string[]> = {
    motor: [
        "Motores de gasolina y diésel",
        "Flotillas y transporte",
        "Talleres y refaccionarias",
    ],
    industrial: [
        "Maquinaria industrial",
        "Sistemas hidráulicos",
        "Engranajes y compresores",
    ],
    transmision: [
        "Cajas manuales y automáticas",
        "Diferenciales y ejes",
        "Maquinaria agrícola y pesada",
    ],
    grasas: [
        "Rodamientos y cojinetes",
        "Chasis y puntos de lubricación",
        "Aplicaciones de alta temperatura",
    ],
};

function slugFromFileName(fileName: string): string {
    return fileName.replace(/\.(jpe?g)$/i, "");
}

function skuFromSlug(slug: string): string {
    const match = slug.match(/(\d+)/);
    const number = match ? match[1].padStart(3, "0") : "000";
    return `AGL-${number}`;
}

function buildProductDetail(
    meta: {
        name: string;
        description: string;
        category: ProductCategory;
        brand: ProductBrand;
    },
    slug: string,
): Pick<
    CatalogItem,
    "fullDescription" | "applications" | "specs" | "presentations" | "sku"
> {
    const categoryLabel = CATEGORY_LABELS[meta.category];

    return {
        sku: skuFromSlug(slug),
        fullDescription: `${meta.name} es un lubricante ${meta.brand} para aplicaciones de ${categoryLabel.toLowerCase()}. ${meta.description}. En AGL Legaspi le orientamos sobre viscosidad, presentación y disponibilidad según su equipo y zona.`,
        applications: CATEGORY_APPLICATIONS[meta.category],
        specs: [
            { label: "Marca", value: meta.brand },
            { label: "Categoría", value: categoryLabel },
            { label: "Referencia", value: meta.name },
            { label: "Distribución", value: "AGL Legaspi" },
        ],
        presentations:
            "Consulte presentaciones disponibles: bidones, cubetas, tambores y formatos según referencia.",
    };
}

export function getProductUrl(slug: string): string {
    return `/products/${slug}`;
}

/** Imágenes locales en `src/assets/images/catalog/` (orden numérico por nombre). */
export function getCatalogItems(): CatalogItem[] {
    const catalogGlob = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/images/catalog/*.{jpeg,jpg}",
        { eager: true },
    );

    return Object.entries(catalogGlob)
        .filter(([path]) => !EXCLUDED.has(fileNameFromPath(path)))
        .sort(
            ([pathA], [pathB]) =>
                catalogPathSortKey(pathA) - catalogPathSortKey(pathB) ||
                pathA.localeCompare(pathB),
        )
        .map(([path, mod], index) => {
            const fileName = fileNameFromPath(path);
            const meta = PRODUCT_META[fileName] ?? DEFAULT_META;
            const slug = slugFromFileName(fileName);
            const detail = buildProductDetail(meta, slug);

            return {
                id: index + 1,
                slug,
                fileName,
                image: mod.default,
                name: meta.name,
                description: meta.description,
                category: meta.category,
                brand: meta.brand,
                ...detail,
            };
        });
}

export function getCatalogItemBySlug(slug: string): CatalogItem | undefined {
    return getCatalogItems().find((item) => item.slug === slug);
}

export function getRelatedProducts(
    item: CatalogItem,
    limit = 4,
): CatalogItem[] {
    return getCatalogItems()
        .filter(
            (product) =>
                product.slug !== item.slug &&
                product.category === item.category,
        )
        .slice(0, limit);
}
