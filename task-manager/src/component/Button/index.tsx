import './style.scss'

const Button = ({title, otherClass}:{title:string, otherClass:string}) => {
  return (
    <button className={`${otherClass} button bg-blue-600`}  type='submit'>{title}</button>
  )
}

export default Button
