declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"arguments": {
"cambrian-explosion-disproves-evolution.mdx": {
	id: "cambrian-explosion-disproves-evolution.mdx";
  slug: "cambrian-explosion-disproves-evolution";
  body: string;
  collection: "arguments";
  data: InferEntrySchema<"arguments">
} & { render(): Render[".mdx"] };
"carbon-dating-is-unreliable.mdx": {
	id: "carbon-dating-is-unreliable.mdx";
  slug: "carbon-dating-is-unreliable";
  body: string;
  collection: "arguments";
  data: InferEntrySchema<"arguments">
} & { render(): Render[".mdx"] };
"evolution-is-just-a-theory.mdx": {
	id: "evolution-is-just-a-theory.mdx";
  slug: "evolution-is-just-a-theory";
  body: string;
  collection: "arguments";
  data: InferEntrySchema<"arguments">
} & { render(): Render[".mdx"] };
"second-law-of-thermodynamics.mdx": {
	id: "second-law-of-thermodynamics.mdx";
  slug: "second-law-of-thermodynamics";
  body: string;
  collection: "arguments";
  data: InferEntrySchema<"arguments">
} & { render(): Render[".mdx"] };
};
"quotes": {
"dinosaurs-lived-with-humans.mdx": {
	id: "dinosaurs-lived-with-humans.mdx";
  slug: "dinosaurs-lived-with-humans";
  body: string;
  collection: "quotes";
  data: InferEntrySchema<"quotes">
} & { render(): Render[".mdx"] };
"evolution-is-religion.mdx": {
	id: "evolution-is-religion.mdx";
  slug: "evolution-is-religion";
  body: string;
  collection: "quotes";
  data: InferEntrySchema<"quotes">
} & { render(): Render[".mdx"] };
"not-paying-taxes.mdx": {
	id: "not-paying-taxes.mdx";
  slug: "not-paying-taxes";
  body: string;
  collection: "quotes";
  data: InferEntrySchema<"quotes">
} & { render(): Render[".mdx"] };
};
"records": {
"fake-phd.mdx": {
	id: "fake-phd.mdx";
  slug: "fake-phd";
  body: string;
  collection: "records";
  data: InferEntrySchema<"records">
} & { render(): Render[".mdx"] };
"harassment-of-critics.mdx": {
	id: "harassment-of-critics.mdx";
  slug: "harassment-of-critics";
  body: string;
  collection: "records";
  data: InferEntrySchema<"records">
} & { render(): Render[".mdx"] };
"tax-fraud-conviction.mdx": {
	id: "tax-fraud-conviction.mdx";
  slug: "tax-fraud-conviction";
  body: string;
  collection: "records";
  data: InferEntrySchema<"records">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
