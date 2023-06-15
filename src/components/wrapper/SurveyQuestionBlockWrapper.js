const SurveyQuestionBlockWrapper =(props)=>{
    return(
        <div class="grid md:grid-cols-2 md:gap-6">{props.children}</div>
    )
}
export default SurveyQuestionBlockWrapper;