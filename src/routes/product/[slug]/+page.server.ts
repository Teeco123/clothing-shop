import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	let numberOfPics: number;
	let listPictures: string[] = [];

	const { data: products } = await supabase
		.from('products')
		.select('name, price, sizes, numberOfPics')
		.eq('name', params.slug);

	products?.forEach((product) => {
		numberOfPics = product.numberOfPics;

		for (let i = 0; i < numberOfPics; i++) {
			const { data: productPictures } = supabase.storage
				.from('product-photos')
				.getPublicUrl(`${params.slug}/${params.slug}${i}.webp`);
			listPictures.push(productPictures.publicUrl);
		}
	});

	return { products: products ?? [], listPictures: listPictures ?? [] };
};
