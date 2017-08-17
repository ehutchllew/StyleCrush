export default class SideButtons{
    title: string

    constructor(jsonData){
        Object.assign(this, jsonData);

        if(!this.title && !jsonData)
            this.title = '';
    }
}

(global || window).SideButton = SideButtons;
