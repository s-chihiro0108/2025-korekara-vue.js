const hook = (el,binding) => {
  if (binding.value ===  binding.oldValue){return;}
  if (binding.modifiers.boder){
    el.style.boderColor = binding.value;
    el.style.boderStyle = 'solid';
  } else {
    el.style.backgroundColor = binding.value;
  }
};


vue 
  .createApp({
    data(){
      return {
        color: 'yellow'
      };
    }
  })
  .directive
