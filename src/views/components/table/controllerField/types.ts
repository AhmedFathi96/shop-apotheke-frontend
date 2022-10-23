

export interface IControllerFiledStateProps{}

export interface IControllerFiledDispatchProps{
    toggleStarRepo: (id:string,isStarred:boolean) => void;
}

export interface IControllerFiled extends IControllerFiledStateProps , IControllerFiledDispatchProps{
    id:string
}