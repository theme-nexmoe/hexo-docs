<script setup>
import { onMounted } from "vue"
onMounted(()=>{
    document.getElementsByClassName("VPNavBarTitle")[0].innerHTML = `<img class="logo" src="/icon.png" alt="Logo"/><span class="text">小舒同学</span>`;
})
</script>