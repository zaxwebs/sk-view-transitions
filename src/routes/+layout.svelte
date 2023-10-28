<script>
	import '../app.postcss'
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<div class="font-sans">
	<header>
		<nav class="border-b">
			<div class="container mx-auto px-6 lg:px-0 py-6">
				<a class="text-teal-700 font-medium" href="/">ZIKEA</a>
			</div>
		</nav>
	</header>
	<div class="container mx-auto px-6 lg:px-0">
		<slot />
	</div>
</div>
