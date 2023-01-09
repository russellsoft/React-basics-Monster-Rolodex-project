import Directory from '../../components/directory/directory.component';

const Home = () => {
	const categories = [
		{
			title: 'Головные уборы',
			id: 1,
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
		},
		{
			title: 'Спортивные наборы',
			id: 2,
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
		},
		{
			title: 'Кроссовки',
			id: 3,
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
		},
		{
			title: 'Для Девушек',
			id: 4,
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
		},
		{
			title: 'Для Мужчин',
			id: 5,
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
		}
	]

	return (
		<Directory categories = {categories}/>
	)
}

export default Home;
