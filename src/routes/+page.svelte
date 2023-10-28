<script>
	import items from '$lib/data.js'
</script>

<section class="py-8">
	<h2 class="font-bold text-3xl text-black tracking-tight mb-12">Recommended for You</h2>
	<div class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-10">
		{#each items as item}
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
