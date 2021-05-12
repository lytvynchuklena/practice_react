import Car from "./components/Car";

export default function App() {
	return (
		<div>
			<Car
				model={'bmw'}
				description={'i5 electro car'}
				power={'256'}
				volume={'3'}
				image={'https://img1.freepng.ru/20180206/waq/kisspng-2017-bmw-m3-2018-bmw-m3-car-bmw-x6-bmw-m3-png-clipart-5a7a261a8994a9.0394230015179545865635.jpg'}
			/>
			<Car
				model={'subaru'}
				description={'legasy ez'}
				power={'345'}
				volume={'6'}
				image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9udfuLuv14RQtZVtjk0hQFDvtV0fy2zesA&usqp=CAU'}
			/>
			<Car
				model={'audi'}
				description={'legasy ez'}
				power={'342'}
				volume={'4'}
				image={'https://cpng.pikpng.com/pngl/s/133-1330808_audi-png-file-acura-ilx-2016-grey-clipart.png'}
			/>
		</div>
	);
}
