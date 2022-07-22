<template>
	<v-container fluid>
		<!-- <CV /> -->
		<CVTable/>
	</v-container>
</template>

<script>
	// import CV from '../components/CV'
	import CVTable from '../components/CV-Table'

	export default {
		name: 'Home',

		components: {
			// CV,
			CVTable,
		},
	}
</script>
