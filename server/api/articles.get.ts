import data from '~/public/data.json';

export default defineEventHandler(async (event) => {
	return data;
});
