import { Children, className, onClick } from "react/cjs/react.production.min";

const AddBtn = ({chidren}) => {

    <button 
        type="button" 
        className="{className}"
        onClick={onClick}
    >
        {Children}
    </button>
}

const RemoveBtn = ({chidren}) => {

    <button 
        type="button" 
        className="{className}" 
        onClick={onClick}
    >
        {Children}
    </button>
}

export default RemoveBtn;