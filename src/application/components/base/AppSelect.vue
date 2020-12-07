<template>
	<div class="form__group">
		<label v-if="label" class="form__label">{{ label }}</label>
		<div class="append__btn">
			<span v-if="prependIcon !== ''" class="prepend__btn-icon">
				<img :src="prependIcon" alt="" class="prepend__btn-icon-img">
			</span>
			<select
				v-model="selectedValue"
				class="form__select append__input"
				:class="prependIcon !== '' ? 'prepend__input' : ''"
				@input="$emit('input', $event.target.value)"
				@focus="fetchOptions(dataKey)"
			>
				<option
					v-for="option in options"
					:key="option"
					:value="option"
					:selected="selectedValue === option"
				>
					{{ option }}
				</option>
			</select>
			<span class="append__btn-select-icon">
				<img
					src="/icons/angle-arrow-down-ash.svg"
					alt=""
					class="append__btn-select-icon-img"
				>
			</span>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'AppSelect',
	inheritAttrs: false,
	props: {
		label: {
			type: String,
			default: ''
		},
		options: {
			type: [Array, Object],
			default: () => {}
		},
		value: {
			type: [String, Number, Array],
			default: () => ''
		},
		url: {
			type: String,
			default: ''
		},
		remote: {
			type: Boolean,
			default: false
		},
		dataKey: {
			type: String,
			default: ''
		},
		defaultValue: {
			type: [String, Number],
			default: ''
		},
		prependIcon: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			selectedValue: '',
			fetchData: this.remote
		}
	},
	watch: {
		value (newValue) {
			this.selectedValue = newValue
		}
	},
	mounted () {
		this.selectedValue = this.defaultValue
	},
	methods: {
		async fetchOptions (dataKey) {
			if (this.fetchData && this.url) {
				this.options = ['loading...']
				try {
					const response = await this.$axios.$get(this.url)
					this.options = response.map((res) => res[dataKey])
					this.fetchData = false
					console.log('options', this.options)
				} catch (err) {
					console.log(err)
					this.fetchData = false
				}
			}
		}
	}
})
</script>

<style scoped lang="scss">
.form__group {
  display: inline-block;
}
.form__select {
  display: inline-block;
  border-radius: 2rem;
  width: 100%;
  padding: 0.35rem 1.5rem 0.35rem 1rem;
  background-color: inherit;
  border: 1px solid $color-text;
}
.form__select{
	border-color: $color-text;
	color: $color-text;
}
.prepend__input {
  padding-left: 3rem;
}
.form__label {
  margin-left: 0;
}
select {
  //window be4
  -moz-appearance: inherit;
  -webkit-appearance: none;
}
</style>
