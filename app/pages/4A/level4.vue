<script lang="ts">
import LevelPage from "../../components/LevelPage.vue"

export default class extends LevelPage {
    get categoryName(): string {
        return '4A'
    }

    get levelIndex(): number {
        return 3;
    }

}
</script>
