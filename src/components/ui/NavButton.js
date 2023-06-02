const NavButton = (props) => {
    return (
        <button
          type="button"
          onClick={props.onClick}
          disabled={props.currentQuestionIndex === 0}
          className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4"
        >
          {props.text}
        </button>
    )
}

export default NavButton;