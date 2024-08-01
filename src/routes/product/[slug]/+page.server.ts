import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const { data: products } = await supabase
		.from('products')
		.select('name, price, sizes')
		.eq('name', params.slug);

	return { products: products ?? [] };
};
