import { decorate, observable , action ,computed } from "mobx";
class Store {
    likesCount = 12;
    comments = ["Wow", "awesome"]

    get commentsCount(){
        return this.comments.length;
}
    
    postComment(comment){
        this.comments.push(comment)
}

    updateCount= () => {
        this.likesCount++;
    }
}

decorate(Store, {
    likesCount: observable,
    updateCount: action,
    comments :observable,
    postComment :action,
    commentsCount : computed
})

const storeInstance = new Store()

export default storeInstance;