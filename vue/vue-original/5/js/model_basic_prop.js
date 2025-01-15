Vue
  .createApp({
    data(){
      return {
        message: ''
      }
    }
  })
  .component('my-input', {
    props: [ 'modelValue'],
    emits: [ 'update:modelValue'],
    template: `<label>
      名前:
      <input type="text" v-model="modelValue" />
      </label>`,
      computed: {
        internalValue: {
          get() {
            return this.modelValue;
          },
          set(value) {
            if (this.modelValue !== value){
              this.$emit('update:modelValue', value);
            }
          }
        }
      }
  })
