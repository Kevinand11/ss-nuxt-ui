<template>
	<div class="searchbar">
		<form class="form" @submit.prevent="search">
			<div class="form__group">
				<div class="append__btn">
					<input
						v-model="searchItem"
						class="form__input append__input"
						:placeholder="placeholder"
					>
					<div
						class="append__btn-icon"
						@click="search"
					>
						<button class="search-btn btn btn-icon">
							<img
								src="/icons/search-icon.svg"
								alt=""
								class="append__btn-icon-img"
							>
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'SearchBar',
	props: {
		placeholder: {
			type: String,
			default: 'Search for anything'
		}
	},
	data () {
		return {
			searchItem: ''
		}
	},
	methods: {
		search () {
		}
	}
})
</script>

<style lang="scss" scoped>
  .searchbar{
    display: inline-block;
    width: 100%;
    min-width: 400px;
  }
  .form__group{
    box-sizing: border-box;
    width: 100%;
  }
  .append__btn-icon {
    height: 100%;
    background-color: transparent;
  }
  .form__input {
    box-sizing: border-box;
    color: $color-text;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    border: 2px solid $color-text-light;
    box-shadow: 0px 3px 10px #00000019;
    width: 100%;
  }
  .search-btn{
    text-align: center;
    display: inline-block;
    width: 2.2rem;
    height: 100%;
    background-color: $color-text-light;
    border-radius: 50%;
  }
</style>
