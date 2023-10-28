<script>
	import { page } from '$app/stores'
	import items from '$lib/data.js'

	$: id = $page.params.id

	$: item = items.find((item) => item.id === id)

	$: otherItems = items.filter((item) => item.id !== id)
</script>

<section class="py-8">
	<div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
		<img
			src={`/images/${item.id}.jpg`}
			class="object-cover rounded w-full max-w-md xl:max-w-2xl"
			style:aspect-ratio="4 / 3"
			style={`view-transition-name: item-image-${item.id};`}
			alt={item.name}
		/>
		<div>
			<h1 class="text-5xl font-bold tracking-tight text-gray-900">{item.name}</h1>
			<p class="mt-3 text-xl text-gray-700">{item.excerpt}</p>
			<p class="mt-6 text-gray-600 max-w-xl">{item.description}</p>
			<button
				type="button"
				class="mt-6 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
			>
				<svg
					class="w-3.5 h-3.5 mr-2"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 21"
				>
					<path
						d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
					/>
				</svg>
				Buy now
			</button>
		</div>
	</div>
</section>
<section class="py-8">
	<h2 class="font-bold text-3xl text-black tracking-tight mb-12">Recommended for You</h2>
	<div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-10">
		{#each otherItems as item}
			<a class="item text-black hover:text-teal-700" href="/item/{item.id}">
				<img
					src={`/images/${item.id}.jpg`}
					class="object-cover rounded"
					style:aspect-ratio="4 / 3"
					style={`view-transition-name: item-image-${item.id};`}
					alt={item.name}
				/>
				<h2 class="pt-4 font-semibold">{item.name}</h2>
				<p class="pt-1 text-gray-700">{item.excerpt}</p>
			</a>
		{/each}
	</div>
</section>
