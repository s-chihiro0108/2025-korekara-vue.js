Vue
  .creteApp({})
  .component('my-input', {
    props: ['str'],
    emits: ['update:str'],
    template: `<label>
      名前:
      <input type="text" v-model="str" v-on:input="$emit('update:str',$event.target.value)" />
      </label>`,
  })
