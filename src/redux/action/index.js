/*
*   action 类型
*/
export const CHANGE_COLOR = 'CHANGE_COLOR';

/*
*   action 修改函数
*/
export function updateColor(text){
    return { type: CHANGE_COLOR , text }
}
