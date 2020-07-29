import { action, runInAction, observable,decorate } from "mobx";

class ImageStore {

    id = 1

    imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
     setImageUrl(url) {
        this.imageUrl = url
    }
    async fetchImage() {
            const characterId = ++this.id
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            const data = await response.json()
            runInAction(() => {
                this.imageUrl = data.image
            })
            this.setImageUrl(data.image)
    }
}
decorate(ImageStore, {
    imageUrl : observable,
    fetchImage : action,
    setImageUrl : action
})

const imageStore = new ImageStore()

export default imageStore;