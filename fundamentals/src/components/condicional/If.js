/* 
    <If test={expressao}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </IF>
*/


export default props => {
    if(props.test === true){
        return props.children
    }else {
        return false;
    }
}