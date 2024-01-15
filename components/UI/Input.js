import classes from './Input.module.css'

const Input = props => {
    return <div className={classes.control}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
    </div>
}

export default Input