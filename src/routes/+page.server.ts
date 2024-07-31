import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	const { data: products } = await supabase.from('products').select('name, price, quantity');
	return { products: products ?? [] };
};
