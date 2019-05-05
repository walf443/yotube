<script lang="ts">
import LevelPage from "../../components/LevelPage.vue"

export default class extends LevelPage {
    get categoryName(): string {
        return '5A'
    }

    get levelIndex(): number {
        return 0;
    }

}
</script>
